<template>
  <div class="container options-container">
    <!-- <div class="row card-panel">
        <h5>History mode</h5>
        <div class="input-field col s4">
          <input v-model.lazy="year"  id="year" type="number" >
          <label class="active" for="year">Year</label>
        </div>
        <div class="input-field col s4">
          <input v-model.lazy="month"  id="month" type="number" >
          <label class="active" for="month">Month</label>
        </div>
        <div class="input-field col s4">
          <input v-model.lazy="date"  id="date" type="number" >
          <label class="active" for="date">Date</label>
        </div>
    </div> -->
    <div class="card-panel">
         <h4>Estimated wait time</h4>
         <div class="input-field">
          <input v-model.lazy="estTimeSmall"  id="time-small" type="number" >
          <label class="active" for="time-small">Small group</label>
        </div>
        <div class="input-field">
          <input v-model.lazy="estTimeMedium"  id="time-medium" type="number" >
          <label class="active" for="time-medium">Medium group</label>
        </div>
         <div class="input-field">
          <input v-model.lazy="estTimeLarge"  id="time-large" type="number" >
          <label class="active" for="time-medium">Large group</label>
        </div>
    </div>
    <div class="card-panel">
         <h4>Max table seat</h4>
         <div class="input-field">
          <input v-model.lazy="sizeStandardSmall"  id="size-small" type="number" >
          <label class="active" for="size-small">Small group</label>
        </div>
        <div class="input-field">
          <input v-model.lazy="sizeStandardMedium"  id="size-medium" type="number" >
          <label class="active" for="size-medium">Medium group</label>
        </div>
         <div class="input-field">
          <input v-model.lazy="sizeStandardLarge"  id="size-large" type="number" >
          <label class="active" for="size-medium">Large group</label>
        </div>
    </div>
     <button v-on:click="saveOptions" class="btn btn-text">Save</button>
     <!-- <button v-on:click="updateGallery" class="btn blue">Gallery Get</button> -->
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Options',
  computed:{
      year:{
          get() {
            return this.$store.state.queryDate.year
          },
          set(value) {
            this.$store.dispatch('changeQueryDateYear',value);
          }
        
      },
      month:{
          get() {
            return this.$store.state.queryDate.month
          },
          set(value) {
            this.$store.dispatch('changeQueryDateMonth',value);
          }
        
      },
      date:{
          get() {
            return this.$store.state.queryDate.date
          },
          set(value) {
            this.$store.dispatch('changeQueryDateDay',value);
          }
        
      },
       sizeStandardSmall:{
          get() {
            return this.$store.state.sizeStandard.small
          },
          set(value) {
            this.$store.dispatch('changeTableSizeSmall',value);
          }
        
      },
      sizeStandardMedium:{
          get() {
            return this.$store.state.sizeStandard.medium
          },
          set(value) {
            this.$store.dispatch('changeTableSizeMedium',value);
          }
        
      },
      sizeStandardLarge:{
          get() {
            return this.$store.state.sizeStandard.large
          },
          set(value) {
            this.$store.dispatch('changeTableSizeLarge',value);
          }
        
      },
       estTimeSmall:{
          get() {
            return this.$store.state.estTime.small
          },
          set(value) {
            this.$store.dispatch('changeEstTimeSmall',value);
          }
      },
      estTimeMedium:{
          get() {
            return this.$store.state.estTime.medium
          },
          set(value) {
            this.$store.dispatch('changeEstTimeMedium',value);
          }
      },
      estTimeLarge:{
          get() {
            return this.$store.state.estTime.large
          },
          set(value) {
            this.$store.dispatch('changeEstTimeLarge',value);
          }
      }


  },
  methods:{
     saveOptions(){
           let db = firebase.firestore();
                return db.collection('restaurants').doc(this.$store.state.loginId).update({
                  openLineUp: this.$store.state.openLineUp,
                  sizeStandard:{
                      small:  parseInt(this.$store.state.sizeStandard.small),
                      medium: parseInt(this.$store.state.sizeStandard.medium),
                      large:  parseInt(this.$store.state.sizeStandard.large)
                  },
                  waitTime:{
                      small:  parseInt(this.$store.state.estTime.small),
                      medium: parseInt(this.$store.state.estTime.medium),
                      large:  parseInt(this.$store.state.estTime.large)
                  }
               }).then(
                 alert('Save Success!')
               )
     },

      updateGallery(){
        let rid = this.$store.state.rid;
       let apikey = 'AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ'

      let api = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + rid + '&key='+ apikey;
      //let api = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + rid + '&key='+ apikey;
      
      //Get imgs from google map api
      this.axios.get(api,{ crossdomain: true }).then((response) => {
          console.log(response);
  
          let restaurantGallery = response.data.result.photos.map((item)=>{

            //myItem.photo_reference = item.photo_reference;
            //myItem.attributions = item.html_attributions[0];
            return { photo_reference: item.photo_reference,
                     html_attributions: item.html_attributions[0]  }

          })

            let db = firebase.firestore();
                return db.collection('restaurants').doc(this.$store.state.loginId).update({
                    restaurantGallery: restaurantGallery

                }).then(alert('OK'));
            })
        }

      

     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/_variables.scss";
  .options-container{ //(0,0,1,0)
  // background-color: #fff;
  border-radius: 20px;
  padding-bottom: 8px;
}

  .card-panel{  //(0,0,1,0)
    margin-top: 16px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    h4{ //(0,0,0,1)
        color: #664B1E;
        font-family: "Source Serif Pro", sans-serif;
        font-size: 1.2rem;
        margin: 0;
        padding-bottom: 8px;
        font-weight: bold;
        text-transform: capitalize;
      }

      .input-field{
        margin: 0 5px;
      }
    

    
  }

  .input-field{ //(0,0,1,0)
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      input{  //(0,0,0,1)
        border: 3px solid $accent;
        padding: 10px;
        border-radius: 5px;
      }

      @media screen and(max-width: 500px) {
        width: 100%;
      }
  }
  
</style>

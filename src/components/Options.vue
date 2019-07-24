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
    <div class="row card-panel">
         <h5>Estimated wait time</h5>
         <div class="input-field col s4">
          <input v-model.lazy="estTimeSmall"  id="time-small" type="number" >
          <label class="active" for="time-small">Wait time for small table</label>
        </div>
        <div class="input-field col s4">
          <input v-model.lazy="estTimeMedium"  id="time-medium" type="number" >
          <label class="active" for="time-medium">Wait time for medium table</label>
        </div>
         <div class="input-field col s4">
          <input v-model.lazy="estTimeLarge"  id="time-large" type="number" >
          <label class="active" for="time-medium">Wait timefor large table</label>
        </div>
    </div>
    <div class="row card-panel">
         <h5>Table seat</h5>
         <div class="input-field col s4">
          <input v-model.lazy="sizeStandardSmall"  id="size-small" type="number" >
          <label class="active" for="size-small">Maximium seat for small table</label>
        </div>
        <div class="input-field col s4">
          <input v-model.lazy="sizeStandardMedium"  id="size-medium" type="number" >
          <label class="active" for="size-medium">Maximium seat for medium table</label>
        </div>
         <div class="input-field col s4">
          <input v-model.lazy="sizeStandardLarge"  id="size-large" type="number" >
          <label class="active" for="size-medium">Maximium seat for large table</label>
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
  .options-container{
  min-height:100vh;
}
</style>

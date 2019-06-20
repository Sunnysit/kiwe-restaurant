<template>
  <div class="container options-container">
    <div class="row card-panel">
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
     <button v-on:click="saveOptions" class="btn green">Save</button>
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
        
      }


  },
  methods:{
     saveOptions(){
           let db = firebase.firestore();
               //firestore is the cloud
                return db.collection('restaurants').doc('LRhdqeE2bEbH7QrXHOETWX66D183').update({
                  loginId: 'LRhdqeE2bEbH7QrXHOETWX66D183',
                  rid:  'ChIJUYBL3XtxhlQRrOYhW5_6DYc',
                  openLineUp: this.$store.state.openLineUp,
                  sizeStandard:{
                      small:  parseInt(this.$store.state.sizeStandard.small),
                      medium: parseInt(this.$store.state.sizeStandard.medium),
                      large:  parseInt(this.$store.state.sizeStandard.large)
                  }
               })
     } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<template>
  <div class="lineup-control-container container">
    <div v-if="openLineUp">
      <WaitList />
    </div>
    <div v-else>
       <h5>Currently,line up system has not been activated.</h5>
       <h5>Please activate it in Settings.</h5>
       <button v-on:click="$router.push('/settings')" class="btn blue">Go to Settings</button>
    </div>
  </div>
</template>

<script>

import WaitList from '../components/WaitList.vue';


export default {
  name: 'home',
  components: {
    WaitList,
  },
    computed:{
    openLineUp(){
            return this.$store.state.openLineUp
          }
    }
}
</script>

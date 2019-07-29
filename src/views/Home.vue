<template>
 <section class="home-section">
   <Header />
  <div class="lineup-control-container container">
    <div v-if="openLineUp">
      <WaitList />
    </div>
    <div class="no-lineup-panel" v-else>
       <h5>Currently,line up system has not been activated.</h5>
       <h5>Please activate it in Settings.</h5>
       <button v-on:click="$router.push('/settings')" class="btn btn-text">Go to Settings</button>
    </div>
  </div>
 </section>
</template>

<script>

import WaitList from '../components/WaitList.vue';
import Header from '../components/Header.vue';


export default {
  name: 'home',
  components: {
    WaitList,
    Header,
  },
    computed:{
    openLineUp(){
            return this.$store.state.openLineUp
          },
    }
}
</script>
<style lang="scss" scoped>
.home-section{ //(0,0,1,0)
  background-color: #664B1E;

}
.title{ //(0,0,1,0)
  font-size: 3rem;

}

.lineup-control-container{  //(0,0,1,0)
      min-height: 90vh;
    }

.no-lineup-panel{ //(0,0,1,0)
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 8px 0;
}

</style>

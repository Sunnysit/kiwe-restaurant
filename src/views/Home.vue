<template>
 <section class="home-section">
   <Header />
  <div class="lineup-control-container container">
    <h1 class="restaurant-name">{{rName}}</h1>
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
       rName(){
        return this.$store.state.rName
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../sass/_variables.scss";
.home-section{ //(0,0,1,0)
  background-color: $csecond-green;
}
.title{ //(0,0,1,0)
  font-size: 3rem;

}


.no-lineup-panel{ //(0,0,1,0)
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 8px 0;
}

.restaurant-name{
  font-family: $sc-font-family;
  text-transform: uppercase;
  color: $main-green;
  font-size: 2rem;
  margin: 0 5px;
}

</style>

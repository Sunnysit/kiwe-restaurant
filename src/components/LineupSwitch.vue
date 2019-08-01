<template>
    <div class="container">
      <div class="lineup-control card-panel">
          <h4>Waiting list switch</h4>
        <div  class="switch">
        <!-- <label>
          Off
          <input v-model="openLineUp"  type="radio">
          <span class="lever"></span>
          On
        </label> -->
        <input type="radio" id="on" value="true" v-model="openLineUp">
        <label for="on">On</label>
        <input type="radio" id="off" value="false" v-model="openLineUp">
        <label for="off">Off</label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LineupSwitch',
  computed:{
      openLineUp:{
          get() {
            return this.$store.state.openLineUp
          },
          set() {
            this.$store.dispatch('toggleLineupSwitch');
          }
        
      }
  },
  methods:{
    sayHi(){
      alert('sas');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/_variables.scss";
  .lineup-control{  //(0,0,1,0)
      border-radius: 20px;
      margin-bottom: 20px;
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      h4{ //(0,0,0,1)
        color: #664B1E;
        font-family: "Source Serif Pro", sans-serif;
        font-size: 1.2rem;
        margin: 0;
        padding-bottom: 15px;
        font-weight: bold;
        text-transform: capitalize;
      }
  }
</style>

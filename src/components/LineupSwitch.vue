<template>
    <div class="container">
      <div class="lineup-control card-panel">
        <h5>Waiting list system</h5>
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
  .lineup-control{
      background-color: #fff;
      border-radius: 20px;
      margin-bottom: 20px;

      h5{
        color: #62af46;
        font-family: "Source Serif Pro", sans-serif;
        font-size: 1.2rem;
        margin: 0;
        padding-bottom: 15px;
        font-weight: bold;
        text-transform: uppercase;
      }
  }
</style>

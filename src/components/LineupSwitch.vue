<template>
    <div class="container">
      <div class="lineup-control card-panel">
        <h5>Line up system</h5>
        <div  class="switch">
        <label>
          Off
          <input v-model="openLineUp"  type="checkbox">
          <span class="lever"></span>
          On
        </label>
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

</style>

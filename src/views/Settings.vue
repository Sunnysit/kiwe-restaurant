<template>
  <section class="settings-section">
     <Header />
     <LineupSwitch />
     <Options />
  </section>
</template>
<script>
import Options from '../components/Options.vue';
import LineupSwitch from '../components/LineupSwitch.vue';
import Header from '../components/Header.vue';


export default {
  name:'Settings',
  components:{
    Options,
    LineupSwitch,
    Header,
  },
  computed:{},
  methods:{
    
  }

}
</script>
<style scoped lang="scss">
@import "../sass/_variables.scss";
.settings-section{
  background-color: $csecond-green;
  min-height:100vh;

}

</style>


<template>
  <section class="settings">
     <Header />
     <LineupSwitch />
     <Options />
     <Footer />
  </section>
</template>
<script>
import Options from '../components/Options.vue';
import LineupSwitch from '../components/LineupSwitch.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name:'Settings',
  components:{
    Options,
    LineupSwitch,
    Header,
    Footer
  },
  computed:{},
  methods:{
    
  }

}
</script>
<style scoped>


</style>


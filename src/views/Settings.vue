<template>
  <div class="settings">
     <LineupSwitch />
     <Options />
    
  </div>
</template>
<script>
import Options from '../components/Options.vue';
import LineupSwitch from '../components/LineupSwitch.vue';

export default {
  name:'Settings',
  components:{
    Options,
    LineupSwitch 
  },
  computed:{},
  methods:{
    
  }

}
</script>

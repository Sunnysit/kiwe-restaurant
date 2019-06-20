<template>
  <div class="signin-container container">
    <!-- <Register /> -->
    <Login />
  </div>
</template>
<script>
import Login from '../components/auth/Login.vue';
// import Register from '../components/auth/Register.vue';

export default {
  
  name:'Signin',
  components:{
    Login,
    // Register
  },
  computed:{},
  methods:{}

}
</script>

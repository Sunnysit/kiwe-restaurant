<template>
<section class="header">
    <div class="header-menu">
        <HeaderMenu />
    </div>
    <!-- <div class="title-container">
        <h1 class="restaurant-name">{{rName}}</h1>
        <h2>Waiting list system</h2>
    </div> -->
</section>
    
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";

export default {
    name: 'Header',
    components:{
        HeaderMenu  
    },
    computed: {
        rName(){
        return this.$store.state.rName
        }
    }
    
}
</script>

<style scoped lang='scss'>

  @import "../sass/_variables.scss";

  .header{  //(0,0,1,0)
      background-color: #664B1E;
  }

  .title-container{ //(0,0,1,0)
      background-color: white;
      border-radius: 20px;
      margin-bottom: 20px;
      .restaurant-name{ //(0,0,1,0)
            font-size: 2rem;
            margin: 0 auto;
            font-family: "Source Serif Pro", sans-serif;
            font-weight: bold;
            color: black;
            line-height: 1;
            padding-top: 15px;
      }
      h2{   //(0,0,0,1)
          color: $main-green;
          font-family: "Source Serif Pro", sans-serif;
          font-size: 1.2rem;
          margin-top: 0;
          padding-bottom: 15px;
          position: relative;
          transform: translateX(50px);

      }
  }

</style>


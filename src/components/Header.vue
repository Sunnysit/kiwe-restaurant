<template>
<section class="header">
    <img src="@/assets/kiwe-logo.png" alt="kiwe-logo" class="header-logo">
    <div class="title-container">
        <h1 class="restaurant-name">{{rName}}</h1>
        <h2>Waiting list system</h2>
    </div>
</section>
    
</template>

<script>
export default {
    name: 'Header',
    
    computed: {
        rName(){
        return this.$store.state.rName
        }
    }
    
}
</script>

<style scoped lang='scss'>

  @import "../sass/_variables.scss";

  .header{
      background-color: #664B1E;
  }

  .header-logo{
      width: 50px;
      display: block;
      margin: 0 auto;
      padding: 10px;
  }

  .title-container{
      background-color: white;
      border-radius: 20px;
      .restaurant-name{
            font-size: 2rem;
            margin: 0 auto;
            font-family: "Source Serif Pro", sans-serif;
            font-weight: bold;
            color: black;
            line-height: 1;
            padding-top: 15px;
      }
      h2{
          color: #62af46;
          font-family: "Source Serif Pro", sans-serif;
          font-size: 1.2rem;
          margin-top: 0;
          padding-bottom: 15px;
          position: relative;
          transform: translateX(50px);

      }
  }

</style>


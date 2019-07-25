<template>
    <div id="nav" class="section">
            <router-link to="/home" class="menu-item">
                <img class="menu-icon icon-normal" src="@/assets/kiwe___Home.png" alt="icon-home">
                <img class="menu-icon icon-active" src="@/assets/kiwe__orange___Home.png" alt="icon-home">
               <p>Home</p>
            </router-link>
            <img src="@/./assets/kiwe-logo.png" alt="kiwe-logo" class="header-logo">
            <router-link to="/settings" class="menu-item" >
                <img class="menu-icon icon-normal" src="@/assets/kiwe___Settings.png" alt="icon-settings">
                <img class="menu-icon icon-active" src="@/assets/kiwe__orange___Settings.png" alt="icon-settings">
                <p >Settings</p>
            </router-link>
    
      </div>
</template>

<script>
export default {
    name: 'HeaderMenu',
    activation: 0,

    methods: { 
        activeMenu:function (el){
            this.activation(el);
        }
    }
    
}
</script>

<style scoped lang="scss">
  .header-logo{
      width: 50px;
      height: 50px;
      display: block;
      margin: 0 auto;
      padding: 10px;
  }


.menu-item{
    margin-bottom: 0;
    text-decoration: none;
    p{
        margin: 0;
        color: white;
    }

}


#nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}


.menu-item{
    padding: 0 10px;

    .menu-icon{
        width: 40px;
        margin: 0 auto;
    }

    .icon-normal{
        display: block;
    }
    .icon-active{
        display: none;
    }
}

.menu-item svg path {
   color: white !important;
    fill: white;
    transform: scale(.7);
    transform-origin: center;
}



//   .router-link-active p,
// .router-link-active svg path 
// {
//     color: orange !important;
//     fill: orange;
    
// }

.router-link-active{
    p{
        color: orange;
    }
    .icon-normal{
        display: none;
    }
    .icon-active{
        display: block;
    }
}


</style>



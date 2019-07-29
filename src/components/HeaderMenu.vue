<template>
    <div id="nav" class="section">
            <router-link to="/home" class="menu-item">
                <img class="menu-icon icon-normal" src="@/assets/kiwe___Home.png" alt="icon-home">
                <img class="menu-icon icon-active" src="@/assets/kiwe__orange___Home.png" alt="icon-home">
               <p>Home</p>
            </router-link>
            <img src="@/assets/kiwe__Logo.png" alt="kiwe-logo" class="header-logo">
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
    
    
}
</script>

<style scoped lang="scss">
  .header-logo{ //(0,0,1,0)
      width: 50px;
      height: 50px;
      display: block;
      margin: 0 auto;
      padding: 10px;
  }


.menu-item{ //(0,0,1,0)
    margin-bottom: 0;
    text-decoration: none;
    p{  //(0,0,0,1)
        margin: 0;
        color: white;
    }

}


#nav {  //(0,1,0,0)
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}


.menu-item{ //(0,0,1,0)
    padding: 0 10px;

    .menu-icon{ //(0,0,1,0)
        width: 40px;
        margin: 0 auto;
    }

    .icon-normal{   //(0,0,1,0)
        display: block;
    }
    .icon-active{   //(0,0,1,0)
        display: none;
    }
}

.menu-item svg path {   //(0,0,1,2)
   color: white !important;
    fill: white;
    transform: scale(.7);
    transform-origin: center;
}


.router-link-active{    //(0,0,1,0)
    p{  //(0,0,0,1)
        color: orange;
    }
    .icon-normal{   //(0,0,1,0)
        display: none;
    }
    .icon-active{   //(0,0,1,0)
        display: block;
    }
}


</style>



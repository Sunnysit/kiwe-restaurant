<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./sass/_variables.scss";

body{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
#nav {
  padding: 20px 0 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


  .btn {
    background-color: $bt-background-color;
    display: block;
    color: white;
    width: 200px;
    padding: 10px 0;
    outline: none;
    border: none;
    box-shadow: 2px 2px 4px $bt-background-color;
    cursor: pointer;
  }

  .btn-text {
    text-align: center;
    font-size: 1rem;
    margin: 1rem auto;
    border-radius: $bt-border-radius;
    font-weight: $bt-font-weight;
    font-family: $bt-font-family;
    text-transform: capitalize;
  }

  .red-text{
    color: red;
  }

</style>

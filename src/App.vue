<template>
  <div id="app">
    <!--<img width="25%" src="./assets/logo.png">-->
    <div class="container">
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <ul class="navbar-nav mr-auto"">
          <!-- Navigation Links -->
          <a class="navbar-brand" href="#">Kutloano's Online Shop</a>
          <a><router-link class="nav-link" v-bind:to="'/'">Home</router-link></a>
          <a><router-link class="nav-link" v-bind:to="'/admin'">Admin</router-link></a>
          <a><router-link class="nav-link" v-bind:to="'/cart'">Cart</router-link></a>
        </ul>
    </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

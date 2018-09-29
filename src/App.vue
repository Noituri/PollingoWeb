<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: ProductSans;
  src: url('./assets/fonts/Product\ Sans\ Regular.ttf');
}

html {
  height: 100%;
  background: linear-gradient(45deg,#DA1FF2,#4C15D0) no-repeat center center fixed;
}

#app {
  font-family: 'ProductSans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>

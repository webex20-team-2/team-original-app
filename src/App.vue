<template>
  <div class="nav__bar">
    <a class="nav__logo nav__link">メモるーと</a>
    <div class="nav__items">
      <router-link to="/" class="nav__item nav__link">Home</router-link>
      <router-link to="/post-memo" class="nav__item nav__link"
        >Post memo</router-link
      >
      <router-link to="/map-view" class="nav__item nav__link"
        >Map view</router-link
      >
      <router-link to="/my-memo" class="nav__item nav__link"
        >My memo</router-link
      >
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav__bar {
  font-size: 20px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: yellow;
  padding: 5px;
}
.nav__link:visited {
  color: #2c3e50;
}
.nav__logo {
  width: 200px;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 100px;
  border-left: 1px solid #2c3e50;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: larger;
  font-weight: 700;
  text-decoration: none;
}
</style>

<template>
  <div id="app">
      <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
    name: 'app',
    components: {
        Header,
    },
    mounted() {
        this.$store.dispatch('fetchEmailTemplates')
    }
}
</script>
<style lang="scss">
html {
  display: block;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e7edf5;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

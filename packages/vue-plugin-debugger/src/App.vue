<template>
    <div id="app">
      <h1>Hello Vue 3 with Vite!</h1>
    </div>
  </template>
  
  <script name="App" setup>
  // 我是注释
  import { onMounted } from 'vue';
  onMounted(() => {
    const name =        'John';
    const message = `Hello, ${name} !`;
    console.log(message)
  })
  // export default {
  //   name: 'App'
  // }
  </script>
  
  <!-- <style scoped>
  #app {
    background-color: purple;
  }
  </style> -->
  <style scoped>
  #app {
    background-color: pink;
  }
  h1 {
    color: yellow;  
  }
  </style>
<template>
    <div id="app">
      <h1>Hello Vue 3 with Vite!{{ cicd }}</h1>
      <Dialog></Dialog>
    </div>
  </template>
  
  <script name="App" setup>
  // 我是注释
  import { onMounted, ref } from 'vue';
  const cicd = ref('Continuous Integration')
  // 组件命名：全都大驼峰或中划线
  import Dialog from './components/dialog.vue';
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
<template>
    <div id="app">
      <h1>Hello Vue 3 with Vite!{{ cicd }}</h1>
      <Dialog></Dialog>
      {{ cVal }}
    </div>
  </template>
  
  <script name="App" setup>
    import { onMounted, ref } from 'vue';
  import {useDraggable} from '@vue-durant-plugin/durant-draggable-plus';
  const {ccc} = useDraggable()
  console.log("🚀 ~ useDraggable:", ccc)
  const cVal = ref(ccc);
  // 我是注释
  const cicd = ref('Continuous Integration')
  // 组件命名：全都大驼峰或中划线
  import Dialog from './components/dialog.vue';
  onMounted(() => {
    const name = 'John';
    const message = `Hello, ${name} !`;
    console.log(message)
  })
  </script>
  
  <style scoped>
  #app {
    background-color: pink;
  }
  h1 {
    color: yellow;  
  }
  </style>
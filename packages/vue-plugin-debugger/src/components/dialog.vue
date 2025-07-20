<template>
    <div>
        {{ content }}冲冲冲
    </div>
  </template>

<script name="Dialog" setup>
import {ref} from 'vue';
const content = ref('我是弹窗');
</script>
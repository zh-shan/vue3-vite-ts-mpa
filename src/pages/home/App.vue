<template>
  <div class="relative w-screen h-screen bg-white home">
    <svg-icon name="star"></svg-icon>
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Home'
})

const title = '主页'
</script>

<script setup lang="ts">
const mes = ref('hello world')
</script>
<template>
  <div class="h-[30px] w-full text-center color-red bg-gray">
    {{ mes }}
      <nuxt-welcome></nuxt-welcome>
  </div>
</template>

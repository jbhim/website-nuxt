<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
<template>
    <div class="h-[60px] w-full text-center bg-gray-200 text-3xl">
        {{ runtimeConfig.public.appName }}
    </div>
    <nuxt-welcome></nuxt-welcome>
</template>

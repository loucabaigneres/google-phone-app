<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <main
    class="flex aspect-[9/20] w-[315px] flex-col overflow-hidden rounded-3xl bg-gray-900"
  >
    <StatusBar />
    <RouterView />
  </main>
</template>

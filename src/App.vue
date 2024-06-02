<script setup>
import Nav from "@/components/Nav.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <main
    class="relative flex aspect-[9/20] w-[315px] overflow-hidden rounded-3xl bg-gray-900"
  >
    <RouterView />
    <Nav />
  </main>
</template>

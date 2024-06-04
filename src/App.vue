<script setup>
import SearchBar from "@/components/SearchBar.vue"
import Nav from "@/components/Nav.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <main
    class="relative flex aspect-[9/20] w-[315px] flex-col overflow-hidden rounded-3xl bg-gray-900"
  >
    <SearchBar />
    <RouterView />
    <Nav />
  </main>
</template>

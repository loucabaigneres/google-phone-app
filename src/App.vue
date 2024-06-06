<script setup>
import Nav from "@/components/Nav.vue"
import SearchBar from "@/components/SearchBar.vue"
import StatusBar from "@/components/StatusBar.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <main
    class="flex aspect-[9/20] w-[315px] flex-col overflow-hidden rounded-3xl bg-gray-900"
  >
    <StatusBar />
    <SearchBar />
    <div class="h-full overflow-hidden px-3 py-0.5">
      <RouterView />
    </div>
    <Nav />
  </main>
</template>

<script setup>
import CallCard from "@/components/CallCard.vue"
</script>

<template>
  <section class="flex h-full flex-col overflow-hidden">
    <SearchBar />
    <div class="mb-0.5 h-full overflow-hidden px-3">
      <div
        class="flex h-full flex-col overflow-y-auto pt-4 text-gray-400 no-scrollbar"
      >
        <h4 class="mb-6 text-xs">Today</h4>
        <div class="flex flex-col gap-6">
          <CallCard v-for="index in 1" :key="index" />
        </div>
        <h4 class="my-6 text-xs">Yesterday</h4>
        <div class="flex flex-col gap-6">
          <CallCard v-for="index in 7" :key="index" />
        </div>
        <h4 class="my-6 text-xs">Older</h4>
        <div class="flex flex-col gap-6">
          <CallCard v-for="index in 4" :key="index" />
        </div>
      </div>
    </div>
  </section>
  <NavBar />
</template>

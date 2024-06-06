<script setup>
import CallCard from "@/components/CallCard.vue"
</script>

<template>
  <section
    class="flex h-full flex-col overflow-y-auto px-3 pt-4 text-gray-400 no-scrollbar"
  >
    <h4 class="mb-6 text-xs">Today</h4>
    <div class="flex flex-col gap-6">
      <CallCard v-for="index in 2" :key="index" />
    </div>
    <h4 class="my-6 text-xs">Yesterday</h4>
    <div class="flex flex-col gap-6">
      <CallCard v-for="index in 7" :key="index" />
    </div>
    <h4 class="my-6 text-xs">Older</h4>
    <div class="flex flex-col gap-6">
      <CallCard v-for="index in 5" :key="index" />
    </div>
  </section>
</template>

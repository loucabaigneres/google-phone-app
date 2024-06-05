<script setup>
import CallCard from "@/components/CallCard.vue"
</script>

<template>
  <section
    class="no-scrollbar flex h-full flex-col gap-4 overflow-y-auto px-3 py-1 text-gray-400"
  >
    <h4 class="text-xs">Today</h4>
    <div class="flex flex-col gap-4">
      <CallCard />
      <CallCard />
      <CallCard />
    </div>
    <h4 class="text-xs">Yesterday</h4>
    <div class="flex flex-col gap-4">
      <CallCard />
      <CallCard />
      <CallCard />
    </div>
    <h4 class="text-xs">Older</h4>
    <div class="flex flex-col gap-4">
      <CallCard />
      <CallCard />
      <CallCard />
    </div>
  </section>
</template>

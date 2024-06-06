<script>
import { RouterLink } from "vue-router"
</script>

<template>
  <nav class="w-full bg-gray-800 text-center">
    <div class="grid grid-cols-3 py-2 text-gray-400">
      <RouterLink to="/favorites" class="flex flex-col items-center gap-1.5">
        <span
          class="material-symbols-outlined rounded-3xl px-4 py-0.5 text-xl/5"
        >
          star
        </span>
        <span class="text-xs"> Favorites </span>
      </RouterLink>
      <RouterLink to="/" class="flex flex-col items-center gap-1.5">
        <span
          class="material-symbols-outlined rounded-3xl px-4 py-0.5 text-xl/5"
        >
          schedule
        </span>
        <span class="text-xs"> Recents </span>
      </RouterLink>
      <RouterLink to="/contacts" class="flex flex-col items-center gap-1.5">
        <span
          class="material-symbols-outlined rounded-3xl px-4 py-0.5 text-xl/5"
        >
          group
        </span>
        <span class="text-xs"> Contacts </span>
      </RouterLink>
    </div>
    <div class="flex w-full justify-center py-2">
      <div class="h-1 w-1/4 rounded-sm bg-gray-300"></div>
    </div>
  </nav>
</template>

<style>
.router-link-exact-active > .material-symbols-outlined {
  font-variation-settings: "FILL" 1;
  background-color: #374151;
}

.router-link-exact-active > span:last-child {
  font-weight: 700;
}
</style>

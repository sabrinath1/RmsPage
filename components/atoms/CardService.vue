<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
  text: "white" | "brown";
}>();
</script>

<template>
  <div
    class="block rounded-xl border p-4 shadow-sm hover:ring-1 focus:outline-none focus:ring text-center"
  >
    <span
      class="inline-block rounded-lg p-3 justify-center items-center w-24 h-24 mt-5"
    >
      <img :src="props.img" class="w-16 h-16" />
    </span>

    <h2 class="mt-2 font-semibold flex justify-center my-3">
      {{ props.title }}
    </h2>
  </div>
</template>

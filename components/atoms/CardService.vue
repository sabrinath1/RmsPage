<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
  text: "white" | "brown";
}>();
</script>

<template>
  <div
    class="flex flex-col justify-center rounded-xl border p-4 shadow-sm hover:ring-1 focus:outline-none focus:ring text-center items-center w-36 xl:w-40 h-36 select-none cursor-pointer"
  >
    <img :src="props.img" class="w-12 h-12" />

    <h2
      class="mt-4 lg:mt-1 font-medium flex justify-center text- center items-center my-3"
    >
      {{ props.title }}
    </h2>
  </div>
</template>

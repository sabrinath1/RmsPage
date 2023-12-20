<script setup lang="ts">
const props = defineProps<{
  title: string;
  img: string;
  text: "white" | "brown";
}>();
</script>

<template>
  <div
    class="block rounded-xl border p-4 shadow-sm hover:ring-1 focus:outline-none focus:ring text-center items-center"
  >
    <span class="inline-block rounded-lg w-20 h-8 lg:h-16 mx-10 lg:mx-12">
      <img :src="props.img" class="w-12 h-12" />
    </span>

    <h2
      class="mt-4 lg:mt-1 font-semibold flex justify-center text- center items-center my-3"
    >
      {{ props.title }}
    </h2>
  </div>
</template>

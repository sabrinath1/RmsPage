<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "white" | "black";
}>();
</script>
<template>
  <div class="flex flex-row mt-6 relative -z-30">
    <h2
      class="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto md:mx-10 text-center my-4 font-mono"
      :class="{
        'text-white': props.color === 'white',
        'text-secondary': props.color === 'black',
      }"
    >
      {{ props.name }}
    </h2>
  </div>
</template>

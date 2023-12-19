<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "white" | "black" | "yellow";
}>();
</script>
<template>
  <div class="flex flex-row mt-6 relative justify-center w-full">
    <h2
      class="font-bold text-center my-4 text-3xl sm:text-4xl"
      :class="{
        'text-white': props.color === 'white',
        'text-secondary': props.color === 'black',
        'text-primary': props.color === 'yellow',
      }"
    >
      {{ props.name }}
    </h2>
  </div>
</template>

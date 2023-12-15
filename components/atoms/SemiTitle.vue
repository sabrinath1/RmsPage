<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "white" | "black";
}>();
</script>
<template>
  <div class="flex flex-row mt-6 relative justify-center">
    <h2
      class="font-bold text-2xl lg:text-3xl mx-auto md:mx-10 text-center my-4"
      :class="{
        'text-white': props.color === 'white',
        'text-secondary': props.color === 'black',
      }"
    >
      {{ props.name }}
    </h2>
  </div>
</template>

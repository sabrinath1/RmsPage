<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>
<template>
  <div
    class="flex text-white w-full my-6 relative text-justify justify-center items-center"
  >
    {{ props.content }}
  </div>
</template>

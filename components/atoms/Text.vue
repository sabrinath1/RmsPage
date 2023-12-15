<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>
<template>
  <div
    class="flex text-white text-base w-full my-6 relative text-justify "
  >
    {{ props.content }}
  </div>
</template>

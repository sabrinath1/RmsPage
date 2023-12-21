<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <n-timeline>
    <n-timeline-item
      v-for="(item, index) in props.specialist?.historic"
      :key="index"
      :title="item.course"
      :content="item.local"
      :time="`${item.start} - ${item.end}`"
    />
  </n-timeline>
</template>

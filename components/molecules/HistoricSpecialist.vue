<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <div class="mt-10 -z-30">
    <n-timeline>
      <n-timeline-item
        color="#FBC846"
        v-for="(item, index) in props.specialist?.historic"
        :key="index"
        :title="item.course"
        :content="item.local"
        :time="`${item.start} - ${item.end}`"
      />
    </n-timeline>
  </div>
</template>

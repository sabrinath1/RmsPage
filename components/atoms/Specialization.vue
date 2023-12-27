<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <div class="mt-10">
    <div class="">
      <n-list>
        <n-list-item v-for="s in specialist.skills">
          {{ s }}
        </n-list-item>
      </n-list>
    </div>
  </div>
</template>

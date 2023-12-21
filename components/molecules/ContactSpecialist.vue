<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <AtomsCardSpecialist
      :img="specialist.img.url"
      :content="specialist.img.description"
    />
    <div class="flex flex-col justify-center -mt-32">
      <AtomsSpecialistContact
        :whatsapp="specialist.links.whatsapp"
        :instagram="specialist.links.instagram"
      />
    </div>
  </div>
</template>

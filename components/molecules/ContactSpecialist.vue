<script setup lang="ts">
const props = defineProps<{
  specialist: Specialist;
}>();
</script>
<template>
  <div class="flex justify-start mt-10 lg:mt-0 lg:mb-20">
    <div class="flex flex-col justify-center items-center">
      <AtomsCardSpecialist
        :img="specialist.img.url"
        :content="specialist.img.description"
      />
      <div class="flex flex-col justify-center -mt-32">
        <AtomsSpecialistContact
          :whatsapp="props.specialist.links.whatsapp"
          :instagram="props.specialist.links.instagram"
        />
      </div>
    </div>
  </div>
</template>

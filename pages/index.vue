<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
<template>
  <div class="relative">
    <OrganismsBanner2 />
    <MoleculesCall id="home" />
    <OrganismsRegularization />
    <OrganismsServices id="services" />
    <OrganismsListSpecialist id="specialists" />
    <OrganismsContact id="contact" />
    <MoleculesDoubts />

    <AtomsBackTop />
  </div>
</template>

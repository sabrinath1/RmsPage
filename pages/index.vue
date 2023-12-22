<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
<template>
  <div>
    <OrganismsBanner2 />
    <MoleculesCall id="home" />
    <OrganismsRegularization />
    <OrganismsServices id="services" />

    <OrganismsListSpecialist id="specilists" />
    <OrganismsContact id="contact" />
    <MoleculesDoubts />

    <AtomsBackTop />
  </div>
</template>

<script setup lang="ts">
const ListServices = ref<Services[]>([
  {
    img: "/img/contrato.png",
    title: " teste1",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "teste2",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "teste3",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "",
    description: "",
  },
]);
</script>
<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
    <AtomsCardService
      class="even:bg-primary odd:bg-secondary"
      :title="service.title"
      :img="service.img"
      text="brown"
      v-for="service in ListServices"
    />
  </div>
</template>

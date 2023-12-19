<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="justify-center w-full px-10">
    <AtomsSemiTitle name="Agende uma Reunião" color="black"></AtomsSemiTitle>

    <!-- <p
      class="lg:mt-10 text-xl xl:text-2xl font-sans text-black font-normal text-justify lg:ml-4 xl:ml-0"
    >
      Somos uma equipe comprometida de profissionais apaixonados pelo que
      fazemos. Com vasta experiência e conhecimento aprofundado nas nuances das
      leis imobiliárias, estamos aqui para orientar nossos clientes em cada
      etapa do processo de regularização.
    </p> -->
    <AtomsText
      content=" Somos uma equipe comprometida de profissionais apaixonados pelo que
      fazemos. Com vasta experiência e conhecimento aprofundado nas nuances das
      leis imobiliárias, estamos aqui para orientar nossos clientes em cada
      etapa do processo de regularização."
      color="black"
    ></AtomsText>
    <div class="flex justify-center mt-10">
      <AtomsButtonContact
        name="Agendar Horário"
        color="yellow"
        shadow="brown"
        @click="() => social.redirect('whatsapp1')"
      ></AtomsButtonContact>

      <!-- <button
        class="btn bg-primary text-white hover:bg-secondary"
        @click="social.redirect('whatsapp')"
      >
        Agendar Horário
      </button> -->
    </div>
  </div>
</template>

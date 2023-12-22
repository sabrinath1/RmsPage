<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="w-full">
    <section
      class="relative bg-[url(/img/imagem-banner.png)] bg-cover bg-center bg-no-repeat -z-30"
    >
      <div
        class="absolute inset-0 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div
          class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right md:text-start lg:text-center mt-20 md:mt-10"
        >
          <h1
            class="text-5xl font-extrabold sm:text-7xl text-white xl:text-8xl"
          >
            Regularize

            <strong class="block font-extrabold text-primary">
              seu Imóvel
            </strong>
          </h1>

          <p
            class="mt-4 max-w-lg sm:text-xl/relaxed text-white font-light xl:text-2xl xl:w-full hidden lg:flex"
          >
            Conte com a orientação de profissionais especializados
          </p>

          <div
            class="mt-8 flex flex-wrap gap-4 text-center justify-center md:justify-start lg:justify-center"
          >
            <AtomsButtonContact
              name="Saber Mais"
              color="yellow"
              shadow="brown"
              text="brown"
              @click="() => social.redirect('whatsapp2')"
            ></AtomsButtonContact>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

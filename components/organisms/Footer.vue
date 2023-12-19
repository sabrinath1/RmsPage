<script setup lang="ts">
const myList = ref([
  {
    title: "Sobre",
    items: [
      {
        label: "Especialistas",
        key: "#",
      },

      {
        label: "Serviços",
        key: "#",
      },
      {
        label: "Agendar Horário",
        key: "#",
      },
    ],
  },

  {
    title: "Contatos",
    items: [
      {
        label: "(15)98155-0048",
      },
      {
        label: "(11)98148-6600",
      },
      {
        label: "contato@rmsregularizacao.com.br",
      },
    ],
  },
  {
    title: "Serviços",
    items: [
      {
        label: " Documentação Imobiliária",
      },
      {
        label: "Escritura de Imóveis",
      },
      {
        label: "Inventário e Testamento",
      },
      {
        label: "Usucapião",
      },
      {
        label: "Contratos",
      },
    ],
  },
]);
const social = useSocialRedirect();
</script>

<template>
  <div class="px-4 py-12 mx-auto w-full sm:px-6 lg:px-16 bg-secondary">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="flex flex-col justify-start items-center">
        <img
          class="w-40 xl:w-56 h-auto"
          src="/img/logotipoamarelo.png"
          alt="Logotipo RMS Regularização Imobiliária"
        />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 xl:mt-0 xl:col-span-2 sm:justify-items-center mx-14 sm:mx-1"
      >
        <div
          class="flex-col md:grid md:grid-cols-1 md:gap-8"
          v-for="(i, index) in myList"
          :key="`title_${index}`"
        >
          <div class="flex flex-col">
            <h3 class="text-xl font-bold tracking-wider text-primary font-mono">
              {{ i.title }}
            </h3>
            <ul role="list" class="mt-4 space-y-2 text-base lg:text-lg">
              <li
                class=""
                v-for="(subItem, sbIndex) in i.items"
                :key="`item_${sbIndex}`"
              >
                <div class="flex text-white">
                  <!-- <NuxtLink
                    :to="subItem.label"
                    class="text-base text-white hover:text-primary flex-row"
                  >
                    {{ subItem.label }}
                  </NuxtLink> -->
                  {{ subItem.label }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="px-5 py-5 mx-auto bg-white w-full sm:px-6 md:flex md:items-center md:justify-between lg:px-20"
  >
    <div class="flex items-end space-x-4 mr-6">
      <button
        class="hidden sm:flex"
        text
        style="font-size: 35px"
        @click="social.redirect('whatsapp2')"
      >
        <Icon name="mdi:whatsapp" class="text-secondary transition-all" />
      </button>
      <button
        class="hidden sm:flex"
        text
        style="font-size: 35px"
        @click="social.redirect('instagram')"
      >
        <Icon name="mdi:instagram" class="text-secondary transition-all" />
      </button>
    </div>

    <div
      class="flex justify-center font-extralight space-x-6 md:order-first md:mb-0 text-secondary text-center xl:justify-around"
    >
      Todos os direitos reservados à RMS Regularização Imobiliária
    </div>
  </div>
</template>

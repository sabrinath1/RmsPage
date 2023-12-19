<script setup lang="ts">
const ListServices = ref<Service[]>([
  {
    img: "/img/usucapiao.png",
    title: " Usucapião Judicial e Extraconjungal",
    description:
      "De forma simplória e resumida a usucapião é um processo legal pelo qual alguém pode \nadquirir a propriedade de um bem imóvel (como uma casa, uma fazenda ou um simples\nterreno) após ocupá-lo e usá-lo de maneira contínua e pacífica por um determinado\nperíodo de tempo, estabelecido por lei. Esse processo permite que uma pessoa que\nnão seja o proprietário de um imóvel se torne o proprietário legal se cumprir os\nrequisitos da usucapião. No Brasil, a previsão legal da usucapião está regulamentada\npelo Código Civil Brasileiro, mais especificamente nos artigos 1.238 a 1.244.\nExistem diversas espécies, e cada uma delas contém diferentes exigências legais.\nConsistem em aquisição originária, ou seja, trata-se da obtenção de propriedade de um\nbem de forma direta, sem que haja transferência de um proprietário anterior.",
  },
  {
    img: "/img/adjudicacao.png",
    title: "Adjuticação Compulsória",
    description: "",
  },
  {
    img: "/img/inventario.png",
    title: "Inventário e Partilhas",
    description: "",
  },
  {
    img: "/img/testamento.png",
    title: "Testamentos",
    description: "",
  },
  {
    img: "/img/doacao.png",
    title: "Doações",
    description: "",
  },
  {
    img: "/img/cessoes.png",
    title: " Cessões Hereditárias",
    description: "",
  },
  {
    img: "/img/regularizacao.png",
    title: "Regularização Documental",
    description: "",
  },
  {
    img: "/img/contratos.png",
    title: "Contratos de compra, venda e locação",
    description: "",
  },
]);
const showModal = ref(false);
const activeService = ref<Service>();

function handleClick(service: Service) {
  activeService.value = service;
  showModal.value = true;
}
const social = useSocialRedirect();
</script>
<template>
  <div>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <AtomsCardService
        @click="handleClick(service)"
        class="even:bg-secondary odd:bg-primary even:text-white odd:text-secondary"
        :title="service.title"
        :img="service.img"
        text="brown"
        v-for="service in ListServices"
      />
    </div>
    <n-modal v-model:show="showModal">
      <n-card
        closable
        @close="showModal = false"
        style="width: 600px"
        :title="activeService?.title"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-scrollbar style="max-height: 350px" trigger="none" class="pr-2">
          {{ activeService?.description }}
        </n-scrollbar>

        <template #footer>
          <h4>Tipos de Usucapião</h4>
          <AtomsSemiTitle
            name="Ficou com dúvidas?"
            color="black"
          ></AtomsSemiTitle>
          <AtomsButtonContact
            name="Falar com Especialista"
            color="yellow"
            shadow="brown"
            text="brown"
            @click="social.redirect('whatsapp1')"
          ></AtomsButtonContact>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

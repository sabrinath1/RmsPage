<script setup lang="ts">
const ListServices = ref<Service[]>([
  {
    img: "/img/usucapiao.png",
    title: " Usucapião Judicial e Extraconjungal",
    description:
      "De forma simplória e resumida a usucapião é um processo legal pelo qual alguém pode \nadquirir a propriedade de um bem imóvel (como uma casa, uma fazenda ou um simples\nterreno) após ocupá-lo e usá-lo de maneira contínua e pacífica por um determinado\nperíodo de tempo, estabelecido por lei. Esse processo permite que uma pessoa que\nnão seja o proprietário de um imóvel se torne o proprietário legal se cumprir os\nrequisitos da usucapião. <br/> No Brasil, a previsão legal da usucapião está regulamentada\npelo Código Civil Brasileiro, mais especificamente nos artigos 1.238 a 1.244.\nExistem diversas espécies, e cada uma delas contém diferentes exigências legais.\nConsistem em aquisição originária, ou seja, trata-se da obtenção de propriedade de um\nbem de forma direta, sem que haja transferência de um proprietário anterior.",
  },
  {
    img: "/img/adjudicacao.png",
    title: "Adjuticação Compulsória",
    description:
      "A adjudicação é uma medida que permite a uma pessoa que\npossui um contrato de compra e venda de um imóvel exigir\nque o vendedor transfira a propriedade do imóvel, mesmo\nque o vendedor esteja relutante em fazê-lo. <br/> Essa medida\npode se judicial ou extrajudicial e é utilizada quando todas as\ncondições do contrato foram cumpridas pelo comprador, mas\no vendedor se recusa a realizar a transferência da\npropriedade. Portanto, é uma maneira de forçar o vendedor\na cumprir o contrato e transferir a propriedade do imóvel ao\ncomprador.",
  },
  {
    img: "/img/inventario.png",
    title: "Inventário e Partilhas",
    description:
      "O inventário é um procedimento legal realizado após o falecimento de alguém para\ndeterminar a partilha dos bens e direitos deixados pelo falecido entre seus herdeiros ou\nlegatários.<br/> A partilha de bens é o processo pelo qual os bens e direitos de uma pessoa falecida\nsão distribuídos entre seus herdeiros ou legatários, de acordo com sua vontade\nexpressa em um testamento ou, na ausência deste, de acordo com as leis de herança e\nsucessão aplicáveis.",
  },
  {
    img: "/img/testamento.png",
    title: "Testamentos",
    description:
      "Testamento é um documento legal que expressa\na vontade de uma pessoa (testador) em relação à\ndistribuição de seus bens e propriedades após\nsua morte. O testamento permite que o testador\nnomeie herdeiros, legatários e execute outras\ndisposições específicas relacionadas à herança,\ncomo a nomeação de tutores para menores de\nidade ou a nomeação de um executor para\nadministrar a herança.",
  },
  {
    img: "/img/doacao.png",
    title: "Doações",
    description:
      "Doações legais referem-se a transferências\nvoluntárias de bens, dinheiro ou outros ativos\nfeitas de acordo com as leis e regulamentos\naplicáveis.<br/> Medida comumente associada ao planejamento\nsucessório familiar e empresarial.",
  },
  {
    img: "/img/cessoes.png",
    title: " Cessões Hereditárias",
    description:
      "A cessão de direitos hereditários, prevista no art.\n1.793 do Código Civil, consiste na transferência\nou alienação da porção que cabe a um\ndeterminado herdeiro a outro herdeiro ou a\nterceiro.",
  },
  {
    img: "/img/regularizacao.png",
    title: "Regularização Documental",
    description:
      "Um imóvel para estar regular, precisa conter\ninúmeros documentos. Muitos destes, são\ndocumentos que dependem de engenheiros,\nagrimensores, alvarás municipais e muitas\nvezes advogados.<br/> Nosso trabalho, é fornecer essa equipe\nmultidisciplinar afim de que seu imóvel tenha\ntodos os documentos necessários para atingir\nseu maior potencial patrimonial.",
  },
  {
    img: "/img/contratos.png",
    title: "Contratos de compra, venda e locação",
    description:
      "Ao contratar a RMS para assessorar seu\nnegócios imobiliários, você garantirá\nnegócios juridicamente sólidos, que\nrepresentam os interesses de todas as\npartes envolvidas.<br/> Nossos profissionais atuam de forma\npreventiva, responsável e profissional,\nagilizando os trâmites necessários ao bom e\nregular andamento das negociações\nimobiliárias, por meio de ações que irão\neconomizar tempo, dinheiro e\npreocupações futuras.",
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
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 text-center">
      <AtomsCardService
        @click="handleClick(service)"
        class="even:bg-secondary odd:bg-primary even:text-white odd:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
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
          <!-- {{ activeService?.description }} -->
          <span v-html="activeService?.description"></span>
        </n-scrollbar>

        <template #footer>
          <AtomsSemiTitle
            name="Ficou com dúvidas ?"
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

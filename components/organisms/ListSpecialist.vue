<script setup lang="ts">
const specialists: Specialist[] = [
  {
    id: "camila",
    name: "Camila Peña Vizzon Domingues",
    description:
      "Formada pela Faculdade de Direito de Sorocaba (FADI) e especializada em mediação de conflitos nas relações interpessoais, com atuação voltada para medidas alternativas para solução de conflitos. Atua de forma moderna e adequada aos temos atuais, em que soluções colaborativas são incentivadas, sendo a via judicial litigiosa a última ratio. Através da aplicação das técnicas de negociação de Harvard, sempre que possível, busca dirimir conflitos de forma célere, satisfatória, justa e colaborativa.",
    img: {
      url: "/img/camila.png",
      description:
        "Administradora, Advogada e Especialista em técnicas de resolução de conflitos.",
    },
    links: {
      instagram: "https://instagram.com",
      whatsapp:
        "https://api.whatsapp.com/send?phone=5515981550048&text=Ol%C3%A1!%0AGostaria%20de%20saber%20mais%20sobre%20como%20regularizar%20um%20im%C3%B3vel",
    },
    skills: [
      "Mediação e Arbitragem",
      "Justiça Colaborativa",
      "Direito Contratual Imobiliário",
      "Direito da Família e Sucessões",
      "Direito e Práticas Empresariais",
    ],
    historic: [
      {
        start: "2012",
        end: "2016",
        local: "UNIP - Universidade de São Paulo",
        course: "Bacharel em Administração",
      },
      {
        start: "2017",
        end: "2022",
        local: " FADI - Faculdade de Direito de Sorocaba",
        course: "Bacharel em Direito",
      },
      {
        start: "2018",
        end: "2022",
        local: " FADI - Faculdade de Direito de Sorocaba",
        course: "Técnicas alternativas de resolução de conflitos",
      },
    ],
  },
  {
    id: "alberto",
    name: "Alberto Cancissu Trindade",
    description:
      "Formado desde 2000 pela Faculdade de Direito de Osasco (UNIFEO). Atua no Escritório do Professor da USP, Dr. David Teixeira de Azevedo. É Especialista em Regularização de Imóveis (Usucapião), Escrituração de Documentos e Inventários EUsucapião Judicial e Extrajudicial.",
    img: {
      url: "/img/alberto.png",
      description:
        "Advogado, Educador e Membro da Comissão de Direito Notarial e Registral da OAB de Osaco.",
    },
    links: {
      instagram: "https://instagram.com",
      whatsapp:
        "https://api.whatsapp.com/send?phone=5515981550048&text=Ol%C3%A1!%0AGostaria%20de%20saber%20mais%20sobre%20como%20regularizar%20um%20im%C3%B3vel",
    },
    skills: [
      "Direito do Consumidor",
      "Direito Imobiliário",
      "Regularização Possessória",
      "Direito da Família e Sucessões",
      "Regularização Possessória",
      "Regularização Documental de Imóveis",
    ],
    historic: [
      {
        start: "1986",
        end: "1990",
        local: "SBPV - Seminário Bíblico Palavra da Vida",
        course: "Bacharel em Educação",
      },
      {
        start: "1995",
        end: "2000",
        local: " UNIFIEO - Universadidade de Osasco",
        course: "Bacharel em Ciências Jurídicas",
      },
      {
        start: "2001",
        end: "2006",
        local: "Escritório de Advocacia - Prof. Teixeira de Azevedo",
        course: "Prestação de serviços de Advocacia",
      },
      {
        start: "2001",
        end: "2023",
        local: "Escritório de Advocacia - Alberto Cancissu",
        course: "Prestação de serviços de Advocacia",
      },
    ],
  },
];
function check(index: number) {
  return index / 2 === 0 ? true : false;
}
</script>
<template>
  <div class="">
    <div class="flex justify-center items-center w-full bg-primary">
      <AtomsSemiTitle name="Nossos Especilistas" color="black">
      </AtomsSemiTitle>
    </div>
    <div class="flex flex-col justify-center xl:mt-10">
      <MoleculesSpecialist
        v-for="(specialist, index) in specialists"
        :specialist="specialist"
        :key="specialist.id"
        :reverse="check(index)"
      />
    </div>
  </div>
</template>

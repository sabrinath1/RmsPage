// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@huntersofbook/naive-ui-nuxt", "nuxt-icon", "@formkit/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // naiveUI: {
  //   themeOverrides: {
  //     Menu: {
  //       itemTextColorInverted: "#ffffff",
  //       itemTextColorHoverInverted: "#302F2F",
  //       itemTextColorActiveInverted: "#0000CD",
  //       itemColorActiveInverted: "#A0522D",
  //       itemColorActiveHoverInverted: "#FFDEAD",

  //       itemTextColorHorizontalInverted: "#00FA9A",
  //       itemTextColorHoverHorizontalInverted: "#302F2F",
  //       itemTextColorActiveHorizontalInverted: "#FF00FF",
  //     },

  //     common: {
  //       primaryColor: "#ffffff",
  //       primaryColorPressed: "#FAC119",
  //       primaryColorHover: "#FAC119",
  //       textColor2: "#192335",
  //     },
  //     Button: {
  //       textColor: "#ffff",
  //       color: "#FAC119",
  //     },
  //   },
  // },
});

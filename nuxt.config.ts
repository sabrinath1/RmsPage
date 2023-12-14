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
  naiveUI: {
    themeOverrides: {
      Menu: {
        itemTextColorInverted: "#ffffff",
        itemTextColorHoverInverted: "#302F2F",
        itemTextColorActiveInverted: "#302F2F",
        itemColorActiveInverted: "#302F2F",
        itemColorActiveHoverInverted: "#FFDEAD",

        itemTextColorHorizontalInverted: "#302F2F",
        itemTextColorHoverHorizontalInverted: "#302F2F",
        itemTextColorActiveHorizontalInverted: "#302F2F",
      },

      common: {
        primaryColor: "#302F2F",
        primaryColorPressed: "#FAC119",
        primaryColorHover: "#FAC119",
        textColor2: "#192335",
      },
      Button: {
        textColor: "#ffff",
        color: "#FAC119",
      },
    },
  },
});

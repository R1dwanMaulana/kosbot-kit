<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <img src="/header.jpg" alt="" width="350" />
      <br />
      <div class="mx-2">
        <h2 class="mt-10">Kosbot</h2>
        <p class="text-justify">
          Kosbot adalah aplikasi berbasis web app dengan teknologi
          <strong>AI</strong> untuk memprediksi harga kost di kota Malang.
          Aplikasi ini dapat membantu Anda untuk mencari kost yang tepat.
        </p>
        <br />
        <nuxt-link to="/menu" class="text-decoration-none">
          <v-btn
            depressed
            color="pink lighten-1"
            class="
              white--text
              rounded-lg
              pr-1
              pl-2
              text-subtitle-2 text-caption
              font-weight-medium
            "
            elevation="10"
          >
            Coba sekarang
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </nuxt-link>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/Slider_Kosbot_1.png",
        },
        {
          src: "/Slider_Kosbot_2.png",
        },
        {
          src: "/Slider_Kosbot_3.png",
        },
      ],
    };
  },
  head: {
    title: "Kosbot | Aplikasi Prediksi Harga Kost",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Aplikasi prediksi harga kost",
      },
      // { property: "og:image", content: "/icon.png" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content: "Aplikasi prediksi harga kost",
      },
      {
        property: "og:title",
        content: "Kosbot | Aplikasi Prediksi Harga Kost",
      },
      {
        property: "og:description",
        content: "Aplikasi prediksi harga kost",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kosbot" },
      { property: "og:url", content: "https://kosbot-kit.web.app/" },
    ],
  },
};
</script>

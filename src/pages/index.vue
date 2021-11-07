<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <img src="/header.jpg" alt="" width="350" />
      <br />
      <div class="mx-2">
        <h2 class="mt-10">Kosbot</h2>
        <p class="text-justify">
          Kosbot adalah aplikasi berbasis web dengan teknologi AI untuk
          memprediksi harga kost di kota Malang. Aplikasi ini dapat membantu
          Anda untuk mencari kost yang tepat.
        </p>
        <br />
        <nuxt-link to="/menu" class="text-decoration-none">
          <v-btn
            depressed
            color="secondary"
            class="white--text rounded-lg pr-2 pl-2"
            elevation="15"
          >
            Coba sekarang <v-icon>mdi-arrow-right</v-icon>
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
};
</script>

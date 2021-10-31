<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-carousel
        :show-arrows="false"
        hide-delimiter-background
        height="200"
        cycle
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <br />
      <h3>Kosbot</h3>
      <p class="text-justify">
        Kosbot adalah aplikasi berbasis web dengan teknologi AI untuk
        memprediksi harga kost wilayah Malang Raya. Aplikasi ini dapat membantu
        Anda untuk mencari kost yang tepat.
      </p>
      <br />
      <nuxt-link to="/menu" class="text-decoration-none">
        <v-btn
          depressed
          color="secondary"
          class="white--text rounded-lg"
          elevation="10"
        >
          Prediksi <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '/Slider_Kosbot_1.png'
        },
        {
          src: '/Slider_Kosbot_2.png'
        },
        {
          src: '/Slider_Kosbot_3.png'
        }
      ]
    }
  }
}
</script>

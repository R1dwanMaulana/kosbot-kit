<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="4" rounded="lg">
        <div class="text-center mx-3 py-10">
          <img src="/about.jpg" alt="logo kosbot" height="200" />
          <h2>
            Apikasi prediksi harga kost, praktis dari web browser + support
            install (app native)
          </h2>
          <p class="mt-8">Sumber data :</p>
          <li>
            <span class="text--light-blue accent-3 font-weight-bold"
              ><a href="https://mamikos.com" class="text-decoration-none"
                >Mamikos</a
              ></span
            >
            untuk sumber data kost kota Malang
          </li>
          <v-alert class="mt-5" border="top" type="warning" outlined>
            Apabila Anda ingin menyampaikan saran, kritik, dan menemukan
            kesalahan pada aplikasi. bisa dijelaskan di halaman Github issue
          </v-alert>
          <h5 class="mt-15 font-weight-regular">
            Contents licensed under
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.id"
              target="_blank"
              >CC BY-NC-SA 4.0</a
            >. <br />Made using Nuxt.js and Vuetify. Hosted on Firebase. <br />
            <a href="https://id.wikipedia.org/wiki/Lisensi_MIT" target="_blank"
              >MIT License</a
            >
            © 2021 - {{ copyrightYear }} | Ridwan Maulana.
          </h5>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      copyrightYear: new Date().getFullYear(),
    };
  },
  head: {
    title: "Tentang Kosbot | Aplikasi Prediksi Harga Kost",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Sebuah aplikasi yang dapat membantu para pengguna untuk memprediksikan harga kost di kota Malang",
      },
      // { property: "og:image", content: "/icon.png" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content: "Aplikasi prediksi harga kost",
      },
      {
        property: "og:title",
        content: "Tentang Kosbot | Aplikasi Prediksi Harga Kost",
      },
      {
        property: "og:description",
        content:
          "Sebuah aplikasi yang dapat membantu para pengguna untuk memprediksikan harga kost di kota Malang",
      },
    ],
  },
};
</script>

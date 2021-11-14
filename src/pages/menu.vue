<template>
  <v-row justify="center" align="center" class="mx-1">
    <v-col cols="12" sm="8" md="6">
      <h3 class="mb-8 text-center">Cari Kost Impianmu</h3>
      <form-checklist />
    </v-col>
  </v-row>
</template>

<script>
import FormChecklist from "~/components/FormChecklist";
export default {
  components: {
    FormChecklist,
  },
  head: {
    title: "Fasilitas - Kosbot | Aplikasi Prediksi Harga Kost",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Menu Fasilitas ini digunakan untuk memilih fasilitas kost yang di inginkan",
      },
      // { property: "og:image", content: "/icon.png" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content: "Aplikasi prediksi harga kost",
      },
      {
        property: "og:title",
        content: "Fasilitas - Kosbot | Aplikasi Prediksi Harga Kost",
      },
      {
        property: "og:description",
        content:
          "Menu Fasilitas ini digunakan untuk memilih fasilitas kost yang di inginkan",
      },
    ],
  },
};
</script>

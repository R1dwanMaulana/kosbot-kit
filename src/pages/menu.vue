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
};
</script>

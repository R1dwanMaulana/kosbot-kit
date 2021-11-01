<template>
  <v-row justify="center" align="center" class="mx-2">
    <v-col cols="12" sm="8" md="6">
      <h3 class="mb-8 text-center">Hasil Prediksi</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Fasilitas</th>
              <th class="text-left">Pilihan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item">
              <td>{{ item.facility }}</td>
              <td>{{ item.changes }}</td>
            </tr>
            <tr>
              <td>Harga</td>
              <td>Rp. 750.000</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { facility: "Panjang", changes: "4" },
        { facility: "Lebar", changes: "3" },
        { facility: "Meja", changes: "Iya" },
        { facility: "WiFi", changes: "Iya" },
        { facility: "Dapur", changes: "Iya" },
        { facility: "Parkir motor", changes: "Iya" },
      ],
    };
  },
};
</script>

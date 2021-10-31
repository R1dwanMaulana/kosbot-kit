<template>
  <v-row justify="center" align="center" class="mx-2">
    <v-col cols="12" sm="8" md="6">
      <h3 class="mb-8 text-center">Cari Kost Impianmu</h3>
      <div class="d-flex justify-space-between">
            <p class="mt-10">Panjang</p>
            <v-col class="d-flex" cols="4" sm="3">
              <v-text-field label="Panjang(m)" />
            </v-col>
      </div>
      <div class="d-flex justify-space-between">
          <p class="mt-10">Lebar</p>
          <v-col class="d-flex" cols="4" sm="3">
            <v-text-field label="Lebar(m)" />
          </v-col>
      </div>
      <div
        v-for="item in items"
        :key="item.property"
        class="d-flex justify-space-between"
      >
        <p class="mt-8">{{ item.property }}</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select :items="changes" dense label="Pilih">
            <option
              v-for="change in changes"
              :key="change"
              :value="change.value"
            >
              {{ change.text }}
            </option>
          </v-select>
        </v-col>
      </div>
      <v-btn
        class="mt-8 rounded-lg"
        color="secondary"
        dark
        elevation="10"
        @click="modelPredict()"
      >
        Submit
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      predict: null,
      items: [
        { property: 'Kamar mandi dalam' },
        { property: 'Meja' },
        { property: 'Kursi' },
        { property: 'Dapur' },
        { property: 'AC' },
        { property: 'WiFi' },
        { property: 'Parkir Motor' },
        { property: 'Parkir Mobil' }
      ],
      changes: [
        { text: 'Iya', value: 1 },
        { text: 'Tidak', value: 0 }
      ]
    }
  },
  methods: {
    modelPredict() {
      return this.predict
    }
  }
}
</script>

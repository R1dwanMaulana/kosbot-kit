<template>
  <v-row justify="center" align="center" class="mx-2">
    <v-col cols="12" sm="8" md="6">
      <h3 class="mb-8 text-center">Cari Kost Impianmu</h3>
      <!-- <validation-observer ref="observer"> -->
      <div class="d-flex justify-space-between">
        <!-- <validation-provider
          v-slot="{ errors }"
          name="Panjang"
          rules="required|numeric"
        > -->
        <p class="mt-10">Panjang</p>
        <v-col class="d-flex" cols="4" sm="3">
          <v-text-field required :error-messages="errors" label="Panjang(m)" />
        </v-col>
        <!-- </validation-provider> -->
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
      <div class="d-flex justify-space-between">
        <p class="mt-8">Lokasi</p>
        <v-col class="d-flex mt-2" cols="5" sm="3">
          <v-select :items="locations" dense label="Pilih">
            <option
              v-for="location in locations"
              :key="location"
              :value="location.value"
            >
              {{ location.text }}
            </option>
          </v-select>
        </v-col>
      </div>
      <nuxt-link to="/predict" class="text-decoration-none">
        <v-btn
          class="mt-8 rounded-lg"
          color="secondary"
          dark
          elevation="10"
          @click="modelPredict()"
        >
          Submit
        </v-btn>
      </nuxt-link>
      <!-- </validation-observer> -->
    </v-col>
  </v-row>
</template>

<script>
import { required, numeric } from "vee-validate/dist/rules";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "{_field_} tidak boleh kosong",
});
extend("numeric", {
  ...numeric,
  message: "{_field_} harus numerik",
});
export default {
  data() {
    return {
      components: {
        ValidationProvider,
        ValidationObserver,
      },
      predict: null,
      items: [
        { property: "Kamar mandi dalam" },
        { property: "Meja" },
        { property: "Kursi" },
        { property: "Dapur" },
        { property: "AC" },
        { property: "WiFi" },
        { property: "Parkir Motor" },
        { property: "Parkir Mobil" },
      ],
      changes: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      locations: [
        { text: "Kec.Lowokwaru", value: 1 },
        { text: "Lowokwaru", value: 2 },
        { text: "Kec.Klojen", value: 3 },
        { text: "Klojen", value: 4 },
        { text: "Kec.Sukun", value: 5 },
        { text: "Sukun", value: 6 },
        { text: "Kec.Blimbing", value: 7 },
        { text: "Blimbing", value: 8 },
      ],
    };
  },
  methods: {
    modelPredict() {
      return this.predict;
    },
  },
};
</script>

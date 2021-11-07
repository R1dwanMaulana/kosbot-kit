<template>
  <v-row justify="center" align="center" class="mx-2">
    <v-col cols="12" sm="8" md="6">
      <h3 class="mb-8 text-center">Cari Kost Impianmu</h3>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Panjang</p>
        <v-col class="mt-2 d-flex" cols="4" sm="3">
          <v-text-field
            v-model="saveChanges.length"
            dense
            clearable
            label="Panjang(m)"
          />
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Lebar</p>
        <v-col class="mt-2 d-flex" cols="4" sm="3">
          <v-text-field
            v-model="saveChanges.width"
            dense
            clearable
            label="Lebar(m)"
          />
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Kamar mandi dalam</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.bathroom"
            :items="bathrooms"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Meja</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.table"
            :items="tables"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Kursi</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.chair"
            :items="chairs"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Dapur</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.kitchen"
            :items="kitchens"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">AC</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.chooseAc"
            :items="ac"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">WiFi</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.chooseWifi"
            :items="wifi"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Parkir motor</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.motorcyleParking"
            :items="motorcylesParking"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Parkir mobil</p>
        <v-col class="d-flex mt-2" cols="4" sm="3">
          <v-select
            v-model="saveChanges.carParking"
            :items="carsParking"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <div class="d-flex justify-space-between">
        <p class="mt-8">Lokasi</p>
        <v-col class="d-flex mt-2" cols="5" sm="3">
          <v-select
            v-model="saveChanges.location"
            :items="locations"
            dense
            label="Pilih"
          >
          </v-select>
        </v-col>
      </div>
      <v-btn
        class="mt-8 rounded-lg"
        color="deep-orange accent-2"
        dark
        elevation="2"
        @click="modelPredict()"
      >
        Submit
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
// import { required, numeric } from "vee-validate/dist/rules";
// import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

// extend("required", {
//   ...required,
//   message: "{_field_} tidak boleh kosong",
// });
// extend("numeric", {
//   ...numeric,
//   message: "{_field_} harus numerik",
// });
export default {
  data() {
    return {
      components: {
        // ValidationProvider,
        // ValidationObserver,
      },
      predict: null,
      submitted: false,
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
      bathrooms: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      tables: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      chairs: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      kitchens: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      ac: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      wifi: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      motorcylesParking: [
        { text: "Iya", value: 1 },
        { text: "Tidak", value: 0 },
      ],
      carsParking: [
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
      saveChanges: {
        length: null,
        width: null,
        bathroom: null,
        table: null,
        chair: null,
        kitchen: null,
        chooseAc: null,
        chooseWifi: null,
        motorcyleParking: null,
        carParking: null,
        location: null,
      },
    };
  },
  methods: {
    modelPredict() {
      const predict =
        -68531.9999133359 +
        193290.7399441 * this.length +
        53787.09955987 * this.width +
        223041.25251717 * this.bathroom +
        -94016.99467001 * this.table +
        50481.71483865 * this.chair +
        151462.80891942 * this.kitchen +
        599669.48438946 * this.chooseAc +
        60937.34930789 * this.chooseWifi +
        -147062.92326872 * this.motorcyleParking +
        83730.52196747 * this.carParking +
        -14352.91188581 * this.location;
      return predict;
    },
  },
};
</script>

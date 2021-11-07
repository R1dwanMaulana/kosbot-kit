<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <div class="d-flex justify-space-between">
            <p class="mt-8">Panjang</p>
            <v-col class="mt-2 d-flex" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Panjang"
                rules="required|numeric|max_value:6|min_value:2"
              >
                <v-text-field
                  v-model="length"
                  dense
                  clearable
                  required
                  label="Panjang(m)"
                  :error-messages="errors"
                />
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Lebar</p>
            <v-col class="mt-2 d-flex" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Lebar"
                rules="required|numeric|max_value:6|min_value:2"
              >
                <v-text-field
                  v-model="width"
                  :error-messages="errors"
                  dense
                  clearable
                  required
                  label="Lebar(m)"
                />
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Kamar mandi dalam</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="K.mandi dalam"
                rules="required"
              >
                <v-select
                  v-model="bathroom"
                  :items="bathrooms"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Meja</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Meja"
                rules="required"
              >
                <v-select
                  v-model="table"
                  :items="tables"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Kursi</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Kursi"
                rules="required"
              >
                <v-select
                  v-model="chair"
                  :items="chairs"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Dapur</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Dapur"
                rules="required"
              >
                <v-select
                  v-model="kitchen"
                  :items="kitchens"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">AC</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="AC"
                rules="required"
              >
                <v-select
                  v-model="chooseAc"
                  :items="ac"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">WiFi</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="WiFi"
                rules="required"
              >
                <v-select
                  v-model="chooseWifi"
                  :items="wifi"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Parkir motor</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="P.Motor"
                rules="required"
              >
                <v-select
                  v-model="motorcyleParking"
                  :items="motorcylesParking"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Parkir mobil</p>
            <v-col class="d-flex mt-2" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="P.mobil"
                rules="required"
              >
                <v-select
                  v-model="carParking"
                  :items="carsParking"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <div class="d-flex justify-space-between">
            <p class="mt-8">Lokasi</p>
            <v-col class="d-flex mt-2" cols="5" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Lokasi"
                rules="required"
              >
                <v-select
                  v-model="location"
                  :items="locations"
                  :error-messages="errors"
                  required
                  dense
                  label="Pilih"
                >
                </v-select>
              </validation-provider>
            </v-col>
          </div>
          <v-btn
            class="mt-8 rounded-lg white--text"
            color="pink lighten-1"
            elevation="5"
            :loading="loading"
            :disabled="invalid"
            @click="modelPredict()"
          >
            Cek
          </v-btn>
          <p class="mt-6 grey darken-1 white--text rounded-lg px-3 py-2">
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(predict)
            }}
            / bulan
          </p>
        </form>
      </validation-observer>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :disabled="invalid"
        elevation="24"
        >Sedang mencari harga kost untuk Anda...</v-snackbar
      >
    </div>
  </div>
</template>

<script>
import {
  required,
  numeric,
  // eslint-disable-next-line camelcase
  max_value,
  // eslint-disable-next-line camelcase
  min_value,
} from "vee-validate/dist/rules";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "{_field_} tidak boleh kosong",
});
extend("numeric", {
  ...numeric,
  message: "{_field_} harus numerik",
});
extend("max_value", {
  // eslint-disable-next-line camelcase
  ...max_value,
  message: "{_field_} maksimal 6 meter",
});
extend("min_value", {
  // eslint-disable-next-line camelcase
  ...min_value,
  message: "{_field_} minimal 2 meter",
});
export default {
  name: "FormChecklist",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      snackbar: false,
      timeout: 3000,
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
      predict: 0,
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
    };
  },
  methods: {
    async modelPredict() {
      try {
        this.loading = true;
        this.snackbar = true;
        await new Promise((resolve) => setTimeout(resolve, 5000));
        this.predict =
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
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

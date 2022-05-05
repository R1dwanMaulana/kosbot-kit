<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <div class="d-flex justify-space-between">
            <p class="mt-8">Panjang kamar</p>
            <v-col class="mt-2 d-flex" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Panjang"
                rules="required|double|max_value:6|min_value:2"
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
            <p class="mt-8">Lebar kamar</p>
            <v-col class="mt-2 d-flex" cols="4" sm="3">
              <validation-provider
                v-slot="{ errors }"
                name="Lebar"
                rules="required|double|max_value:6|min_value:2"
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
            @click="modelPredict((dialog = !dialog))"
          >
            Cek
          </v-btn>
          <!-- <p class="mt-6 grey lighten-3 black--text rounded-md px-3 py-2">
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(predict)
            }}
            / bulan
          </p> -->
        </form>
      </validation-observer>
      <!-- <v-snackbar
        v-model="snackbar"
        color="primary"
        text
        :timeout="timeout"
        :disabled="invalid"
        elevation="24"
        >Sedang mencari harga kost untuk Anda.</v-snackbar
      > -->
    </div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      width="500"
      scrollable
    >
      <v-card>
        <v-card-text class="mt-4">
          <h3 class="mx-2 mb-3">Rincian Prediksi Harga Kost Anda Adalah:</h3>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr class="blue-grey darken-4">
                  <th class="text-left white--text">Fasilitas</th>
                  <th class="text-left white--text">Value(hasil)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Panjang Kamar</td>
                  <td>{{ length }} meter</td>
                </tr>
                <tr>
                  <td>Lebar Kamar</td>
                  <td>{{ width }} meter</td>
                </tr>
                <tr>
                  <td>Kamar mandi dalam</td>
                  <td>{{ bathroom }}</td>
                </tr>
                <tr>
                  <td>Meja belajar</td>
                  <td>{{ table }}</td>
                </tr>
                <tr>
                  <td>Kursi belajar</td>
                  <td>{{ chair }}</td>
                </tr>
                <tr>
                  <td>Dapur</td>
                  <td>{{ kitchen }}</td>
                </tr>
                <tr>
                  <td>AC</td>
                  <td>{{ chooseAc }}</td>
                </tr>
                <tr>
                  <td>WiFi</td>
                  <td>{{ chooseWifi }}</td>
                </tr>
                <tr>
                  <td>Parkir motor</td>
                  <td>{{ motorcyleParking }}</td>
                </tr>
                <tr>
                  <td>Parkir mobil</td>
                  <td>{{ carParking }}</td>
                </tr>
                <tr>
                  <td>Lokasi</td>
                  <td>{{ location }}</td>
                </tr>
                <tr class="grey darken-1 white--text">
                  <td>Harga sewa/bulan</td>
                  <td>
                    <div v-if="loading">
                      <p>sedang memuat..</p>
                    </div>
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumSignificantDigits: 3,
                      }).format(predict)
                    }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Oke </v-btn>
          </v-card-actions>
          <!-- <v-divider></v-divider> -->
          <p class="mt-6 red--text font-italic">*Keterangan Fasilitas</p>
          <v-simple-table width="100" dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left white--text">Value</th>
                  <th class="text-left white--text">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Iya</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>Tidak</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <p class="mt-6 red--text font-italic">*Keterangan Lokasi</p>
          <v-simple-table width="100" dark>
            <template v-slot:default>
              <thead>
                <tr class="">
                  <th class="text-left white--text">Value</th>
                  <th class="text-left white--text">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kec.Lowokwaru</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Lowokwaru</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Kec.Klojen</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Klojen</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Kec.Sukun</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Sukun</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Kec.Blimbing</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Blimbing</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  required,
  // eslint-disable-next-line camelcase
  max_value,
  // eslint-disable-next-line camelcase
  min_value,
  double,
} from "vee-validate/dist/rules";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "{_field_} tidak boleh kosong",
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
extend("double", {
  ...double,
  message: "gunakan tanda (.) untuk desimal",
});
export default {
  name: "FormChecklist",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      // snackbar: false,
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
        // this.snackbar = true;
        await new Promise((resolve) => setTimeout(resolve, 5000));
        this.predict =
          // -68531.9999133359 +
          // 193290.7399441 * this.length +
          // 53787.09955987 * this.width +
          // 223041.25251717 * this.bathroom +
          // -94016.99467001 * this.table +
          // 50481.71483865 * this.chair +
          // 151462.80891942 * this.kitchen +
          // 599669.48438946 * this.chooseAc +
          // 60937.34930789 * this.chooseWifi +
          // -147062.92326872 * this.motorcyleParking +
          // 83730.52196747 * this.carParking +
          // -14352.91188581 * this.location;
          -148047.27476719278 +
          164974.23423571 * this.length +
          76671.12127056 * this.width +
          227707.434326 * this.bathroom +
          -56106.94865448 * this.table +
          28947.18630694 * this.chair +
          117698.12077464 * this.kitchen +
          600114.34157571 * this.chooseAc +
          56860.15723041 * this.chooseWifi +
          -18779.72174119 * this.motorcyleParking +
          71576.69697222 * this.carParking +
          -17839.86082162 * this.location;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

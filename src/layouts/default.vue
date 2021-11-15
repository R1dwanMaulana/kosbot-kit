<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-item nuxt to="/home">
          <!-- <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>Beranda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/menu">
          <!-- <v-list-item-action>
            <v-icon>mdi-airballoon</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>Fasilitas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item nuxt to="/about">
          <!-- <v-list-item-action>
            <v-icon>mdi-airballoon</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>Tentang</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="cyan darken-1" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        ><strong>Kosbot </strong
        ><v-icon class="mb-1">mdi-robot-outline</v-icon></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500" scrollable>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>
        <v-card class="rounded-lg">
          <v-card-title class="text-h6 blue-grey darken-2 white--text">
            Frequently Asked Questions
          </v-card-title>

          <v-card-text class="mt-4">
            <h3>Apa itu Kosbot?</h3>
            <p>
              Kosbot adalah sebuah aplikasi yang mampu memprediksikan harga
              kost. Sistem tersebut sudah tertanam teknologi Machine Learning
              dengan sumber data dari platform Mamikos.
            </p>
            <h3>Apa itu Machine Learning?</h3>
            <p>
              Machine learning merupakan suatu pembelajaran pada komputer untuk
              meningkatkan kemampuan secara mandiri tanpa terprogram secara
              jelas.
            </p>
            <h3>Metode apa yang digunakan?</h3>
            <p>
              Pada sistem tersebut menggunakan metode Multiple Linear
              Regression.
            </p>
            <h3>Apa itu metode Multiple Linear Regression?</h3>
            <p>
              Multiple linear regression merupakan suatu analisis asosiasi yang
              digunakan secara bersamaan untuk meneliti pengaruh dua atau lebih
              variabel bebas terhadap satu variabel tegantung dengan skala
              interval.
            </p>
            <h3>Bagaimana menentukan harga kost dengan metode MLR?</h3>
            <p>
              Mencari bentuk hubungan (relasi) linear antara variabel terikat
              (harga) dengan variabel bebas(fasilitas & lokasi).
            </p>
            <h3>Bagaimana menggunakan aplikasi Kosbot?</h3>
            <p>
              Pengguna terlebih dahulu akan masuk dihalaman home yang berisi
              pengenalan aplikasi. Selanjutnya pengguna mengklik tombol coba
              sekarang, maka langsung diarahkan ke halaman menu fasilitas, lalu
              pengguna bisa memilih fasilitas yang diinginkan. Jika semua sudah,
              maka langkah terakhir klik tombol cek. Sistem akan memproses data
              tersebut dan mencari kisaran harga yang cocok. Setelah sistem
              selesai memproses, maka tampilan harga sewa / bulan akan tampil
              dibagian bawah halaman.
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Ok lanjut
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
    <v-footer color="cyan darken-1" app>
      <span class="white--text"
        >All right reserved | &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      dialog: false,
    };
  },
};
</script>

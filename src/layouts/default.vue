<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-item nuxt to="/">
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
    };
  },
};
</script>

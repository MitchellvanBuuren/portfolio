<template>
  <v-app class="background">

    <v-snackbar
        v-model="showToast"
        top
    >
      {{ toastText }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="primary"
            text
            v-bind="attrs"
            @click="showToast = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-app-bar
        color="transparent"
        flat
        fixed
        app
    >
      <div>
        <v-btn class="hidden-sm-and-down" @click="scrollTo('about')" plain depressed>
          <v-toolbar-title class="mx-2">
            <span >About</span>
          </v-toolbar-title>
        </v-btn>
        <v-btn class="hidden-sm-and-down" @click="scrollTo('projects')" plain depressed>
          <v-toolbar-title class="mx-2">
            <span >Projects</span>
          </v-toolbar-title>
        </v-btn>
      </div>

      <v-spacer class="mx-auto"></v-spacer>

      <v-btn
          color="background"
          class="roundedButton"
          v-bind:class="{ yellowBackground: !isDark, mintBackground: isDark } "
          @click="themeToggle"
          icon
      >
        <v-icon>{{ !isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
      <v-menu
          offset-y
          auto
          transition="scroll-x-reverse-transition"
          app
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="background"
              class="mx-1 hidden-md-and-up roundedButton mintBackground"
              v-bind="attrs"
              v-on="on"
              icon
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list
            color="primary"
            nav
            dense
        >
          <v-list-item-group
          >
            <v-list-item @click="scrollTo('about')" color="secondary">
              <v-list-item-title class="light--text">About</v-list-item-title>
            </v-list-item>
            <v-list-item @click="scrollTo('projects')" color="secondary">
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container class="fill-height justify-center" fluid>

      <div>
        <voxel v-if="!loading" class="absolute-center fullscreen"></voxel>
        <v-progress-circular
            v-if="loading"
            indeterminate
            color="primary"
        ></v-progress-circular>
        <about id="about"></about>
        <projects id="projects"></projects>
      </div>
    </v-container>
    <v-btn x-large icon class="floatBottomRight" fab v-show="scY > 300" @click="toTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Voxel from "@/components/voxel";
import About from "@/components/about"
import Projects from "@/components/projects";

export default {
  components: {
    Projects,
    Voxel,
    About,
  },
  data: () => ({
    loading: false,
    showToast: false,
    toastText: 'Oh hey! I see you are new here welcome and thank you for visiting my portfolio',
    isDark: true,
    scTimer: 0,
    scY: 0,

  }),
  methods: {
    scrollTo(elId) {
      const el = document.getElementById(elId);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    themeToggle() {
      this.isDark = !this.isDark
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
  mounted() {
    const value = localStorage.getItem('first')
    if (!value) {
      this.showToast = true;
      localStorage.setItem('first', 'false')
    }
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">

.roundedButton {
  border-radius: 5px !important;
}

.yellowBackground {
  background-color: #ffcd17;
}

.mintBackground {
  background-color: #15CDCA;
}

.floatBottomRight {
  position: fixed;
  right: 0;
  bottom: 0;
}

.fullscreen {
  height: 100vh;
  width: 100vw;
}

</style>


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
        app
        flat
        fixed
    >
      <div>
        <v-btn @click="pageToggle('about')" plain v-model="about"  depressed>
          <v-toolbar-title class="mx-2">
          <span class="hidden-sm-and-down">About</span>
          </v-toolbar-title>
        </v-btn>
        <v-btn @click="pageToggle('projects')" plain v-model="projects"  depressed>
          <v-toolbar-title class="mx-2">
            <span class="hidden-sm-and-down">Projects</span>
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
              mandatory
          >
            <v-list-item v-model="about" @click="pageToggle('about')" color="secondary">
              <v-list-item-title class="light--text">About</v-list-item-title>
            </v-list-item>

            <v-list-item v-model="projects" @click="pageToggle('projects')" color="secondary">
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container class="fill-height justify-center" fluid>

      <div>
        <voxel v-if="!loading" class="absolute-center"></voxel>
        <v-progress-circular
            v-if="loading"
            indeterminate
            color="primary"
        ></v-progress-circular>

        <v-fade-transition>
          <about v-show="about"></about>
        </v-fade-transition>
        <v-fade-transition>
          <projects v-show="projects"></projects>
        </v-fade-transition>

      </div>
    </v-container>
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
    about: true,
    projects: false,
    loading: false,
    showToast: false,
    toastText: 'Oh hey! I see you are new here welcome and thank you for visiting my portfolio',
    isDark: true,

  }),
  methods: {
    pageToggle(page) {
      switch (page) {
        case 'about':
          this.about = true
          this.projects = false
          this.references = false
          break
        case 'projects':
          this.about = false
          this.projects = true
          this.references = false
          break
        case 'references':
          this.about = false
          this.projects = false
          this.references = true
          break

      }
    },
    themeToggle() {
      this.isDark = !this.isDark
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  mounted() {
    const value = localStorage.getItem('first')
    if (!value) {
      this.showToast = true;
      localStorage.setItem('first', 'false')
    }
  }
}
</script>

<style lang="scss">
.lightBackground  {
  background-color: #F4F3EE;
}

.lightBackground  {
  background-color: #212129;
}

.roundedButton {
  border-radius: 5px !important;
}

.yellowBackground {
  background-color: #ffcd17;
}

.mintBackground{
  background-color: #15CDCA;
}



</style>


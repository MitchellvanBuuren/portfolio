<template>
  <v-card rounded flat color="background">
    <v-card-title>
      <span class="display-1">Mitchell van Buuren</span>
    </v-card-title>
    <div v-bind:class="{ 'd-flex flex-no-wrap justify-space-between': !isMobile, '': isMobile } ">
      <v-avatar
          class="ma-3"
          size="150"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
      </v-avatar>
      <v-card-text>
      <span class="text-body-1">
        First of all, I love challenges. Ever since I solved my first bug as a junior I knew
        that coding is my passion. I believe that programming transforms the world around us.
        I started out as a junior software engineer. Reading code, attempting bug fixes, failing at bug fixes and adding a
        button here and there. Slowly building my knowledge base and experience. Fast forward to today. I am a full
        stack intermediate software engineer.
      </span>
        <br>
        <br>
        <a :href="`${path}resume.pdf`" download="resume.pdf">
          <v-btn color="primary">
            <v-icon>mdi-download</v-icon>
            Resume
          </v-btn>
        </a>
      </v-card-text>
    </div>
    <v-card-title>
      <span class="display-1">Bio</span>
    </v-card-title>
    <v-card-text>
      <span class="text-body-1">
      <strong>1997</strong> - Born in Germiston, South Africa
      <br>
      <br>
      <strong>2015</strong> - Matriculated at Ho&euml;rskool Brandwag
      <br>
      <br>
      <strong>2018</strong> - Studied Chemical Engineering (2nd year) at the University of Pretoria
      <br>
      <br>
      <strong>2020</strong> - Started at Uprate Technologies as a junior software engineer
      <br>
      <br>
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "about",
  data: () => ({
    path: process.env.BASE_URL,
    isMobile: false,
  }),
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.isMobile = this.width < 600;
    }
  }
}
</script>

<style>

</style>

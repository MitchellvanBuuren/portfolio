<template>
  <v-card rounded flat color="background">
    <v-card-title>
      <span class="display-1">Mitchell van Buuren</span>
    </v-card-title>
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-card-text>
      <span class="text-body-1">Hello I am a self taught full stack intermediate software developer that specializes in
        progressive web applications.
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
      <v-avatar
          class="ma-3"
          size="150"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
      </v-avatar>
      <br>

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
  }),
  methods: {
  },
}
</script>

<style>

</style>

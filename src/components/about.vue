<template>
  <div>
    <v-card rounded flat color="background">
      <v-card-title class="display-1">
        Mitchell van Buuren
      </v-card-title>
      <v-card-text class="text-body-2">
        Challenge driven full stack developer with a passion for efficiency. Ever since I solved my first bug I knew
        that coding is my passion. I believe that programming transforms the world around us.
        I started out as a junior software engineer. Reading code, attempting bug fixes, failing and
        adding a button here and there. Slowly building my knowledge base and experience. Fast forward to today - I am
        a full stack intermediate software engineer capable of transforming the world one line at a time.
      </v-card-text>
      <v-card-title class="display-1">
        Skills
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="(icon, idx) in icons" class="text-center" :key="idx">
            <img :src="getImg(icon.path)">
            <p>{{ icon.name }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "about",
  data: () => ({
    icons: [
      {name: 'Angular', path: 'icons/angular-icon.png'},
      {name: 'Vue', path: 'icons/vue-icon.png'},
      {name: 'Ionic', path: 'icons/ionic-icon.png'},
      {name: 'Javascript', path: 'icons/javascript-icon.png'},
      {name: 'Typescript', path: 'icons/typescript-icon.png'},
      {name: 'HTML 5', path: 'icons/html5-icon.png'},
      {name: 'CSS 3', path: 'icons/css3-icon.png'},
      {name: 'Go', path: 'icons/go-icon.png'},
      {name: 'MongoDB', path: 'icons/mongo-icon.png'},
      {name: 'MySQL', path: 'icons/sql-icon.png'},
    ]
  }),
  methods: {
    getImg(path) {
      return require('../assets/' + path)
    }
  }
}
</script>

<style>

</style>

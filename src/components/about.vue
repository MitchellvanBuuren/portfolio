<template>
  <v-card rounded flat color="background">
    <v-card-title class="display-1">
      Mitchell van Buuren
    </v-card-title>
    <v-row>
      <v-col class="text-center" cols="12" md="2">
        <v-avatar
            class="ma-auto"
            size="150"
        >
          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="10" class="text-center">
        <v-card-text class="text-body-1">
          Ever since I solved my first bug I knew
          that coding is my passion. I believe that programming transforms the world around us.
          I started out as a junior software engineer. Reading code, attempting bug fixes, failing at bug fixes and
          adding
          a
          button here and there. Slowly building my knowledge base and experience. Fast forward to today - I am a full
          stack intermediate software engineer.
          <br>
          <br>
        </v-card-text>
      </v-col>
    </v-row>
    <v-card-title class="display-1">
      Skills
    </v-card-title>
    <v-card-text>
      <v-list color="background">
        <v-row>
          <v-col v-for="(skillsList, idx) in skillsLists" :key="idx">
            <v-card-title>
              {{ skillsList.title }}
            </v-card-title>
            <v-list-item v-for="(skill, idx) in skillsList.skills" :key="idx">
              <v-list-item-icon>
                <v-icon>mdi-circle-small</v-icon>
              </v-list-item-icon>
              {{ skill }}
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-card-text>
    <v-row>
      <v-card-title class="display-1">
        Methodologies
      </v-card-title>
      <v-card-text>
        <v-list color="background">
          <v-list-item v-for="(methodology, idx) in methodologies" :key="idx">
            <v-list-item-icon>
              <v-icon>mdi-circle-small</v-icon>
            </v-list-item-icon>
            {{ methodology }}
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-title class="display-1">
        Bio
      </v-card-title>
      <v-card-text class="text-body-1">
        <strong>1997</strong> - Born in Midrand, South Africa.
        <br>
        <br>
        <strong>2015</strong> - Matriculated at Ho&euml;rskool Brandwag.
        <br>
        <br>
        <strong>2018</strong> - Studied Chemical Engineering (2nd year) at the University of Pretoria.
        <br>
        <br>
        <strong>2020</strong> - Started at Uprate Technologies as a junior software engineer.
        <br>
        <br>
        <strong>2021</strong> - Promoted to intermediate software engineer and dev team lead at Uprate Technologies.
        <br>
        <br>
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "about",
  data: () => ({
    path: process.env.BASE_URL,
    isMobile: false,
    methodologies: ['Agile', 'Dry/Wet', 'Extreme Programming', 'YAGNI', 'KISS'],
    skillsLists: [
      {
        title: 'Front End',
        skills: ['Vue', 'Angular', 'Vuetify', 'Ionic', 'Javascript', 'Typescript']
      },
      {
        title: 'Back End',
        skills: ['Golang', 'MongoDB', 'MySQL', 'Nginx', 'NATS']
      }
    ],
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
    },
  }
}
</script>

<style>

</style>

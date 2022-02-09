<template>

  <v-app class="background">

    <v-main>

      <v-container
          class="fill-height"
          fluid
      >

        <v-row
            align="center"
            justify="center"
        >

          <v-col
              class="text-center"
          >
            <h1>404 Page Not Found</h1>
            <br>
            {{quote}}
            <br>
            <router-link
                to="/"
            >
              Rejoin the path
            </router-link>

          </v-col>

        </v-row>

      </v-container>

    </v-main>

  </v-app>

</template>

<script>
export default {
  data: () => ({
    quoteArr: ['A steadfast heart does not stray from the path. Your are currently not on the path.'],
    quote: null
  }),
  mounted() {
    this.quote = this.quoteArr[Math.floor(Math.random() * this.quoteArr.length)];
  }
}

</script>

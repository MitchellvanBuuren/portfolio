<template>
  <v-card  flat color="background">
    <v-card-title>
      <span class="display-1">Work</span>
    </v-card-title>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Fluid
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showFluid = !showFluid"
            >
              <v-icon>{{ showFluid ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showFluid">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Paycurve
          </v-card-title>

          <v-card-subtitle>
            PayCurve is a financial technology platform, that provides employees with early access to a portion of
            their earned and unencumbered salary at any point during the month
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showPaycuve = !showPaycuve"
            >
              <v-icon>{{ showPaycuve ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showPaycuve">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="400"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Eyerys
          </v-card-title>

          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showEyerys = !showEyerys"
            >
              <v-icon>{{ showEyerys ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showEyerys">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-card>

</template>

<script>
export default {
name: "projects",
  data: () => ({
    showFluid: false,
    showPaycuve: false,
    showEyerys: false,
  }),
}
</script>

<style scoped>

</style>

<template>
  <v-card flat color="background">
    <v-card-title>
      <span class="display-1">Projects</span>
    </v-card-title>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="350"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Fluid
          </v-card-title>

          <v-card-subtitle>
            Fluid is a open source API generator.
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

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="350"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Uniform
          </v-card-title>

          <v-card-subtitle>
            Uniform is a open source collection of base services. A collection of front end platforms (written in VueJs)
            and backend services (written in Golang).
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showUniform = !showUniform"
            >
              <v-icon>{{ showUniform ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showUniform">
              <v-divider></v-divider>

              <v-card-text>

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
            max-width="350"
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
            their earned and unencumbered salary at any point during the month.
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

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="350"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Eyerys
          </v-card-title>

          <v-card-subtitle>
            Eyerys is a customer feedback solution that gathers customer feedback across all comunication channels.
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

              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-card>

</template>

<script>
export default {
  name: "projects",
  data: () => ({
    showFluid: false,
    showUniform: false,
    showPaycuve: false,
    showEyerys: false,
  }),
}
</script>

<style scoped>

</style>

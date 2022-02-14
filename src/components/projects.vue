<template>
  <v-card flat color="background">
    <v-card-title class="display-1 justify-center">
      Projects
    </v-card-title>
    <v-row>
      <v-col cols="6">
        <v-card
            class="mx-auto"
            max-width="500"
        >
          <v-img
              src="../assets/icons/fluid.png"
          ></v-img>

          <v-card-title>
            <span>Fluid</span>
            <v-spacer class="mx-auto"></v-spacer>
            <v-btn href="https://fluid.uprate.co.za/" target="_blank" color="primary" icon>
              <v-icon>mdi-web</v-icon>
            </v-btn>
            <v-btn href="https://github.com/legacy-fluid" target="_blank" color="primary" icon>
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-card-title>

          <v-expand-transition>
            <div>
              <v-card-subtitle>
                Fluid is a open source API generator.
              </v-card-subtitle>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
            class="mx-auto"
            max-width="500"
        >
          <v-img
              src="../assets/icons/uniform.png"
          ></v-img>

          <v-card-title>
            <span>Uniform</span>
            <v-spacer class="mx-auto"></v-spacer>
            <v-btn href="https://github.com/go-uniform" target="_blank" color="primary" icon>
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-card-title>

          <v-expand-transition>
            <div>
              <v-card-subtitle>
                Uniform is a open source collection of base services.
              </v-card-subtitle>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card
            class="mx-auto"
            max-width="500"
        >
          <v-img
              src="../assets/icons/paycurve.png"
          ></v-img>

          <v-card-title>
            <span>Paycurve</span>
            <v-spacer class="mx-auto"></v-spacer>
            <v-btn href="https://www.paycurve.co.za/" target="_blank" color="primary" icon>
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </v-card-title>

          <v-expand-transition>
            <div>
              <v-card-subtitle>
                PayCurve is a financial technology platform, that provides employees with early access to a portion of
                their earned and unencumbered salary at any point during the month.
              </v-card-subtitle>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
            class="mx-auto"
            max-width="500"
        >
          <v-img
              src="../assets/icons/eyerys.png"
          ></v-img>

          <v-card-title>
            <span>Eyerys</span>
            <v-spacer class="mx-auto"></v-spacer>
            <v-btn href="https://www.smokeci.com/product/eyerys" target="_blank" color="primary" icon>
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </v-card-title>

          <v-expand-transition>
            <div>
              <v-card-subtitle>
                Eyerys is a customer feedback solution that gathers customer feedback across all communication channels.
              </v-card-subtitle>
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
  data: () => ({}),
}
</script>

<style scoped>

</style>

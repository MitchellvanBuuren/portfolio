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
            <div v-show="showFluid">
              <v-card-subtitle>
                Fluid is a open source API generator.
              </v-card-subtitle>
            </div>
          </v-expand-transition>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showFluid = !showFluid"
            >
              <v-icon>{{ showFluid ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="350"
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
            <div v-show="showUniform">
              <v-card-subtitle>
                Uniform is a open source collection of base services.
              </v-card-subtitle>
            </div>
          </v-expand-transition>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showUniform = !showUniform"
            >
              <v-icon>{{ showUniform ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
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
            <div v-show="showPaycuve">
              <v-card-subtitle>
                PayCurve is a financial technology platform, that provides employees with early access to a portion of
                their earned and unencumbered salary at any point during the month.
              </v-card-subtitle>
            </div>
          </v-expand-transition>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showPaycuve = !showPaycuve"
            >
              <v-icon>{{ showPaycuve ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="350"
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
            <div v-show="showEyerys">
              <v-card-subtitle>
                Eyerys is a customer feedback solution that gathers customer feedback across all communication channels.
              </v-card-subtitle>
            </div>
          </v-expand-transition>

          <v-card-actions>
            <v-btn
                icon
                class="mx-auto"
                @click="showEyerys = !showEyerys"
            >
              <v-icon>{{ showEyerys ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
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

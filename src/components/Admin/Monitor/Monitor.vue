<template>
  <v-container>
    <v-tabs v-model="tab" background-color="primary accent-4" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Products
        <v-icon>mdi-shopping</v-icon>
      </v-tab>

      <v-tab href="#tab-2" @click="productWarning()">
        warning
        <v-icon v-if="isAlert" color="red">mdi-alarm-light</v-icon>
        <v-icon v-else>mdi-alarm-light</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-card-text style="background-color:aliceblue">
            <Table :product=allProduct.product />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat>
          <v-card-text style="background-color:moccasin">
            <Table :product=product.product />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import Table from "../Table/DataTable"
  export default {
    components: { Table },
    data () {
      return {
        tab: null,
        isAlert: false,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    computed: {
      allProduct: {
        get () {
          return this.$store.getters.GET_ALL_PRODUCTS || {}
        }
      },
      product: {
        get () {
          return this.$store.getters.GET_ALERT_PRODUCTS || {}
        }
      }
    },
    sockets: {
      alertNoti: function (val) {
        if (val === 'notiAdmin') {
          this.productWarning()
          this.isAlert = true
        }
      },
      resetProduct: function (val) {
        if (val === 'fetchProduct') {
          this.getAllProducts()
        }
      }
    },
    mounted() {
      this.getAllProducts()
    },
    methods: {
      getAllProducts() {
        this.$store.dispatch('FETCH_ALL_PRODUCTS')
      },
      productWarning() {
        this.isAlert = false
        this.$store.dispatch('ALERT_PRODUCTS')
      }
    }
  }
</script>

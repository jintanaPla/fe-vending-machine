<template lang="html">
  <v-container>
    <v-row class="d-flex align-content flex-wrap">
      <v-col cols="12" style="max-width: 33%" v-for="(data, index) in productsDetail.product" v-bind:key="index">
        <v-card style="height: auto" outlined @click="openDialog(data)" :style="[ data.product_number <= 0 ? {'filter': 'grayscale(100%)'}: 'none']">
          <ProductImage  :image=data.picture />
          <v-divider class="mx-4"></v-divider>
           <ProductDetail  :product=data />
        </v-card>
      </v-col>
    </v-row>
    <v-card-text>
    </v-card-text>
    <Dialog ref="numberProduct"/>
  </v-container>
</template>
<script>
import ProductImage from "./ProductImage/ProductImage"
import ProductDetail from "./ProductDetail/ProductDetail"
import Dialog from "./Dialog"
export default {
  components: {
    ProductImage,
    ProductDetail,
    Dialog
  },
  data() {
    return {
      numberProduct: 2,
      location:null,
      gettingLocation: false,
      errorStr:null
    }
  },
  computed: {
    productsDetail: {
      get () {
        return this.$store.getters.GET_PRODUCTS || ""
      }
    }
  },
  mounted() {
    this.getProducts('Bangkok')
  },
  methods: {
    getProducts (location) {
      this.$store.dispatch('FETCH_PRODUCTS', location)
    },
    openDialog(data) {
      if (data.product_number > 0) {
        this.$refs.numberProduct.open(data)
      }
    }
  }
}
</script>

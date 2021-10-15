<template>
  <div >
    <v-card
    :loading="loading"
    class="mx-auto my-12 cardSize"
    >
    <div><img style="height:auto" src="/image/cover.png" @click="successPage()"/></div>
    <img :src="qrcode" @click="successPage()"/>
  </v-card>
  <AlertSuccess ref="open"/>
</div>
</template>

<script>
import api from '../../gateways/api'
export default {
  data () {
    return {
      qrcode: ""
    }
  },
  computed: {
    buyProduct: {
      get () {
        return this.$store.getters.GET_BUY_PRODUCTS || ""
      }
    }
  },
  mounted() {
    this.generateQR()
  },
  methods: {
    generateQR() {
      this.qrcode =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.buyProduct.id_location}${this.buyProduct.id_product}${this.buyProduct.product_number}`
    },
    successPage() {
      console.log(this.buyProduct);
      var request = {'id_location': this.buyProduct.id_location, 'id_product': this.buyProduct.id_product, 'product_number': this.buyProduct.product_number}
      api.post('updateProduct', request).then(response => {
        if (response.data.description === "success") {
          this.$swal('ทำรายการสำเร็จ', '', 'success')
          this.$socket.emit('fetchProducts', 'fetchProduct')
          if (this.buyProduct.product_number < 10) {
            this.$socket.emit('addNoti', 'notiAdmin')
          }
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style scoped>
@import './Payment.css';
</style>

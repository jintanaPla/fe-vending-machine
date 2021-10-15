<template>
  <v-row justify="center">
    <v-dialog
    v-model="dialog"
    persistent
    max-width="290"
    >
    <v-card onblur="">
      <v-card-title class="text-h5">
        <v-text-field  v-model="numberChoose" ></v-text-field>
        <v-icon @click="clear()">backspace</v-icon>
      </v-card-title>
      <v-card-text  class="pa-0">
        <v-row class="d-flex align-content flex-wrap ma-auto">
          <v-col cols="12" style="max-width: 33%"  v-for="i in 9" :key="i">
            <div class="circle" @click="CalNumberChoose(i)"><span>{{i}}</span></div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        color="green darken-1"
        text
        @click="cancleDialog()"
        >
        Cancle
      </v-btn>
      <v-btn
      color="green darken-1"
      text
      @click="save()"
      >
      OK
    </v-btn>
  </v-card-actions>
</v-card>
</v-dialog>
</v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      dataProduct: null,
      numberChoose: null,
      numberProduct: 20,
      sumNumber: "",
      qrcode: "",
      }
    },
    methods: {
      clear() {
        this.numberChoose = null
        this.sumNumber = ""
      },
      CalNumberChoose(number) {
        this.sumNumber = this.sumNumber + number.toString()
        this.numberChoose = this.sumNumber
      },
      open(dataProduct) {
        this.dialog = true
        this.dataProduct = dataProduct

      },
      cancleDialog() {
        this.dialog = false
        this.clear()
      },
      save() {
        var calNumber = parseInt(this.dataProduct.product_number) - parseInt(this.numberChoose)
        if (calNumber >= 0) {
            this.dataProduct.product_number = calNumber
            this.$store.dispatch('BUY_PRODUCTS', this.dataProduct)
            this.$router.push(`/payment`)
        } else {
          calNumber = 0
          this.$swal('สินค้าคงเหลือไม่เพียงพอ', '', 'warning')
        }
      }
    }
  }
  </script>
  <style>
  @import './Dialog.css';
  </style>

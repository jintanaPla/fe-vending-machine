<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="product"
      :search="search"
    >
     <template  v-slot:item="props">
         <tr>
          <td class="text-xs-center">{{ props.item.location}}</td>
          <td class="text-xs-center">{{ props.item.product_name }}</td>
          <td class="text-xs-center">{{ props.item.product_price }}</td>
          <td class="text-xs-center">{{ props.item.product_number }}</td>
          <td class="text-xs-center">{{ formatDate(props.item.update_date)}}</td>
          </tr>
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: [ 'product' ],
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Location',
            align: 'start',
            value: 'location',
          },
          { text: 'Products Name', value: 'product_name' },
          { text: 'Prices', value: 'product_price' },
          { text: 'Number', value: 'product_number' },
          { text: 'Update Date', value: 'update_date' },
        ]
      }
    },
    methods: {
        formatDate (datetime) {
      var date = new Date(datetime)
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var month = (date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      var year = date.getFullYear()
      var hours = date.getHours();
      var minutes = date.getMinutes();
          minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ';
      return day + '/' + month + '/' + year + " " + strTime;
      }
    }
  }
</script>
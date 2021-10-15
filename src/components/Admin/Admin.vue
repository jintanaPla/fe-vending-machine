<template>
  <v-card
  class="mx-auto overflow-hidden"
  >
  <v-app-bar
  color="deep-purple"
  dark
  style="width:100vw"
  >
  <v-toolbar-title>
    <v-btn outlined color="white" @click="logout()">logout</v-btn>
    <span class="pl-4">{{userData.username}}</span>
  </v-toolbar-title>
</v-app-bar>
<Monitor/>
</v-card>
</template>

<script>
import Monitor from './Monitor/Monitor'
import { Decode } from '@/services'
export default {
  components: { Monitor },
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    userData() {
      if (this.$cookies.isKey("information")) {
        return JSON.parse(Decode.decode(this.$cookies.get("information")));
      } else {
        return "";
      }
    }
  },
  methods: {
    logout() {
      this.$cookies.remove('information', '/', process.env.DOMAIN)
      this.$router.push('/login')
    }
  }
}
</script>

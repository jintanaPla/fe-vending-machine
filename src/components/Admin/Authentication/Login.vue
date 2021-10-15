<template>
  <v-app id="inspire">
    <v-content>
      <div class="centerHeight lineBg">
        <v-container class="widthfull">
          <v-layout row wrap>
            <v-flex xs6 sm6 md5 offset-sm1 offset-xs2 offset-md1>
              <div class="white--text welcomeDiv">
                <h1 class="welcometext">Monitor Products</h1>
                <h1 class="welcometext">Login</h1>
              </div>
            </v-flex>
            <v-flex xs6 sm4 md4>
              <v-card class="elevation-12 loginDiv" dark color="transparent">
                <v-card-text class="pb-0">
                  <v-form>
                    <v-text-field @keyup.enter="getLogin()" color="yellow darken-2" prepend-icon="person" name="username" label="username" v-model="username" type="text"></v-text-field>
                    <v-text-field @keyup.enter="getLogin()" color="yellow darken-2" prepend-icon="lock" name="password" label="password" id="password" v-model="password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions class="pt-0" style="justify-content:center;">
                  <v-btn class="mb-2 mr-2" depressed color="primary" @click="getLogin()">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import api from '../../../gateways/api'
import { Encode } from '@/services'
export default {
  data () {
    return {
      drawer: null,
      username: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    getLogin () {
      this.isLoading = true
      if (this.username.trim() === '') {
        this.isLoading = false
        this.$swal('กรุณากรอก Username', '', 'warning')
        return
      } else if (this.password.trim() === '') {
        this.isLoading = false
        this.$swal('กรุณากรอก Password', '', 'warning')
        return
      }
      var source = {'username': this.username, 'password': this.password}
       api.post('/adminLogin', source).then((response) => {
         console.log(response);
         if (response.data.description !== 'success') {
            this.$swal('กรุณาตรวจสอบ Username หรือ Password ของท่าน', '', 'warning')
         } else {
            this.$router.push("monitor")
            this.$cookies.set('information', Encode.encode(JSON.stringify(response.data.data)), null, '/', process.env.DOMAIN)
         }
       })
    }
  }
}
</script>

<style scoped>
.input-group__input {
  padding-left: 0em;
}
.input-group {
  padding: 20px 0 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#inspire {
  background-image: url('/static/img/background/bg_login.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.loginDiv{
  border-radius: 5px !important;
  box-shadow: none !important;
  margin-top: 0.5em;
}
.welcomeDiv{
  border-right: 3px solid #fff;
  margin-right: 2em;
  padding: 3.5em;
}
.welcometext{
  text-align: center;
  font-size: 40px;
}
.lineBg{
  background: #435267eb;
  padding: 17em 0!important;
  height:100%
}

@media only screen and (max-width: 1024px) {
  .loginDiv{
    border-radius: 5px !important;
    box-shadow: none !important;
    margin-top: 0.5em;
  }
  .welcomeDiv{
    border-right: 3px solid #fff;
    margin-right: 2em;
    padding: 5em 2em;
  }
  .welcometext{
    text-align: center;
    font-size: 28px;
  }
  .lineBg{
    padding: 5em 0;
  }
}
@media only screen and (max-width: 823px) {
  .container{
    padding: 1em;
  }
  .welcomeDiv{
    border-right: none;
    margin-right: 0;
    padding: 1em 1em 0 1em;
  }
  .welcometext{
    font-size: 24px;
  }
  .loginDiv{
    margin-top: 0;
    width: 250px;
  }
  .lineBg{
    padding: 0;
    margin: 0 2em;
  }
}
</style>

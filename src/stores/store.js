import Vue from 'vue'
import Vuex from 'vuex'
import api from '../gateways/api'

Vue.use(Vuex)

const state = {
  products: {},
  all_products: {},
  buy_products: {},
  alert_products: {}
}

const actions = {
  FETCH_PRODUCTS: (state, location) => {
    api.post('locationProduct',{'location': location}).then(response => state.commit('SET_PRODUCTS', response))
  },
  FETCH_ALL_PRODUCTS: (state) => {
    api.get('getAllProduct').then(response => state.commit('SET_ALL_PRODUCTS', response))
  },
  ALERT_PRODUCTS: (state) => {
    api.get('productAlert').then(response => state.commit('SET_ALERT_PRODUCTS', response))
  },
  BUY_PRODUCTS: (state, dataUpdateProduct) => {
    state.commit('SET_BUY_PRODUCTS', dataUpdateProduct)
  }
}

// mutations
const mutations = {
  SET_PRODUCTS: (state, data) => {
    state.products = data.data
  },
  SET_ALL_PRODUCTS: (state, data) => {
    state.all_products = data.data
  },
  SET_ALERT_PRODUCTS: (state, data) => {
    state.alert_products = data.data
  },
  SET_BUY_PRODUCTS: (state, data) => {
    state.buy_products = data
  }
}

const getters = {
  GET_PRODUCTS: (state) => {
     const dataProducts = state.products
     return dataProducts.data
   },
   GET_ALL_PRODUCTS: (state) => {
    const allProducts = state.all_products
    return allProducts.data
  },
  GET_ALERT_PRODUCTS: (state) => {
    const alertProducts = state.alert_products
    return alertProducts.data
  },
  GET_BUY_PRODUCTS: (state) => {
    const buy_products = state.buy_products
    return buy_products
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

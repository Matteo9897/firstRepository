import { createStore } from 'vuex'
import profile from './modules/profile'
import auth from './modules/auth'
import ps from './modules/ps'
//import axios from '/Users/alessandro/Desktop/Matteo/VUE JS/vuesecond/app/src/views/axios-auth'


export default createStore({
  modules: { 
    profile,
    auth,
    ps,
  }
})

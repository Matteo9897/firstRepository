import axios from '/Users/alessandro/Desktop/Matteo/VUE JS/vuesecond/app/src/views/axios-auth'

const state = {
    accessoFirebase : ''
};
const getters = {
    getAccessoFirebase : state => state.accessoFirebase,
};
const mutations = {
    setAccessoFirebase : (state,newvalue) => state.accessoFirebase = newvalue,
};
const actions = {
    //setAccessoFirebase (context) { context.commit('setAccessoFirebase') },    
    // eslint-disable-next-line no-unused-vars
    register({commit,dispatch},formData) {
        axios.post('/signupNewUser?key=AIzaSyA3B86VgBeLyAEbRnbTHEdRoKYFTQt1-To',
        {
            email : formData.email,
            password : formData.password,
            returnSecureToken : true
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => console.log(error))
    },
    // eslint-disable-next-line no-unused-vars
    login({commit,dispatch}, formData) {
        axios.post('/verifyPassword?key=AIzaSyA3B86VgBeLyAEbRnbTHEdRoKYFTQt1-To',
        {
            email : formData.email,
            password : formData.password,
            returnSecureToken : true
        })
        .then(res => {
            //this.setAccessoFirebase('setAccessoFirebase');
            commit('setAccessoFirebase','allow');
            console.log(res);
        })
        .catch(error => console.log(error))
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
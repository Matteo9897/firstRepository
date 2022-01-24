const state = {
    token: '',
};
const getters = {
    getToken : state => state.token,
};
const mutations = {
    setToken : (state,newvalue) => state.token = newvalue,
};
const actions = {

    //eslint-disable-next-line no-unused-vars
    getClienti({commit,dispatch,getters}) {
        console.log("TOKEN:::", getters.getToken);
        const url = "192.168.10.249/v78/module/matteo_1/getClByData"
        var requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': getters.getToken
            },
        };

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }   

};

export default {
    state,
    getters,
    mutations,
    actions
}
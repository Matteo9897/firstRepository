const state = {
    idCliente: '',
    nome: '',
    cognome: '',
    email: ''
};
const getters = {
    getIdCliente : state => state.idCliente,
    getNome : state => state.nome,
    getCognome : state => state.cognome,
    getEmail : state => state.email,
};
const mutations = {
    setIdCliente : (state,newvalue) => state.idCliente = newvalue,
};
const actions = {
    
};

export default {
    state,
    getters,
    mutations,
    actions
}
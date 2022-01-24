<template>
    <div class="hello">
        {{idCliente}}
        <input v-model="idCliente">
        <button @click="invia()">Console Log</button>
    </div>
</template>

<script>
//import {mapGetters, mapMutations/* , mapActions */} from 'vuex'
/* import {mapFields} from 'vuex-map-fields' */

export default {
    name: 'ModificaPrezzoProdotti',

    
    computed: {
        /* ...mapGetters([
            'getIdCliente'
        ]), */
        idCliente: {
            get: function() {
                    return this.$store.state.idCliente;
            },
            set: function(newvalue) {
                this.$store.state.idCliente = newvalue;
            }
        }
 
    },

    methods: {
        
        /* ...mapMutations([
            'setIdCliente'
        ]), */
    }
    
}
</script>

<template>
    <div class="hello">
        <h1>Dettagli Cliente con id: {{getIdCliente}}</h1>
        Nome: {{getNome}} <br>
        Cognome: {{getCognome}} <br>
        Email: {{getEmail}} <br>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  
    name: 'Main',

    data()  {
       return {
            myobj : '',
            check : '',
            //nome : '',
            //cognome : '',
            //email : ''  
        }
    },

    computed: {
        ...mapGetters([
            'getIdCliente',
            'getNome',
            'getCognome',
            'getEmail'
        ])
    },
}
</script>
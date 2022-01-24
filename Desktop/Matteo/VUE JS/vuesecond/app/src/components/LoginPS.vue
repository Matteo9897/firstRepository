<template>
    <div>
        <form @submit.prevent="onsubmit">
            <div>
                <h2>Login</h2>
            </div>
           
            <div>
                <button class="btn btn-dark">Login</button> |
                <button class="btn btn-dark" @click="cambiaToken()">Cambia Token</button>
            </div>
        </form>
    </div>
</template>


<script>

//import axios from 'axios';

import {mapGetters,mapMutations} from 'vuex'

export default {
    name: 'Register',
    data(){
        return {
        }
    },
    computed: {
        ...mapGetters([
            //'getToken' : 'ps/getToken',
            'getToken'
        ]),
    },
    methods : {
        ...mapMutations([
            'setToken'
        ]),
        cambiaToken() {
            this.setToken("a");
        },
        onsubmit() {
            const url = 'http://192.168.10.249/v78/module/matteo_1/login';
            var config = {
                method: 'GET',
                headers: {
                    'Authorization': 'QkVSOjExNjcwMTQwMDA=', 
                },
            };
            fetch(url,config)
                .then(response => response.text())
                .then(result => {
                    //console.log(result);
                    this.setToken(JSON.parse(result).token);
                    console.log("Token: ", this.getToken);
                })
                .catch(error => console.log('error', error));
        }
    },
    watch : {
        getToken : function(val) {
            console.log("Eseguo watch: ", val);
            
        }
    }
}
</script>


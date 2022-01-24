<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        id_customer da modificare: <input v-model="idCliente"> &nbsp;
        <button @click="getCliente()">GET Cliente</button> &nbsp;&nbsp;
        <router-link to="/dettaglicliente">DettagliCliente</router-link>

        <div id="cl">{{nome + ", " +  cognome + ", " + email}}</div>
        Nome: <input v-model="nome">
        Cognome: <input v-model="cognome">
        Email: <input v-model="email">
        <br><br>
        <button href="#" class="btn btn-primary" @click="salva()">Salva</button>
        <div id="cl">{{check}}</div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
  
    name: 'ModificaClienti',

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
        nome: {
            get: function() {
                return this.$store.state.nome;
            },
            set: function(newvalue) {
                this.$store.state.nome = newvalue;
            }
        },
        cognome: {
            get: function() {
                return this.$store.state.cognome;
            },
            set: function(newvalue) {
                this.$store.state.cognome = newvalue;
            }
        },
        email: {
            get: function() {
                return this.$store.state.email;
            },
            set: function(newvalue) {
                this.$store.state.email = newvalue;
            }
        },
        idCliente: {
            get: function() {
                return this.$store.state.idCliente;
            },
            set: function(newvalue) {
                this.$store.state.idCliente = newvalue;
            }
        },
    },
  
    props: {
        msg: String
    },

    methods : {
                                      
        getCliente() {
            this.check = '';
            var url = "http://192.168.10.249/v78/module/mymodule/getClByData";
            axios.post(url)
            .then(result => {
                const obj = result.data;
                this.myobj = obj;
                console.log(this.myobj);
                //if(this.myobj.id_)
                //this.idCliente --;
                console.log("idCliente=", this.idCliente)
                if(this.myobj[this.idCliente]) { //se esiste
                    this.nome = this.myobj[this.idCliente].firstname;
                    this.cognome = this.myobj[this.idCliente].lastname;
                    this.email = this.myobj[this.idCliente].email;
                }
                else alert(`Non sono presenti clienti con id = ${this.idCliente}`); 
            })
            .catch(error => {
                alert("Server irragiungibile, riprova più tardi..."); 
                console.log('error', error);
            })
      },

        salva() {
            console.log(this.myobj);
            this.myobj[this.idCliente].firstname = this.nome;
            this.myobj[this.idCliente].lastname = this.cognome;
            this.myobj[this.idCliente].email = this.email;
            console.log("email", this.myobj.email);
            console.log("email", this.email);
            console.log("this.myobj = ", this.myobj) 
            var formdata = new FormData();
            formdata.append("Clienti", JSON.stringify(this.myobj));
            var url2 = "http://192.168.10.249/v78/module/mymodule/putCl";
            axios.post(url2, formdata)   
                .then(this.check = "DB modificato.")
                .catch(error => console.log('error', error)); 
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
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
</style>
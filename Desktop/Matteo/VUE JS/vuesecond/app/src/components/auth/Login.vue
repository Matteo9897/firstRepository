<template>
  <div>
    <br /><br /><button @click="richiediAccesso()">Richiedi Accesso</button
    ><br /><br />
    <template v-if="accesso == 'ok'">
      <form @submit.prevent="onsubmit">
        <div>
          <h2>Login</h2>
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <button class="btn btn-dark">Salva</button>
        </div>
      </form>
    </template>
    <!-- <template v-else> Accesso negato</template> -->
    <template v-else>
      {{ accesso }}
    </template>

    <button @click="console()">Console.log(getAccessoFirebase)</button>
    <template v-if="this.getAccessoFirebase == 'allow'">
      <h1>Logged Firebase</h1>
      <button @click="getClienti()">Get Clienti</button>
      
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import axios from '/Users/alessandro/Desktop/Matteo/VUE JS/vuesecond/app/src/views/axios-auth'

export default {
  name: "Register",
  data() {
    return {
      accesso: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["getToken", "getAccessoFirebase"]),
  },
  methods: {
    recuperaToken() {
      console.log(this.getToken);
    },
    richiediAccesso() {
      console.log(this.getToken);
      if (this.getToken != "") this.accesso = "ok";
      else this.accesso = "Accesso Negato";
    },
    console() {
      console.log(this.getAccessoFirebase);
    },
    onsubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password,
      });
    },
    getClienti() {
      this.$store.dispatch("getClienti");
    }
  },
};
</script>

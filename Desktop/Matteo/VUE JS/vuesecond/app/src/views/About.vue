<template>
  <div>
    <button @click="postApi()">Postman API</button>
  </div>
</template>


<script>


export default {
    name: 'Register',
    data(){
        return {
           
        }
    },
    
    methods : {
        postApi() {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "MTE2NzAxNDAwMEJFUjIwMjIvMDEvMDUgMDQ6Mzk6MTUxNjQxMzk3MTU1LjA3NTUyNDE0NA==");

          var raw = JSON.stringify({
            "send": [
              {
                "id": 1
              }
            ]
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
          };

          fetch("http://192.168.10.249/v78/module/mexal/getproduct", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    }
}
</script>


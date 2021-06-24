<template>
  <div class="subscribe">
    <form method="POST" @submit.prevent="contact">
      <h1 class="ion-text-center">Contact</h1><hr>
        <ion-label for="lastname">
          NOM
        </ion-label>
        <div class="errors" v-if="errors">{{errors[0]}}</div>
        <ion-input v-model="contactForm.lastname" id="name" type="text"></ion-input>

        <ion-label for="firstname">
          PRENOM
        </ion-label>
        <div class="errors" v-if="errors">{{errors[1]}}</div>
        <ion-input v-model="contactForm.firstname" id="firstname" type="text"></ion-input>


        <ion-label class="block" for="email">
          EMAIL
        </ion-label>
        <div class="errors" v-if="errors">{{errors[2]}}</div>
        <ion-input v-model="contactForm.email" id="email" type="text"></ion-input>
    
        <ion-label>
          OBJET
        </ion-label>
        <div class="errors" v-if="errors">{{errors[3]}}</div>
        <ion-input v-model="contactForm.object" id="siret" type="text"></ion-input>

        <ion-label for="password">
          MESSAGE
        </ion-label>
        <div class="errors" v-if="errors">{{errors[4]}}</div>
        <ion-textarea v-model="contactForm.message" id="password" type="password"></ion-textarea>
        <div  class="ion-text-center">
          <ion-button type="submit">
            Envoyer
          </ion-button>
        </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton, IonTextarea } from '@ionic/vue';
// import axios from 'axios'

export default {
  name: 'ContactForm',
  components: { IonInput, IonLabel, IonButton, IonTextarea },
  data(){
    return{
      contactForm: {
        lastname: '',
        firstname: '',
        email: '',
        object: '',
        message: '',
        token: '',
      },
      errors: []
    }
  },
  methods:{
    contact(){
    //   console.log(this.contactForm.email)
    //   axios(`${process.env.VUE_APP_URL}api/contact`, {
    //     // axios(`http://127.0.0.1:8000/contact`, {
    //       method: 'POST',
    //     //   headers: {
    //     //   'Access-Control-Allow-Origin': '*',
    //     //   'Accept': 'application/json',
    //     //   'Content-Type': 'application/json'
    //     // },
    //     data: {
    //       lastname: this.contactForm.lastname,
    //       firstname: this.contactForm.firstname,
    //       email: this.contactForm.email,
    //       object: this.contactForm.object,
    //       message: this.contactForm.message,
    //     } 
    //   })
    //   .then((response)=> {
    //     this.$router.push({ path: "/" });
    //     this.token = response.data.token
    //     console.log(this.token)
    //   })
    //   .catch(error => {
    //     if(error.response.status === 400 || error.response.status ===  422){
    //       return this.errors.push(error.response.data.errors.lastname[0],
    //                               error.response.data.errors.firstname[0],
    //                               error.response.data.errors.email[0],
    //                               error.response.data.errors.object[0],
    //                               error.response.data.errors.message[0],)
    //     }
    // });
    // this.contactForm = {}
    // this.errors = []
    },
  }
}
</script>

<style scoped>
.subscribe {
  margin: 0 2em;
}
hr {
  background-color: #20c997;
  margin: 1em;
}
h1 {
  color: #20c997;
  margin-bottom: 0.5em;
}
a {
  text-decoration: none;
  color:#20c997;
}
form {
  padding: 0.5rem 2rem;
}
.errors {
  margin: 2px 0;
  color:red;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  --color: white;
  --background: #20c997;
  --background-activated: #20c997;
  width: 100%;
  --border-radius: 4px;
}

ion-label {
  color: #20c997;
  letter-spacing: 1px;
}
ion-input {
  border: 0.5px solid #20c997;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  height: 2em;
  margin: 0.2rem auto 0.8rem;
}
ion-textarea {
  border: 0.5px solid #20c997;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  margin: 0.2rem auto 0.8rem;
}
</style>

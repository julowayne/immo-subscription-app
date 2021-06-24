<template>
  <div class="content">
    <form method="POST" @submit.prevent="loginUser(loginForm)">
      <div v-if="messages">
        <div v-for="error in messages.error" :key="error">
          {{ error }}
          </div>
      </div>
      <ion-label class="block" for="email">
        Email
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[0]}}</div> -->
      <ion-input v-model="loginForm.email" id="email" type="text"></ion-input>
  
      <ion-label for="password">
        Password
      </ion-label>
      <!-- <div class="errors" v-if="errors">{{errors[1]}}</div> -->
      <ion-input v-model="loginForm.password" id="password" type="password"></ion-input>
      <div class="ion-text-center">
        <ion-button type="submit">
          Connexion
        </ion-button>
      </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton } from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Subscribe',
  components: { IonInput, IonLabel, IonButton },
  data(){
    return {
      loginForm: {},
    }
  },
  computed: {
    ...mapGetters(['messages'])
  },
  methods:{
      ...mapActions(['login']),
      loginUser(loginForm){
          this.login(loginForm)
      }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color:#20c997;
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
form {
  padding: 1rem 2rem;
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
</style>
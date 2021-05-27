<template>
  <div class="content">
    <form>
      <h1 class="ion-text-center"><a href="">Inscription</a>  | <a href="">Connexion</a> </h1>
        <ion-label for="name">
          NOM
        </ion-label>
        <ion-input id="name" type="text"></ion-input>

        <ion-label for="firstname">
          PRENOM
        </ion-label>
        <ion-input id="firstname" type="text"></ion-input>


        <ion-label class="block" for="email">
          EMAIL
        </ion-label>
        <ion-input id="email" type="text"></ion-input>
    
        <ion-label>
          N° SIRET
        </ion-label>
        <ion-input id="siret" type="text"></ion-input>

        <ion-label for="password">
          Password
        </ion-label>
        <ion-input id="password" type="password"></ion-input>
        <div  class="ion-text-center">
          <ion-button type="button">
            Créer mon compte
          </ion-button>
        </div>
    </form>
  </div>
</template>

<script>
import { IonInput, IonLabel, IonButton } from '@ionic/vue';

  export default {
    name: 'Subscribe',
    components: { IonInput, IonLabel, IonButton  }
  }
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}
h1 {
  color: #20c997;
  margin-bottom: 1.5em;
}
a {
  text-decoration: none;
  color:#20c997;
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
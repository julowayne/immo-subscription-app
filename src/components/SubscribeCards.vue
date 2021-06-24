<template>
  <div class="content">
    <h2 class="ion-text-center">Choisissez votre formule.</h2>
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Abonnement pour 6 mois</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      <div class="card">
        <div class="cardContent">
          <img src="assets/icon/money-transfer-64.png" alt="price logo">
          <span class="price ion-align-items-center">49.90 €</span>
        </div>
        <hr>
        <div class="cardContent">
          <img src="assets/icon/log-in-64.png" alt="price logo">
          <span class="informations">Accès aux dossier<br> de vos clients</span>
        </div>
      </div>
      <div class="ion-text-center" id="choose">
        
        <ion-button type="button">
          Choisir
        </ion-button>
      </div>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Abonnement pour 3 mois</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      <div class="card">
        <div class="cardContent">
          <img src="assets/icon/money-transfer-64.png" alt="price logo">
          <span class="price ion-align-items-center">27.90 €</span>
        </div>
        <hr>
        <div class="cardContent">
          <img src="assets/icon/log-in-64.png" alt="price logo">
          <span class="informations">Accès aux dossier<br> de vos clients</span>
        </div>
      </div>
      <div class="ion-text-center" id="choose">
        <a href="/tabs/checkout">
          <ion-button type="button">
            Choisir
          </ion-button>
        </a>
      </div>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title class="ion-text-center">Abonnement pour 1 mois</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      <div class="card">
        <div class="cardContent">
          <img src="assets/icon/money-transfer-64.png" alt="price logo">
          <span class="price ion-align-items-center">9.90 €</span>
        </div>
        <hr>
        <div class="cardContent">
          <img src="assets/icon/log-in-64.png" alt="price logo">
          <span class="informations">Accès aux dossier<br> de vos clients</span>
        </div>
      </div>
      <div class="ion-text-center" id="choose">
        <ion-button class="choose" type="button">
          Choisir
        </ion-button>
      </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import { IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonButton } from '@ionic/vue';
export default {
  name: 'SubscribeCards',
  components: {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonButton
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
h2 {
  font-style: italic;
  color: grey;
}
.cardContent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,0.2)!important;
  --color: white;
  /* --background: blue;
  --background-activated: blue; */
  --background: #007bff;
  --background-activated: #007bff;
  --border-radius: 4px;
  font-size: 1.2em;
  width: 100%;
  height: 2.5rem;
}
ion-card-title {
  font-size: 1rem;
  color: white;
  margin: 0 auto;
}
ion-card-header {
  background-color: #007bff;
  /* background-color: blue; */
  margin-bottom: 1em;
}
ion-card {
  margin: 2em 4em;
}
.card {
  max-width: 30rem;
  margin: auto;
}
hr {
  background-color: #007bff;
  margin: 1em;
}
.informations {
  font-weight: bold;
}
.price {
  font-size: 2em;
  font-weight: bold;
}
#choose {
  margin-top: 1rem;
}
/* ion-button {
  width: 100%;
  height: 2.5rem;
} */
</style>
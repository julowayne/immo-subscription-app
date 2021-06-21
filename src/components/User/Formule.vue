<template>
  <div class="content">
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
      <div class="ion-text-center choose">
        <ion-button type="button">
          Changer ma formule
        </ion-button>
      </div>
      <div class="ion-text-center choose">
        <ion-button type="button">
          Annuler
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
.cardContent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.8em;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,0.2)!important;
  --color: white;
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
  margin-left: 1em;
}
.price {
  font-size: 2em;
  font-weight: bold;
}
/* ion-button {
  width: 100%;
  height: 2.5rem;
} */
</style>
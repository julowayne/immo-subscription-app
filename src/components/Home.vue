<template>
  <div id="container">
    <h2 id="title">Qui est Alfred ?</h2>
    <img id="logo" src="assets/icon/alfred2.png" alt="">
    <ion-text>
      <span id="alfred">Alfred</span> est un service qui propose
      aux agences immobilières de pouvoir
      retrouver les dossiers des personnes
      souhaitant louer un bien qu'ils proposent.
    </ion-text>
    <div>
      <ion-button type="button" href="/tabs/offres">
        Voir les offres
      </ion-button>
    </div>
  </div>
</template>

<script>
import { IonText, IonButton } from '@ionic/vue';
export default {
  name: 'Home',
  components: {
    IonText,
    IonButton
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  background-color: #F8F9FA;
  min-height: 100vh;
}
ion-button {
  --box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  --color: white;
  --background: #20c997;
  --background-activated: #20c997;
  width: 70%;
  --border-radius: 4px;
}
#alfred {
  color: #20c997;
  font-style: italic;
  font-weight: bold;
}
ion-text {
  margin: 1rem 1rem;
  font-size: 1.3em;
}
#logo {
  width: 60%;
  margin: 0 auto;
  /* box-shadow: 0 .125rem .25rem rgba(0,0,0,.075); */
  filter:drop-shadow(0 .125rem .25rem rgba(0,0,0, 0.5));
}
#title {
  margin-top: 1em;
  font-size: 2rem;
  font-style: italic;
  font-weight: lighter;
  color: grey;
}
</style>
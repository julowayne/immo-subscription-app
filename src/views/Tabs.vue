<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="accueil" href="/tabs/accueil">
          <ion-img src="assets/icon/accueil-app.png"></ion-img>
        </ion-tab-button>
          
        <ion-tab-button tab="forms" href="/tabs/forms">
          <ion-img src="assets/icon/subscribe-app.png"></ion-img>
        </ion-tab-button>
        
        <ion-tab-button tab="contact" href="/tabs/contact">
          <ion-img src="assets/icon/contact-app.png"></ion-img>
        </ion-tab-button>
        <ion-tab-button tab="actualites" href="/tabs/actualites">
          <ion-img src="assets/icon/journal2.png"></ion-img>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonPage, IonImg } from '@ionic/vue';

export default {
  name: 'Contact',
  components: { IonTabs, IonTabBar, IonTabButton, IonPage, IonImg }
}
</script>
<style scoped>
ion-tab-button {
  background-color: #20C997;
  border-collapse: collapse;
}
</style>
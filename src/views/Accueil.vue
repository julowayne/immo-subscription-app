<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <Layout />
      <Home name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent} from '@ionic/vue';
import Home from '@/components/Home.vue';
import Layout from '@/components/Layout.vue';

export default  {
  name: 'Accueil',
  components: { Home, IonContent, IonPage, Layout }
}
</script>
<style>
ion-page {
  background-color: #F8F9FA;
}

ion-toolbar {
  --min-height: 10vh;
  background-color: white;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  border: none;

}
ion-buttons {
  max-height: 10vh;
  margin: 10px;
}
</style>
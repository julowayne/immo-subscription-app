<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <Layout />
    <Subscribe />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Layout from '@/components/Layout.vue';
import Subscribe from '@/components/Subscribe.vue';

export default  {
  name: 'Forms',
  components: { IonContent, IonPage, Layout, Subscribe }
}
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <Layout />
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Layout from '@/components/Layout.vue';

export default  {
  name: 'Contact',
  components: { IonContent, IonPage, Layout }
}
</script>
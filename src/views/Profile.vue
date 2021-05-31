<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <Layout />
    <contact-form/>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Layout from '@/components/Layout.vue';
import ContactForm from '@/components/ContactForm.vue';

export default  {
  name: 'Contact',
  components: { IonContent, IonPage, Layout, ContactForm }
}
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <Layout />
    <h1 class="ion-text-center"><a @click.prevent="inscriptionForm">Inscription</a>  | <a @click.prevent="connectForm">Connexion</a> </h1>
    <connexion v-if="$route.name === 'connexion'" />
    <Subscribe v-else />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Layout from '@/components/Layout.vue';
import Subscribe from '@/components/Subscribe.vue';
import Connexion from '@/components/Connexion.vue';


export default  {
  name: 'Forms',
  components: { IonContent, IonPage, Layout, Subscribe, Connexion },
  methods: {
    connectForm(){
      this.$router.push({ path: "/tabs/forms/connexion"});
    },
    inscriptionForm(){
      this.$router.push({ path: "/tabs/forms"});
    }
  }
}
</script>
<style scoped>
h1 {
  color: #20c997;
  margin-bottom: 1em;
}
</style>
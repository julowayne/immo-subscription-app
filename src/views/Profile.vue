<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <Layout />
    <h1 class="ion-text-center"><a @click.prevent="informations">Informations</a>  | <a @click.prevent="formule">Formule</a> </h1>
    <formule v-if="$route.name === 'formule'"/>
    <Informations v-else />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Layout from '@/components/Layout.vue';
import Formule from '@/components/User/Formule.vue';
import Informations from '@/components/User/Informations.vue';



export default  {
  name: 'Contact',
  components: { Formule, Informations, IonContent, IonPage, Layout },
  methods: {
    informations(){
      this.$router.push({ path: "/tabs/profile"});
    },
    formule(){
      this.$router.push({ path: "/tabs/profile/formule"});
    }
  }
  }
</script>
<style scoped>
h1 {
  color: #007bff;
  margin-bottom: 0;
}
</style>
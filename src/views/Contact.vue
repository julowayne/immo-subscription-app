<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <Layout />
    <contact-form />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import Layout from '@/components/Layout.vue';
import ContactForm from '@/components/ContactForm.vue';


export default  {
  name: 'Contact',
  components: { IonContent, IonPage, Layout, ContactForm },
  // data(){
  //   return{
  //     contactForm: {
  //       lastname: '',
  //       firstname: '',
  //       email: '',
  //       object: '',
  //       message: '',
  //     },
  //     errors: []
  //   }
  // },
  // methods:{
  //   login(){
  //     axios(`${process.env.VUE_APP_URL}contact`, {
  //         method: 'POST',
  //         headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       data: {
  //         lastname: this.contactForm.lastname,
  //         firstname: this.contactForm.firstname,
  //         email: this.contactForm.email,
  //         object: this.contactForm.object,
  //         message: this.contactForm.message,
  //       } 
  //     })
  //     .then((response)=> {
  //       this.$router.push({ path: "/" });
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       if(error.response.status === 400 || error.response.status ===  422){
  //         return this.errors.push(error.response.data.errors.lastname[0],
  //                                 error.response.data.errors.firstname[0],
  //                                 error.response.data.errors.email[0],
  //                                 error.response.data.errors.object[0],
  //                                 error.response.data.errors.message[0],)
  //       }

  //   });
  //   this.contactForm = {}
  //   this.errors = []
  //   },
  // }
}
</script>
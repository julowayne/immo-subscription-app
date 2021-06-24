<template>
  <div>
<div id="card-element"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        secret: null,
        stripe: null,
        payment_method: null,
        requires_action: null,
        payment_intent: null,
        card: null,
        payment_processed: false,
        message_processed: "",
        form: {
        }
      };
  },
  mounted(){
    this.stripe = window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY);
    const elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount("#card-element");
    axios.post(
        `${process.env.VUE_APP_URL}/stripe/intent`,
        {
            id: this.user.data.id,
        },
        {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        }
    )
        .then((response) => {
            this.secret = response.data.client_secret;
        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>

<style lang="scss" scoped>

</style>
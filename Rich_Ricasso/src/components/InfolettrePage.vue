

<template>
  <div class="infoForm">
    <h2>INFOLETTRE</h2>
    <template v-if="!success">
      <p>Recevez en exclusivité nos dernières nouveautés, promotions et collections en avant-première!</p>
      <v-form @submit.prevent="handleSubmit" v-model="valid" lazy-validation class="forms">
        <v-text-field
          v-model="courriel"
          type="email"
          name="email"
          id="email"
          placeholder="Adresse e-mail*"
          outlined
          dense
          hide-details
          class="signupForm"
          :rules="[rules.required, rules.email]"
          
        ></v-text-field>

        <div class="checkbx">
          <v-checkbox
            v-model="consent"
            label="Je consens à recevoir des offres et des propositions basées sur mes préférences conformément à la Politique de confidentialité de Ricasso &copy;"
          ></v-checkbox>
        </div>

        <v-btn :disabled="!valid" color="primary" class="signupBtn" type="submit">
          S'INSCRIRE
        </v-btn>
      </v-form>
    </template>

     <template v-else>
      <span class="message">Inscription réussie ! Vous recevrez bientôt nos nouveautés.</span>
    </template>

    <template v-if="error">
      <span class="error">{{ error }}</span>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { inscrireAbonnement } from "@/services/abonnement.service"; 

const courriel = ref("");
const message = ref("");
const success = ref(false);

const handleSubmit = async () => {

  const result = await inscrireAbonnement(courriel.value);

  message.value = result.message;
  success.value = result.success;

  if (result.success) {
    courriel.value = "";
  }
};
</script>

<script>
export default {
  data() {
    return {
      prenom: "",
      email: "",
      consent: false,
      valid: false,
      success: false,
      error: null,
      rules: {
        required: (value) => !!value || "Ce champ est requis.",
        email: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || "Adresse e-mail invalide.";
        },
      },
    };
  },
};
</script>

<style scoped>
.infoForm {
  background-color: #f5f5f5;
  border: 2px solid black;
  padding: 2rem;
  margin: 2rem;
  border-radius: 8px;
}
.signupBtn {
  margin-top: 1rem;
}
.message {
  color: green;
  font-weight: bold;
}
.error {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
}
</style>


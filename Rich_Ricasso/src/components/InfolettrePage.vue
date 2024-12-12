<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="headline">Infolettre</v-card-title>
          <v-card-text>
        
            <v-form ref="newsletterForm" @submit.prevent="subscribe">
              <!-- Prenom -->
              <v-text-field
                v-model="form.prenom"
                label="Prénom"
                outlined
                clearable
              ></v-text-field>

              <!-- Email -->
              <v-text-field
                v-model="form.email"
                label="Adresse e-mail*"
                outlined
                clearable
                :rules="[emailRule]"
                required
              ></v-text-field>

              <!-- Consent -->
              <v-checkbox
                v-model="form.consent"
                label="Je consens à recevoir des offres et des propositions basées sur mes préférences conformément à la Politique de confidentialité de Ricasso &copy;"
              ></v-checkbox>

              <!-- Error Message 
              <v-alert v-if="errorMessage" type="error" dismissible>
                {{ errorMessage }}
              </v-alert>
              -->

              <!-- Success Message 
              <v-alert v-if="successMessage" type="success" dismissible>
                {{ successMessage }}
              </v-alert>
              -->

              <!-- Submit Button -->
              <v-btn :disabled="!form.consent" color="primary" type="submit">
                S'inscrire
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        form: {
        prenom: "",
        email: "",
        consent: false,
      },
      errorMessage: "",
      successMessage: "",
      emailRule: (v) => !!v || "Adresse e-mail requise",
    };
  },
  
};

</script>

<style scoped>
.error-text {
  color: red;
}
</style>


<template>
  <v-container class="signup-section" fluid>
    <v-form v-model="valid" class="signupForm" @submit.prevent="handleSubmit">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <h2>S'INSCRIRE</h2>
          <p>Inscrivez-vous sur Ricasso.ca pour profiter de nombreux avantages:</p>
          <p class="required">Obligatoire*</p>

          <v-text-field
            v-model="prenom"
            label="Prénom*"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="nom"
            label="Nom*"
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="courriel"
            label="Adresse e-mail*"
            :rules="[rules.required, rules.email]"
            required
          ></v-text-field>

          <v-text-field
            v-model="motDePasse"
            :type="passwordFieldType"
            label="Mot de Passe*"
            :rules="[rules.required]"
            required
          >
            <template v-slot:append>
              <v-btn icon @click="togglePasswordVisibility">
                <v-icon>{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
              </v-btn>
            </template>
          </v-text-field>

          <v-checkbox
            v-model="form.offersConsent"
            label="Je consens à recevoir des offres et des propositions basées sur mes préférences conformément à la Politique de confidentialité de Rich Ricasso."
          ></v-checkbox>

          <v-btn :disabled="!valid" class="signupBtn mt-2" type="submit" color="primary">
            S'INSCRIRE
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>


<script setup>
import { ref } from "vue";
import { createUtilisateur } from "@/services/utilisateur.service";
import {useRouter} from "vue-router";

const router = useRouter();
const courriel = ref("");
const prenom = ref("");
const nom = ref("");
const password = ref("");

const handleSubmit = async () => {
  
  const data = JSON.stringify({
    prenom: prenom.value,
    nom: nom.value,
    password: password.value,
    courriel: courriel.value,
  });

  try {
    const response = await createUtilisateur(data);

    if (response.success) {
      await router.push(`/login`);
      alert(response.message || "Utilisateur créé avec succès !");
    } else {
      alert(response.message || "Erreur lors de la création de l'utilisateur.");
    }
  } catch (error) {
    console.error("Erreur lors de la soumission :", error);
    alert("Une erreur est survenue lors de la soumission du formulaire.");
  }
};

</script>

<script>
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      form: {
        prenom: '',
        nom: '',
        courriel: '',
        motDePasse: '',
        offersConsent: false,
      },
      rules: {
        required: value => !!value || 'Champ obligatoire',
        email: value => /.+@.+\..+/.test(value) || 'Adresse e-mail invalide',
      },
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  },
};
</script>

<style scoped>
.create-sheet{
  margin-top: 200px;

}
.signup-section {
  margin-top: 20px;
}
.required {
  color: red;
  font-size: 0.9em;
  margin-bottom: 10px;
}
.signupBtn {
  margin-top: 20px;
}
</style>

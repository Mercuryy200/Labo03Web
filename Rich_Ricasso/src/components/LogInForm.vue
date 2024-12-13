<template>
  <v-container>
    <v-row>
      <!-- Login Form -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">Connexion</v-card-title>
          <v-card-text>
            <v-form ref="loginForm" @submit.prevent>
              <v-text-field
                label="Email"
                v-model="form.courriel"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="form.mot_de_passe"
                :type="showPassword ? 'text' : 'password'"
                required
              ></v-text-field>
              <v-checkbox
                label="Afficher mot de passe"
                v-model="showPassword"
              ></v-checkbox>
              <v-btn type="submit" class="mt-2" color="primary">Connexion</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Signup Section -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="headline">Créer un compte</v-card-title>
          <v-card-text>
            <p>Inscrivez-vous sur Ricasso.ca pour profiter de nombreux avantages :</p>
            <v-list dense>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-email-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  Découvrir les dernières actualités et offres exclusives
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-bag-shopping</v-icon></v-list-item-icon>
                <v-list-item-content>
                  Consulter l'historique de vos commandes et les adresses enregistrées
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-heart-outline</v-icon></v-list-item-icon>
                <v-list-item-content>Enregistrer des articles dans votre WishList</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon>mdi-credit-card-outline</v-icon></v-list-item-icon>
                <v-list-item-content>Paiement plus rapide</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn color="success" class="mt-2" to="/create">S'inscrire</v-btn>
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
        courriel: "",
        mot_de_passe: "",
      },
      showPassword: false,
      errorMessage: "",
    };
  }
};
</script>


<style scoped>
.login-sheet{
  margin-top: 200px;

}
</style>

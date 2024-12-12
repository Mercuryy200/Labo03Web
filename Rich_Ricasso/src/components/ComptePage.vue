<template>
  <v-container>
    <!-- User Header -->
    <v-row align="center" justify="space-between">
      <v-col>
        <h2>Bienvenue, {{ utilisateur.prenom }}</h2>
      </v-col>
      <v-col cols="auto">
        <v-btn color="error" @click="logout">Déconnexion</v-btn>
      </v-col>
    </v-row>

    <!-- User Account Section -->
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Compte</v-card-title>
          <v-card-text>
            <h4>Informations Personnelles</h4>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ utilisateur.prenom }} {{ utilisateur.nom }}</v-list-item-title>
                  <v-list-item-subtitle>{{ utilisateur.courriel }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn color="primary" @click="showInfoForm = true">Modifier</v-btn>
          </v-card-text>

          <v-card-text>
            <h4>Modifier le Mot de Passe</h4>
            <v-btn color="primary" @click="showPasswordForm = true">
              Modifier le mot de passe
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Update Info Form -->
      <v-col v-if="showInfoForm" cols="12" md="8">
        <v-card>
          <v-card-title>Modifier les Informations Personnelles</v-card-title>
          <v-card-text>
            <v-form ref="infoForm" @submit.prevent="updateInfo">
              <v-text-field
                label="Prénom"
                v-model="form.prenom"
                required
              ></v-text-field>
              <v-text-field
                label="Nom"
                v-model="form.nom"
                required
              ></v-text-field>
              <v-text-field
                label="Courriel"
                v-model="form.courriel"
                type="email"
                required
              ></v-text-field>
              <v-btn type="submit" color="success">Enregistrer</v-btn>
              <v-btn color="error" @click="showInfoForm = false">Annuler</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Update Password Form -->
      <v-col v-if="showPasswordForm" cols="12" md="8">
        <v-card>
          <v-card-title>Modifier le Mot de Passe</v-card-title>
          <v-card-text>
            <v-form ref="passwordForm" @submit.prevent="updatePassword">
              <v-text-field
                label="Mot de passe actuel"
                v-model="form.passActuel"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                label="Nouveau mot de passe"
                v-model="form.nouvPass"
                type="password"
                required
              ></v-text-field>
              <v-checkbox
                label="Afficher Mot de passe"
                v-model="showPassword"
                @change="togglePasswordVisibility"
              ></v-checkbox>
              <v-btn type="submit" color="success">Enregistrer</v-btn>
              <v-btn color="error" @click="showPasswordForm = false">Annuler</v-btn>
            </v-form>
            <p class="error-text" v-if="error">{{ error }}</p>
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
      utilisateur: {
        prenom: "John",
        nom: "Doe",
        courriel: "johndoe@example.com",
      },
      form: {
        prenom: "",
        nom: "",
        courriel: "",
        passActuel: "",
        nouvPass: "",
      },
      showInfoForm: false,
      showPasswordForm: false,
      showPassword: false,
      error: "",
    };
  },
  methods: {
    logout() {
      window.location.href = "logout.php";
    },
    updateInfo() {
      // Simulate API call to update user info
      console.log("Updating user info:", this.form);
      this.utilisateur = { ...this.utilisateur, ...this.form };
      this.showInfoForm = false;
      alert("Informations mises à jour !");
    },
    updatePassword() {
      if (this.form.passActuel === "currentPassword") {
        if (this.form.nouvPass !== "currentPassword") {
          console.log("Password updated to:", this.form.nouvPass);
          this.showPasswordForm = false;
          alert("Mot de passe mis à jour !");
        } else {
          this.error = "Votre nouveau mot de passe est identique à l'ancien !";
        }
      } else {
        this.error = "Le mot de passe actuel est incorrect !";
      }
    },
    togglePasswordVisibility() {
      const inputs = [
        document.querySelector('input[label="Mot de passe actuel"]'),
        document.querySelector('input[label="Nouveau mot de passe"]'),
      ];
      inputs.forEach((input) => {
        if (input) input.type = this.showPassword ? "text" : "password";
      });
    },
  },
};
</script>

<style scoped>
.error-text {
  color: red;
}
</style>

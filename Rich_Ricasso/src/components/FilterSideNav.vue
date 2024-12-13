<template>
  <v-container>
   
    <v-navigation-drawer v-model="drawer" temporary>
      <v-card>
        <v-card-title>FILTER</v-card-title>
        <v-card-text>
          <v-form>
            
            <v-checkbox-group v-model="filters.type" label="TYPE">
              <v-checkbox label="CHEMISE" value="chemise"></v-checkbox>
              <v-checkbox label="CRAVATE" value="cravate"></v-checkbox>
            </v-checkbox-group>

    
            <v-checkbox-group v-model="filters.taille" label="TAILLE">
              <v-checkbox label="O/S" value="O/S"></v-checkbox>
              <v-checkbox
                v-for="size in tailles"
                :key="size"
                :label="size"
                :value="size"
              ></v-checkbox>
            </v-checkbox-group>

           
            <v-checkbox-group v-model="filters.couleur" label="COULEUR">
              <v-row>
                <v-col
                  v-for="color in couleurs"
                  :key="color.name"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-checkbox :label="color.name" :value="color.value">
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: color.value }"
                        class="filter-color"
                      ></div>
                    </template>
                  </v-checkbox>
                </v-col>
              </v-row>
            </v-checkbox-group>

            <!-- Price Filters -->
            <v-text-field
              v-model="filters.prix_min"
              label="PRIX MIN"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="filters.prix_max"
              label="PRIX MAX"
              type="number"
            ></v-text-field>

            <v-btn block color="primary" @click="applyFilters">
              FILTRER
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
    <!-- Product Sort and Filter -->
    <v-row justify="space-between">
      <v-btn text @click="showAllProducts">Afficher Tous</v-btn>
      <v-btn text @click="filterByType('chemise')">Chemises</v-btn>
      <v-btn text @click="filterByType('cravate')">Cravates</v-btn>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </v-row>

    <!-- Products Grid -->
    <v-row>
      <v-col
        v-for="produit in produits"
        :key="produit.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img
            :src="'../images/' + produit.image"
            :alt="'Produit ' + produit.nom"
            height="200px"
          ></v-img>
          <v-card-title>{{ produit.nom }}</v-card-title>
          <v-card-subtitle>$ {{ produit.prix }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text :to="'produit.php?id=' + produit.id">
              Voir le produit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      tailles: Array.from({ length: 7 }, (_, i) => (44 + i * 2).toString()),
      couleurs: [
        { name: "Rose", value: "Rose" },
        { name: "Bleu", value: "Bleu" },
        { name: "Noir", value: "Noir" },
        { name: "Blanc", value: "Blanc" },
        { name: "Mauve", value: "Mauve" },
        { name: "Vert", value: "Vert" },
        { name: "Jaune", value: "Jaune" },
      ],
      filters: {
        type: [],
        taille: [],
        couleur: [],
        prix_min: 0,
        prix_max: 9999,
      },
      produits: [],
    };
  },
  methods: {
    applyFilters() {
      // Implement the API or PHP query logic to fetch filtered products
      console.log(this.filters);
    },
    showAllProducts() {
      // Reset filters and fetch all products
      this.filters = {
        type: [],
        taille: [],
        couleur: [],
        prix_min: 0,
        prix_max: 9999,
      };
      this.applyFilters();
    },
    filterByType(type) {
      this.filters.type = [type];
      this.applyFilters();
    },
  },
};
</script>

<style scoped>
.filter-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}
</style>

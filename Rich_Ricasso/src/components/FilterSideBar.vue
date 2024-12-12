<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Product Catalog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="openFilters">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="filterDrawer"
      app
      width="300"
      class="white"
    >
      <v-toolbar flat>
        <v-btn icon @click="filterDrawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Filters</v-toolbar-title>
      </v-toolbar>

      <v-form>
        <v-subheader>Type</v-subheader>
        <v-checkbox
          v-for="type in filterOptions.types"
          :key="type"
          v-model="filters.types"
          :label="type"
          :value="type"
        ></v-checkbox>

        <v-subheader>Size</v-subheader>
        <v-checkbox
          v-for="size in filterOptions.sizes"
          :key="size"
          v-model="filters.sizes"
          :label="size"
          :value="size"
        ></v-checkbox>

        <v-subheader>Color</v-subheader>
        <v-row>
          <v-col
            v-for="color in filterOptions.colors"
            :key="color.label"
            cols="6"
            class="d-flex align-center"
          >
            <v-checkbox
              v-model="filters.colors"
              :value="color.label"
              class="ma-0"
            ></v-checkbox>
            <div
              :style="{ backgroundColor: color.hex }"
              class="rounded-circle"
              style="width: 20px; height: 20px; border: 1px solid black;"
            ></div>
            <span class="ml-2">{{ color.label }}</span>
          </v-col>
        </v-row>

        <v-subheader>Price</v-subheader>
        <v-text-field
          label="Min Price"
          v-model.number="filters.priceMin"
          type="number"
        ></v-text-field>
        <v-text-field
          label="Max Price"
          v-model.number="filters.priceMax"
          type="number"
        ></v-text-field>

        <v-btn block color="primary" @click="applyFilters">Apply Filters</v-btn>
      </v-form>
    </v-navigation-drawer>

    <v-container>
      <v-row>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card>
            <v-img :src="product.image" :alt="product.name" height="200"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-text>
              <div>${{ product.price }}</div>
              <div>Type: {{ product.type }}</div>
              <div>Size: {{ product.size }}</div>
              <div>Color: {{ product.color }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      filterDrawer: false,
      filters: {
        types: [],
        sizes: [],
        colors: [],
        priceMin: 0,
        priceMax: 9999,
      },
      filterOptions: {
        types: ["Chemise", "Cravate"],
        sizes: ["O/S", 44, 46, 48, 50, 52, 54, 56],
        colors: [
          { label: "Rose", hex: "deeppink" },
          { label: "Bleu", hex: "deepskyblue" },
          { label: "Noir", hex: "black" },
          { label: "Blanc", hex: "white" },
          { label: "Mauve", hex: "blueviolet" },
          { label: "Vert", hex: "green" },
          { label: "Jaune", hex: "yellow" },
        ],
      },
      products: [
        {
          id: 1,
          name: "Chemise Rouge",
          type: "Chemise",
          size: "O/S",
          color: "Rose",
          price: 50,
          image: "../images/product1.jpg",
        },
        {
          id: 2,
          name: "Cravate Bleue",
          type: "Cravate",
          size: 44,
          color: "Bleu",
          price: 25,
          image: "../images/product2.jpg",
        },
        // Add more product objects here
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesType =
          this.filters.types.length === 0 ||
          this.filters.types.includes(product.type);
        const matchesSize =
          this.filters.sizes.length === 0 ||
          this.filters.sizes.includes(product.size);
        const matchesColor =
          this.filters.colors.length === 0 ||
          this.filters.colors.includes(product.color);
        const matchesPrice =
          product.price >= this.filters.priceMin &&
          product.price <= this.filters.priceMax;

        return matchesType && matchesSize && matchesColor && matchesPrice;
      });
    },
  },
  methods: {
    openFilters() {
      this.filterDrawer = true;
    },
    applyFilters() {
      this.filterDrawer = false;
    },
  },
};
</script>

<style>
.rounded-circle {
  border-radius: 50%;
}
</style>

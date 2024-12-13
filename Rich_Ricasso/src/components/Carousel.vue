<template>
 <v-container>

    
<v-carousel
 height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    aspect-ratio="1">

  <v-carousel-item>
    <div class="d-flex fill-height">
     <div class="w-50">
        <img 
        src="../assets/images/tshirt1.webp"
          alt="Product Image"
          class="w-100"
          aspect-ratio="1"
        />
      </div>
      <div class="w-50 d-flex justify-center align-center">
        <div class="text-h3 text-center">
          Une chemise d'édition limitée disponible en prévente pour les membres de RICASSO
        </div>
      </div>
    </div>
 </v-carousel-item>

  <v-carousel-item>
       <div class="d-flex fill-height">
  
      <div class="w-50 d-flex justify-center align-center">
        <div class="text-h3 text-center">
          Une cravatte d'édition limitée disponible en prévente pour les membres de RICASSO
        </div>
      </div>
         <div class="w-50">
        <img 
         src="../assets/images/tie1.webp"
          alt="Product Image"
          class="w-100"
        />
      </div>
    </div>
</v-carousel-item>

  <v-carousel-item>
      <div class="d-flex fill-height">
      <div class="w-50">
        <img
         src="../assets/images/tie4.webp"
          alt="Product Image"
          class="w-100"
        />
      </div>
      <div class="w-50 d-flex justify-center align-center">
        <div class="text-h3 text-center">
          Une cravatte d'édition limitée disponible en prévente pour les membres de RICASSO
        </div>
      </div>
    </div></v-carousel-item>

    <v-carousel-item>  
          <div class="d-flex fill-height">
      
     <div class="w-50 d-flex justify-center align-center">
        <div class="text-h3 text-center">
          Une chemise d'édition limitée disponible en prévente pour les membres de RICASSO
        </div>
      </div>
      <div class="w-50">
        <img
         src="../assets/images/tshirt5.webp"
          alt="Product Image"
          class="w-100"
        />
      </div>
    </div></v-carousel-item>
  
</v-carousel>
</v-container>
</template>

<script setup >

import {onMounted, ref} from "vue";
import {fetchProduits} from "@/services/product.service";
const produits = ref([]);
onMounted(() => {
  fetchProduits().then((result) => {
    if (result.success) {
      produits.value = result.products;
    } else {
      console.error("Failed to fetch products:", result.error);
    }

  });
});


</script>

<template>
  <v-footer id="footer-color" class="left-0 bottom-0" border absolute>
    <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" >
    <Infolettre />


     <v-container>
      <div class="footerLinks">
        <div class="infoFooter">
            <h4>À PROPOS</h4>
            <router-link  class="links" to="https://maps.app.goo.gl/vE8FAw2T2c7abuw99" target="_blank">Trouver une boutique</router-link>
            <router-link class="links" to="/">À propos du créateur</router-link>
        </div>
        <div class="navFooter">
            <h4>NAVIGATION</h4>
            <router-link class="links" to="/">Accueil</router-link>
            <router-link class="links" to="/produits">Catalogue</router-link>      
            </div>
        <div class="icons">
            <h4>SUIVEZ-NOUS</h4>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-tiktok"></i>
        </div>
    </div>
    <hr>
    <p>© Ricasso 2022 - 2024 | VAT n. IT1099879158</p>
     </v-container>
    </v-sheet>

  </v-footer>
</template>

<script>
import Infolettre from "@/components/Infolettre.vue";

export default {
  components: {
    Infolettre,
  },
};
</script>

<style scoped>
.footerLinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.links{
  text-decoration: none;
  color:black;
}
.links:hover{
  color: gray;
}
.links:visited{
  color:black;
}
.infoFooter, .navFooter{
    display: flex;
    flex-direction: column;
}
</style>

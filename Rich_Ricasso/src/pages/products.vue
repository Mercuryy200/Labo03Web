<template>
    <Filtre/>
    <Produits />
 
</template>

<script>
import Produits from '@/components/Produits.vue';
import {defineComponent} from "vue";
import FilterSideNav from '@/components/FilterSideNav.vue';
import Filtre from '@/components/Filtre.vue';


export default defineComponent({
  components: {Filtre}
})

</script>

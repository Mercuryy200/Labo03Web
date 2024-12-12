<template>
        <header class="app-header">
        <div class="icon-left">
            <img src="@/assets/img/web/logov3.png" alt="logo">
        </div>
        <nav class="tabs">
            <button class="tab"><router-link class="router-link" to="/">Acceuil</router-link></button>
            <button class="tab"><router-link class="router-link" to="/products">Produits</router-link></button>
        </nav>
        <div class="icon-right">
            <router-link to="/login"><span class="material-icons">account_circle</span></router-link>
            <span class="material-icons">mail</span>
            <span class="material-icons">shopping_cart</span>
        </div>
      </header>

</template>


<script>
export default {
    name: "HeaderBar",
};
</script>

<style scoped>
/* Transparent header with purple tone */
.app-header {
    overflow: hidden;
    position: sticky;
    top: 0;
    align-items: center;
    display:flex;
    z-index: 1;
    background-color: white;
    justify-content: space-between;
}

img{
    width: 150px;
}
.router-link {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}

.router-link:hover{
    background-color: #ddd;
    color: black;
}
.router-link.active{
    background-color: #666;
    color: white;
}
span{
    color: black;
}
/* Left and Right Icons */
.icon-left,
.icon-right {
    font-size: 24px;
    color: #fff;
    /* White icons for contrast */
}

/* Tabs styling */
.tabs {
    display: flex;
    gap: 15px;
}

.tab {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    padding: 5px 10px;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}

.tab:hover {
    color: #ffccff;
    /* Lighter purple on hover */
    border-bottom: 2px double #fff;
}
</style>

<script setup>
</script>

<template>
    <div class="topnav">
        <a><router-link to="/" exact-active-class="active">Home</router-link></a>
        <a><router-link to="/about" exact-active-class="active">About Me</router-link></a>
        <a><router-link to="/projects" exact-active-class="active">Projects</router-link></a>
        <a><router-link to="/contact" exact-active-class="active">Contact</router-link></a>
        <a class="name">Alec Zhou</a>
    </div>
</template>>
<style scoped>
@import '../assets/base.css';

.topnav {
    background-color: var(--vt-c-black);
    overflow: hidden;
    position: fixed;
    width: 100%;
}

.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
/*.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #04AA6D;
    color: white;
}

.topnav a.name {
    float: right;
    color: #f2f2f2;
    font-size: 17px;
    white-space: nowrap;
}
</style>
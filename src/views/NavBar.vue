<script setup>
</script>

<template>
    <div class="topnav">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/about" exact-active-class="active">About Me</router-link>
        <router-link to="/projects" exact-active-class="active">Projects</router-link>
        <router-link to="/contact" exact-active-class="active">Contact</router-link>
        <div>Alec Zhou</div>
    </div>
</template>>
<style scoped>
@import '../assets/base.css';

.topnav {
    background-color: var(--vt-c-black);
    overflow: hidden;
    width: 100%;
}

.topnav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 8px 24px;
    text-decoration: none;
    font-size: 17px;
}
.topnav a.active {
    background-color: var(--vt-c-green-bright);
    color: white;
}
.topnav a:hover {
    background-color: var(--vt-c-white-mute);
    color: black;
  }
.topnav div {
    float: right;
    white-space: nowrap;
    color: #f2f2f2;
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 17px;
}
</style>
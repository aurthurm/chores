<template>
<!--Navbar not fixed-top -->
<nav class="mb-1 navbar navbar-expand-lg text-success">
  <div class="container">
    <router-link tag="a"  :to="{ name: 'home'}" class="navbar-brand text-success">CHORES</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
      aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">          
          <router-link tag="a" :to="{ name: 'dashboard'}" class="nav-link text-success">Dashboard</router-link>
        </li>
        <li class="nav-item">          
          <router-link tag="a" :to="{ name: 'chores'}" class="nav-link text-success">Chores</router-link>
        </li>
        <li class="nav-item">          
          <router-link tag="a" :to="{ name: 'handlers'}" class="nav-link text-success">Handlers</router-link>
        </li>
        <!-- <li class="nav-item">          
          <router-link tag="a" to="/learn" class="nav-link text-success">Learn</router-link>
        </li> -->
        <li class="nav-item">          
          <router-link tag="a" :to="{ name: 'about'}" class="nav-link text-success">About</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"></i> Profile </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
            <router-link tag="a" :to="{ name: 'profile'}" class="dropdown-item">My Account</router-link>
            <a class="dropdown-item" href="#">Log out</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!--/.Navbar -->
</template>

<script>
export default {
}
</script>

<style scoped>
/* .navbar {
    -webkit-box-shadow: 0 0 0;
    box-shadow: 0 0 0 ;
} */
  a.dropdown-item::hover {
    background-color: #00C851!important;
    color: #FFFFFF;
  }
</style>

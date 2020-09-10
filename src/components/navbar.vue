<template>
	<div><nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
            <a class="navbar-brand" href="#">Smoothies</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#" data-section=".contact-us">
                     <router-link to="">
                    <i class="fa fa-plus-circle" aria-hidden="true" data-toggle="modal" data-target="#myModal"></i>
                  </router-link>
                    </a>
                    <addsmoothie />
                </li>
              </ul>
            </div>
          </div>
          </nav></div>
</template>
<script>
import addsmoothie from './addsmoothie.vue'
export default {
  components:{
    addsmoothie
  }
}
</script>
<style scoped>
nav{
  background-color: #706d6d;
}
nav .navbar-brand{
  color: #f05f5d;
  font-weight: bold;
  font-size: 1.5rem;
}
nav .navbar-brand:hover{
  color: #f05f5d;
  font-weight: bold;
  font-size: 1.5rem;
}
.fa-plus-circle{
  color: #f05f5d;
  font-size: 3rem;
}
</style>
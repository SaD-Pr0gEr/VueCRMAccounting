<template>
  <router-view></router-view>
</template>

<style lang="css">
@import "~materialize-css/dist/css/materialize.min.css";
@import "@/assets/css/index.css";
.bg-dark {
  background: #282a36;
  -webkit-transition: background 1.2s ease;
}

.dark-bg-green-front {
  background: #383a59;
}

.dark-bg-green-front li a {
  color: rgb(80,250,123);
}

.orange, .lighten-1 {
  -webkit-transition: background 1.2s ease;
}

.bg-dark-material {
  background: #383a59;
  -webkit-transition: background 1.2s ease;
}

.dark-green {
  color: rgb(80,250,123);
}

.dark-green-bg {
  background: rgb(29, 143, 57);
}

.dark-pink {
  color: #ff79c6;
}

.dark-red-bg {
  background: #c45ed3cc;
}

.dark-red {
  color: #f55;
}

.dark-purple-white-bg {
  background: #bd93f9;
}

.white {
  color: white;
}

.card-content {
  color: white;
}
</style>

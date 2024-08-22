<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: '',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>

  <!--Avrò il mio Header che mi gestisce la navigazione--> 
<AppHeader/>

  <!--E avrò il mio router-view che mi fa apparire le cose--> 
  <!--Questo è il luogo dove quando tu, clicchi da qualche parte...-->
    <!--...cambi il contentuo che sta qui dentro--> 

  <!--Le pagine di Vue Router sono dei normali componenti Vue.--> 
  <!--Quello che cambia è solo il concetto che noi applichiamo a questi componenti.--> 
  <!--NON SCRIVERE NULLA DENTRO IL TAG ROUTER-VIEW CHE SI SPACCA TUTTO--> 
<router-view></router-view>

<AppFooter/>

</template>

<style lang="scss">
@use '../styles/partials/general.scss' as *;

</style>

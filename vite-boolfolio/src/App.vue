<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: '',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProjectCard
  }
}
</script>

<template>
<AppHeader/>
<AppMain/>
<ProjectCard/>
<AppFooter/>
</template>

<style lang="scss">
@use '../styles/partials/general.scss' as *;

</style>

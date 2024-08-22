<script>
import ProjectList from '../components/ProjectList.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        ProjectList
    }
}
</script>

<template>
    <div>
        <h1 class="text-center p-3">
        Projects
    </h1>
        <ProjectList/>
    </div>
</template>

<style lang="scss" scoped>
div{
    background-color: #c6dafc;
}
</style>
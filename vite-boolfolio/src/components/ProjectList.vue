<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';

export default {
    components:{
        ProjectCard
    },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    console.log(response);
                    this.projects = (response.data.result.data);
                    this.currentPage = response.data.result.currentPage;
                })
                .catch((error) => {
                    this.$router.push({name: '404'});
                    console.log(error);
                });
        },
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <RouterLink v-for="project in projects" :to="{name:'single-project', params: {id: project.id}}">
        <ProjectCard :name="project.name" :activity="project.activity" :description="project.description"/>
    </RouterLink>
</template>

<style lang="scss" scoped>

</style>
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
                    this.projects = response.data.result.data
                })
                .catch(function (error) {
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
        <ProjectCard v-for="project in projects" :name="project.name" :activity="project.activity" :description="project.description"/>
</template>

<style lang="scss" scoped>

</style>
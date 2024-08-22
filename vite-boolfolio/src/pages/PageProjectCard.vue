//* Per far si che cliccando sul singolo progetto, mi esca solo quel progetto, sto facendo un'altra chiamata API, al singolo project
<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            project: [],
        }
    },
    methods: {
        getProjects(id) {
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
                .then((response) => {
                    console.log(response);
                    this.project = response.data.result;
                })
                .catch((error) => {
                    this.$router.push({name: '404'});
                    console.log(error);
                });
        },
    },
    created() {
        this.getProjects(this.$route.params.id);
    },
    components: {
        ProjectCard
    }
}
</script>

<template>
    <div>
        <h1 class="text-center p-3">
        Projects
    </h1>
    <ProjectCard :name="project.name" :activity="project.activity" :description="project.description"/>
    </div>
</template>

<style lang="scss" scoped>
div{
    background-color: #c6dafc;
}
</style>
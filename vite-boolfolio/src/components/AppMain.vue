<script>
import axios from 'axios';

export default {
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
    <main>
        <h1 class="text-center p-3">
            Projects
        </h1>

        <ul v-for="project in projects">
            <h5>
                Name
            </h5>
            <li>
                {{ project.name }}
            </li>

            <h5>
                Activity
            </h5>
            <li>
                {{ project.activity }}
            </li>

            <h5>
                Description
            </h5>
            <li>
                {{ project.description }}
            </li>
        </ul>
    </main>

</template>

<style lang="scss" scoped></style>
<script>
export default {
    data() {
        return {

        }
    },
    props:{
        name:{
            typeof: String,
            required: true
        },
        activity:{
            typeof: String,
            required: true
        },
        description:{
            typeof: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="card m-3" style="width: 45rem;">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-subtitle mb-2 text-body-secondary"><strong>Activity</strong><br>{{ activity }}</p>
                <p class="card-text"><strong>Description</strong><br>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
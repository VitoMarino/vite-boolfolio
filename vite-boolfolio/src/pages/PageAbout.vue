<script>
    export default {
        data(){
            return{

            }
        },
        //* Questo è un metodo che mi permette di cambiare pagina quando voglio
        methods:{
            changePage(routeName){
                this.$router.push({name: routeName});
            }
        }
    }
</script>

<template>
    <h1 class="text-center p-3">
        About
    </h1>
</template>

<style lang="scss" scoped>
footer{
    background-color: rgb(0, 247, 255);
}
</style>
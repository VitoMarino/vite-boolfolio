<script>
export default {
    data() {
        return {
            navLinkNames :[
                {
                    label: 'Homepage',
                    name: 'home'
                },
                {
                    label: 'Projects',
                    name: 'project'
                },
                {
                    label: 'About',
                    name: 'about'
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <ul class="d-flex align-items-center">
                    <li class="navbar-brand">
                        VUE + LARAVEL
                    </li>

                    <li class="ms-3" v-for="navItem in navLinkNames">
                        <router-link :to="{name: navItem.name}" >
                            {{ navItem.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>
<template>
    <div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        step() {
            return this.$store.state.steps; 
        }
    },
}
</script>

<style scoped>

.container{
    margin-top: 3%;
}
</style>
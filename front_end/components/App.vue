<template>
    <div class="app">
        <app-profile></app-profile>
    </div>
</template>

<script>
    import app_profile from './app-profile.vue';

    export default {
        components: {
            'app-profile': app_profile
        }
    }
</script>
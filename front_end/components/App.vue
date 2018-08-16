<template>
    <div class="app">
        <app-portfolio></app-portfolio>
        <app-profile></app-profile>
    </div>
</template>

<script>
    import app_portfolio from './app-portfolio.vue';
    import app_profile from './app-profile.vue';

    export default {
        components: {
            'app-portfolio': app_portfolio,
            'app-profile': app_profile
        }
    }
</script>
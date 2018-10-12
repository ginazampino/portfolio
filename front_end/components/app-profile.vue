<template>
    <main>
        <div data-simplebar data-simplebar-auto-hide="false" class="app-container">
            <a href="#top" class="sticky-default">
                <div class="sticky-button">
                    <i class="fas fa-angle-up"></i>
                </div>
            </a>
            <a href="#top-mobile" class="sticky-mobile">
                <div class="sticky-button">
                    <i class="fas fa-angle-up"></i>
                </div>
            </a>
            <a name="top-mobile"></a>
            <app-portfolio></app-portfolio>
            <a name="top"></a>
            <article class="app-profile">
                <div class="app-profile-content">
                    <profile-summary></profile-summary>
                    <profile-toolbox></profile-toolbox>
                    <profile-projects></profile-projects>
                    <profile-commits></profile-commits>
                    <profile-experience></profile-experience>
                    <profile-education></profile-education>
                    <profile-skills></profile-skills>
                    <profile-availability></profile-availability>
                </div>
            </article>
        </div>
    </main>
</template>

<script>
    import app_portfolio from './app-portfolio.vue';
    import profile_summary from './profile-summary.vue';
    import profile_toolbox from './profile-toolbox.vue';
    import profile_projects from './profile-projects.vue';
    import profile_commits from './profile-commits.vue';
    import profile_experience from './profile-experience.vue';
    import profile_education from './profile-education.vue';
    import profile_skills from './profile-skills.vue';
    import profile_availability from './profile-availability.vue';

    export default {
        components: {
            'app-portfolio': app_portfolio,
            'profile-summary': profile_summary,
            'profile-toolbox': profile_toolbox,
            'profile-commits': profile_commits,
            'profile-projects': profile_projects,
            'profile-experience': profile_experience,
            'profile-education': profile_education,
            'profile-skills': profile_skills,
            'profile-availability': profile_availability
        }
    }
</script>
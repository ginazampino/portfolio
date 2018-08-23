<template>
    <!-- <div data-simplebar data-simplebar-auto-hide="false"> -->
        <div class="app-profile">
            <profile-summary></profile-summary>
            <profile-toolbox></profile-toolbox>
            <profile-projects></profile-projects>
            <profile-experience></profile-experience>
            <profile-education></profile-education>
            <profile-skills></profile-skills>
            <profile-availability></profile-availability>
        </div>
    <!-- </div> -->
</template>

<script>
    import profile_summary from './profile-summary.vue';
    import profile_toolbox from './profile-toolbox.vue';
    import profile_projects from './profile-projects.vue';
    import profile_experience from './profile-experience.vue';
    import profile_education from './profile-education.vue';
    import profile_skills from './profile-skills.vue';
    import profile_availability from './profile-availability.vue';

    export default {
        components: {
            'profile-summary': profile_summary,
            'profile-toolbox': profile_toolbox,
            'profile-projects': profile_projects,
            'profile-experience': profile_experience,
            'profile-education': profile_education,
            'profile-skills': profile_skills,
            'profile-availability': profile_availability
        }
    }
</script>
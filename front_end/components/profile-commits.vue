<template>
    <div class="profile-section">
        <h2>Recent Commits</h2>
        <ul class="vertical-line" v-if="commits">
            <li class="vertical-line-content" v-for="commit in commits" v-bind:key="commit.sha">
                <div class="bulleted content-header timeline-header">
                    <div class="content-title">
                        <a v-bind:href="'https://github.com/' + commit.repo.name" class="profile-a commit-repo" target="_blank">{{ commit.repo.name }}</a>
                    </div>
                    <div class="content-details">
                        {{ commit.date.format('MMM. DD, YYYY') }}
                    </div>
                </div>
                <div class="bulleted content-subheader timeline-subheader">
                    <div class="subheader-title commit-message">
                        {{ commit.message }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
    import axios from 'axios';

    const moment = require('moment');

    export default {
        data: function () {
            return {
                commits: null
            }
        },

        created() {
            axios.get('/api/github/commits')
                .then(res => {
                    res.data.forEach(function(commit) {
                        commit.date = moment(commit.date);
                    });
                    this.commits = res.data;
                });
        }
    };
</script>
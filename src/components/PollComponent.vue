<template>
  <div class="poll" style="margin-top:1rem">
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
        <h1 class="title select-none">{{ poll.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class PollComponent extends Vue {
  private data() {
    return {
      poll: {},
    };
  }

  private mounted() {
    // DEBUG: user: 'someUser', uid: '352cc779-eae6-44f7-ac68-bd6637252c2d'
    axios.create({headers: {"Content-Type": "application/json"}}).post('/server', {
      type: "GETPOLL",
      user: this.$route.params.user,
      uid: this.$route.params.id
    })
    .then( (response) => {
      this.$data.poll = response.data;
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
</script>

<style src='../css/style.css'>

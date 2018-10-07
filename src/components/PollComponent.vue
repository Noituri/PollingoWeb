<template>
  <div class="poll" style="margin-top:1rem">
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
        <h1 class="title select-none">{{ $route.params.id }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PollComponent extends Vue {
    private mounted() {
        fetch('http://localhost:8000/api/getpoll', {
            mode: 'cors',
            method: 'POST',
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify({
                user: 'someUser',
                uid: '352cc779-eae6-44f7-ac68-bd6637252c2d'
            }),
        }).then( (response) => response.json())
          .then( (data) => console.log(data))
          .catch( (err) => console.log(err));
    }
}
</script>

<style src='../css/style.css'>

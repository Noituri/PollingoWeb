<template>
  <div class="home">
    <HomeComponent v-bind:appName="title"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeComponent from '@/components/HomeComponent.vue'; // @ is an alias to /src
import Config from '@/config/config';

@Component({
  components: {
    HomeComponent,
  },
  data() {
    return {
      title: Config.AppName,
    };
  },
})
export default class Home extends Vue {}
</script>

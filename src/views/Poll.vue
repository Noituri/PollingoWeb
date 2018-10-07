<template>
  <div class="poll">
    <PollComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PollComponent from '@/components/PollComponent.vue'; // @ is an alias to /src
import Config from '@/config/config';

@Component({
  components: {
    PollComponent,
  },
})
export default class Poll extends Vue {}
</script>

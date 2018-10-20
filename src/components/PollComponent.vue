<template>
  <div class="poll" style="margin-top:1rem">
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
        <h1 class="select-none">{{ poll.title }}</h1>

        <div v-for="(question, index) in poll.questions" :key="question.question" class="q-Dialog" style="max-width: 20rem; min-width: 20rem;">
          <div class="Dialog-Content">
            <h6 style="margin-bottom:0.5rem">{{ question.question }}</h6>

            <div>
              <form v-if="question.type_poll == 'ONE_OPTION'">
                <div v-for="option in question.options" :key="option.option" class="options">
                  <label>
                    <input type="radio" v-bind:name="index" v-bind:value="option.option"> {{option.option}}
                  </label>
                </div>
              </form>

              <form v-else-if="question.type_poll == 'MORE_OPTIONS'">
                <div v-for="option in question.options" :key="option.option" class="options">
                  <label>  
                    <input type="checkbox" v-bind:name="index" v-bind:value="option.option"> {{option.option}}
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <button style="margin-top:1rem" class="select-none bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded-full">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  input[type="checkbox"],
  input[type="radio"] {
    margin-top: -1px;
    vertical-align: middle;
  }
</style>

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

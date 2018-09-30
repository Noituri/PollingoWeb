<template>
  <div class="loginDialog max-w-sm">
    <div class="loginDialog-Content">
      <h3>Register</h3>
      <form @submit.prevent="loginEmailPass">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="text" placeholder="Username">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="email" placeholder="Mail">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="password" placeholder="Password">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="password" placeholder="Repeat password">
        <button style="margin-top:1rem" class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded-full">
          Join
        </button>
        <p style="margin-top:1rem" class="termstext text-purple">By clicking 'Join' button you accept terms of this website</p>
      </form>
      <p @click="login" style="margin-top:1rem" class="select-none cursor-pointer subtext text-purple hover:text-purple-darker">Already have an account? Sign In!</p>
    </div>
  </div>    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RegisterComponent extends Vue {
  private registerEmailPass(): void {
    // Login with email and password backend
    // this.$emit('dismissLogin');
  }

  private login() {
      this.$emit('login');
  }
}
</script>
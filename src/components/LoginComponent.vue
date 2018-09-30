<template>
  <div class="loginDialog max-w-sm">
    <div class="loginDialog-Content">
      <h3>Sign In</h3>
      <form @submit.prevent="loginEmailPass">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="email" placeholder="Mail">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="password" placeholder="Password">
        <button style="margin-top:1rem" class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded-full">
          Sign In
        </button>
      </form>
      <button style="margin-top:1rem" @click="loginFacebook" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
        Sign In with Facebook
      </button>
      <button style="margin-top:1rem" @click="loginGoogle" class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded-full">
        Sign In with Google
      </button>

      <p @click="openRegisterDialog" style="margin-top:1rem" class="select-none cursor-pointer subtext text-purple hover:text-purple-darker">Don't have an account? Join us!</p>
    </div>
  </div>    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginComponent extends Vue {
  private loginEmailPass(): void {
    // Login with email and password backend
    this.$emit('dismissLogin');
  }

  private loginFacebook(): void {
    // Login with Facebook
    this.$emit('dismissLogin');
  }

  private loginGoogle(): void {
    // Login with Google
    this.$emit('dismissLogin');
  }

  private openRegisterDialog(): void {
    this.$emit('register');
  }
}
</script>
<template>
  <div class="Dialog max-w-sm">
    <div class="Dialog-Content">
      <h3>Register</h3>
      <form @submit.prevent="registerEmailPass">
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="text" placeholder="Username" v-validate="{ min:5, required:true, alpha_dash:true, max:15 }" name="Username">
        <transition name="alert-in">
          <p class="error" v-if="errors.has('Username')">{{errors.first('Username')}}</p>
        </transition>
        
        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="email" placeholder="Mail" v-validate="{ required: true, email: true }" name="Mail">
        <transition name="alert-in">
        <p class="error" v-if="errors.has('Mail')">{{errors.first('Mail')}}</p>        
        </transition>

        <input v-model="password" style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="password" placeholder="Password" v-validate="{ required: true, min: 6 }" name="Password">
        <transition name="alert-in">
        <p class="error" v-if="errors.has('Password')">{{errors.first('Password')}}</p>        
        </transition>

        <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="password" placeholder="Repeat password" v-validate="{ required: true, is: password }" name="Repeat password">
        <transition name="alert-in">
        <p class="error" v-if="errors.has('Repeat password')">{{errors.first('Repeat password')}}</p>        
        </transition>

        <button style="margin-top:1rem" class="select-none bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded-full">
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
  private data() {
    return {
      password: '',
    };
  }

  private registerEmailPass(): void {
    // Register with email and password backend
    this.$validator.validateAll().then( (result) => {
      if (result) {
        // valid
        console.log('valid');
      } else {
        // not valid
        console.log('not valid');
      }
    });
  }

  private login() {
      this.$emit('login');
  }
}
</script>
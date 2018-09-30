<template>
  <div class="home" style="margin-top:1rem">
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
      <h1 class="title select-none">{{ appName }}</h1>
        <transition name="slide-fade">
          <LoginComponent v-on:dismissLogin="dismissLogin" v-on:register="changeStateRegisterDialog" v-if="showLoginDialog"/>
          <RegisterComponent v-on:login="changeStateRegisterDialog" v-if="showRegisterDialog"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginComponent from './LoginComponent.vue';
import RegisterComponent from './RegisterComponent.vue';

@Component({
  components: {
    LoginComponent,
    RegisterComponent,
  },
})
export default class HomeComponent extends Vue {
  @Prop()
  private appName!: string;

  private data() {
    return {
      showLoginDialog: false,
      showRegisterDialog: false,
    };
  }

  private mounted() {
    this.$nextTick(async () => {
      await new Promise( (resolve) => setTimeout(resolve, 300));
      this.$data.showLoginDialog = true;
    });
  }

  private dismissLogin() {
    this.$data.showLoginDialog = false;
  }

  private async changeStateRegisterDialog() {
    if (this.$data.showLoginDialog) {
      this.$data.showLoginDialog = !this.$data.showLoginDialog;
      await new Promise( (resolve) => setTimeout(resolve, 700));
      this.$data.showRegisterDialog = !this.$data.showRegisterDialog;
    } else {
      this.$data.showRegisterDialog = !this.$data.showRegisterDialog;
      await new Promise( (resolve) => setTimeout(resolve, 700));
      this.$data.showLoginDialog = !this.$data.showLoginDialog;
    }
  }
}
</script>

<style src='../css/style.css'>

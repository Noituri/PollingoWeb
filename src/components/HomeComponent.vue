<template>
  <div class="home" style="margin-top:1rem">
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
      <h1 class="title">{{ appName }}</h1>
        <transition name="slide-fade">
          <div v-if="showLoginDialog" class="loginDialog">
            <div class="loginDialog-Content">
              <h3>Sign In</h3>
              <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="email" placeholder="mail">
              <input style="margin-top:1rem" class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="password" placeholder="password">
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {
  @Prop()
  private appName!: string;
  private data() {
    return {
      showLoginDialog: false
    };
  }

  private mounted() {
    this.$nextTick(async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      this.$data.showLoginDialog = true;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 4.5rem;
}

.loginDialog {
  padding-bottom: 10rem;
  z-index: 1;
  padding-top: 2rem;
  top: 25%;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 50%;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  color: #000;
  font-size: 1.5rem;
}

.loginDialog-Content {
  margin-left: 1rem;
  margin-right: 1rem;
  box-shadow: none;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(5rem);
  opacity: 0;
}
</style>

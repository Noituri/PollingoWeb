<template>
  <div class="home">
    <h1 class="title">{{ appName }}</h1>

    <transition name="slide-fade">
      <div v-if="showLoginDialog" class="loginDialog">
        <h3>Sign In</h3>
        <input class="input is-rounded loginDialog-Content" type="text" placeholder="Rounded input">
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeComponent extends Vue {
  @Prop() private appName!: string;
  private data() {
    return {
      showLoginDialog: false,
    };
  }

  private mounted() {
    this.$nextTick(async () => {
      await new Promise( (resolve) => setTimeout(resolve, 300) );
      this.$data.showLoginDialog = true;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loginDialog {
    /* display: none; */
    position: fixed;
    z-index: 1;
    padding-top: 10px;
    left: 25%;
    top: 25%;
    width: 50%;
    height: 50%;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    color: #000;
    font-size: 20px;
 }

.loginDialog-Content {
  margin-left: 2px;
  margin-right: 2px;
  box-shadow: none;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>

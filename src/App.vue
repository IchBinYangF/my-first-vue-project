<script setup>
import { ref, computed } from "vue";
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import TuForm from "./components/TuForm.vue";
import TuParent from "./components/TuParent.vue";
import AmToDo from "./components/AmToDo.vue";


const routes = {
  "/": TheWelcome,
  "/tuform": TuForm,
  "/tuparent": TuParent,
  "/amtodo": AmToDo,
};

const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <a href="#/amtodo">AmToDo</a>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <a href="#/">TheWelcome</a> | <a href="#/tuform">TuForm</a> |
    <a href="#/tuparent">TuParent</a>
    <component :is="currentView" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

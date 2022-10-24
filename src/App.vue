<script setup lang="ts">
import { defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";
const UnloggedFrame = defineAsyncComponent({
  loader: () =>
    import(
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      "@/components/Frames/Unlogged.vue"
    ),
});

const AuthUnloggedFrame = defineAsyncComponent({
  loader: () =>
    import(
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      "@/components/Frames/AuthUnlogged.vue"
    ),
});

const route = useRoute();
const authPages = ["login", "register", "forgot-password"];
const isAuthPage = computed(() => {
  if (route && route.name && typeof route.name === "string") {
    return authPages.includes(route.name);
  }

  return false;
});

const Frame = computed(() => {
  if (isAuthPage.value) return AuthUnloggedFrame;
  return UnloggedFrame;
});
</script>

<template>
  <div class="app class container">
    <component :is="Frame">
      <suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <Loader id="#framed-loader" />
        </template>
      </suspense>
    </component>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/montserrat.scss";

* {
  font-family: "Montserrat";
  box-sizing: border-box;
}

ul,
p,
ol {
  margin: 0;
  padding: 0;
}

body,
#app,
.app.class.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  align-content: flex-start;
  justify-content: center;
}
</style>

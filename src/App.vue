<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const UnloggedFrame = defineAsyncComponent({
  loader: () =>
    import(
      /* webpackMode: "lazy" */
      /* webpackPrefetch: true */
      "@/components/Frames/Unlogged.vue"
    ),
});
</script>

<template>
  <div class="app class container">
    <component :is="UnloggedFrame">
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

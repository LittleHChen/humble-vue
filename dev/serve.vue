<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { HumbleVueSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  HumbleVueSample,
  // }
});
</script>

<template>
  <div id="app">
    <humble-vue-sample />
  </div>
</template>

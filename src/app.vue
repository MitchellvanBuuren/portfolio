<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import browser from 'browser-detect';

export default {
  name: 'app',
  created: function () {
    const result = browser();
    if (result.name === 'ie') {
      this.$router.push('/browser/not-supported');
    }
  },
}
</script>
<style lang="scss">

.absolute-center {
  display: flex;
  flex-flow: column;
  min-height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.background {
  background: var(--v-background-base) !important;
}

</style>


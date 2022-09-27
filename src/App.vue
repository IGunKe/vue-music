<template>
  <div id="app">
    <Headers></Headers>
    <Contents></Contents>
    <Footers></Footers>
  </div>
</template>
<script>
import Headers from '@/components/Headers.vue';
import Contents from '@/components/Contents.vue';
import Footers from '@/components/Footers.vue';

export default {
    name: "App",
    components: {
        Headers,
        Contents,
        Footers
    },
    
}
</script>
<style lang="scss" scoped>
* {
    font-family: microsoft yahei;
}
#app {
    width: 1000px;
    margin: 0 auto;
    padding: 0;
    box-shadow: 0 0 10px 7px rgba(225,255,226);
}
</style>

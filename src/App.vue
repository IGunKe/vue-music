<template>
  <div id="app">
    <Headers></Headers>
    <Contents></Contents>
    <Footers></Footers>
  </div>
</template>
<script>
export default {
    name: "App",
    components: {
        Headers: () => import('@/components/Headers'),
        Contents: () => import('@/components/Contents.vue'),
        Footers: () => import('@/components/Footers.vue')
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

<template>
  <div id="contents" name="contents">
    <Lists></Lists>
    <Mains></Mains>
  </div>
</template>

<script>
export default {
    name: 'Contents',
    data() {
        return {
            app: '网易云音乐'
        }
    },
    components: {
        Lists: () => import('@/components/List.vue'),
        Mains: () => import('@/components/Mains.vue')
    }
}
</script>

<style lang="scss" scoped>
#contents {
    height: 570px;
    width: 100%;
}
</style>
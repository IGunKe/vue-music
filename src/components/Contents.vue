<template>
    <div id="contents" name="contents">
        <div class="left">
            <Lists :choosed="topName"></Lists>
        </div>
        <div class="right">
            
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contents',
    data() {
        return {
            app: ''
        };
    },
    components: {
        Lists: () => import('@/components/List.vue')
    },
    computed: {
        topName() {
            let path = this.$route.path;
            console.log(path);
            path = path.substring(1);
            path = path.substring(0, path.indexOf('/'));
            return path;
        }
    }
};
</script>

<style lang="scss" scoped>
#contents {
    height: 527px;
    width: 100%;
    .left {
        width: 20%;
        height: 100%;
        float: left;
    }

    .right {
        width: 80%;
        height: 100%;
        float: right;
    }
}
</style>

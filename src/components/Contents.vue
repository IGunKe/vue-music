<template>
    <div id="contents" name="contents">
        <div class="left">
            <Lists :choosed="topName"></Lists>
            <!-- <router-link to="/">hello</router-link> -->
        </div>
        <div class="right">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Recommend from './find/recommend.vue';
export default {
    name: 'Contents',
    data() {
        return {
            app: ''
        };
    },
    components: {
        Lists: () => import('@/components/List.vue'),
        Recommend
    },
    methods: {},
    computed: {
        topName() {
            let path = this.$route.path;
            
            // console.log(path);
            path = path.substring(1);
            // console.log(path.indexOf('/'));
            // console.log(path.indexOf('/'));
            if (path.indexOf('/') !== -1) {
                path = path.substring(0,path.indexOf('/'));
            } else {
                return path;
            }
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
        overflow: scroll;
    }
}
::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgb(245,245,247);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgb(225,225,226);
  background-color: rgb(225,225,226);
}
</style>

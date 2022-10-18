<template>
    <div id="navigation">
        <div class="navigation">
            <router-link to="/home/recommend">
                <dd :class="{ choosed: $route.name == 'recommend' }">
                    个性推荐
                </dd>
            </router-link>
            <router-link to="/home/song"
                ><dd :class="{ choosed: $route.name == 'song' }">
                    歌单
                </dd>
            </router-link>
            <router-link to="/home/station"
                ><dd :class="{ choosed: $route.name == 'station' }">
                    主播电台
                </dd></router-link
            >
            <router-link to="/home/rank"
                ><dd :class="{ choosed: $route.name == 'rank' }">
                    排行榜
                </dd></router-link
            >
            <router-link to="/home/singer"
                ><dd :class="{ choosed: $route.name == 'singer' }">
                    歌手
                </dd></router-link
            >
            <router-link to="/home/new"
                ><dd :class="{ choosed: $route.name == 'new' }">
                    最新音乐
                </dd></router-link
            >
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Nav'
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}
#mains {
    height: 100%;
    width: 80%;
    float: right;
    padding: 0 20px;

    overflow-y: scroll;
    .navigation {
        height: 40px;
        border-bottom: 1px solid rgba(225, 225, 226);
        dl {
            width: 100%;
            overflow: hidden;
            dd {
                height: 40px;
                display: inline-block;
                // float: left;
                width: 16.6%;
                text-align: center;
                line-height: 40px;
                font-size: 14px;
                &:hover {
                    color: rgba(198, 47, 47);
                    cursor: pointer;
                }
            }
            .choosed {
                border-bottom: 2px solid rgba(198, 47, 47);
                color: rgba(198, 47, 47);
            }
        }
    }
}
::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
}
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: rgba(245, 245, 247);
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(225, 225, 226);
    background-color: rgba(225, 225, 226);
}
</style>

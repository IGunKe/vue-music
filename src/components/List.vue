<template>
  <div id="list" name="list">
    <dl>
        <dt>推荐</dt>
        <router-link to="/find/recommend">
            <dd :class="{choosed: choosed == 'find'}">
            <span><img class="icon" src="@/assets/music.png" alt="">发现音乐</span>
        </dd>
        </router-link>
        <router-link to="/personal">
            <dd :class="{choosed: choosed == 'personal'}">
            <span><img class='icon' src="@/assets/fm.png" alt="">私人FM</span>
        </dd>
        </router-link>
        
        <dd>
            <span><img class='icon' src="@/assets/mv.png" alt="">MV</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/friend.png" alt="">朋友</span>
        </dd>
        <dt><span>我的音乐</span></dt>
        <dd>
            <span><img class='icon' src="@/assets/local_music.png" alt="">本地音乐</span>
        </dd>        
        <dd>
            <span><img class='icon' src="@/assets/download.png" alt="">下载管理</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/cloud.png" alt="">我的音乐云盘</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/singer.png" alt="">我的歌手</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/station.png" alt="">我的电台</span>
        </dd>
        <dt><span>创建的歌单</span></dt>
        <dd>
            <span><img class='icon' src="@/assets/heart.png" alt="">我喜欢的音乐</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">light</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">不错的歌曲</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">少校</span>
        </dd>
        <dt><span>收藏的歌单</span></dt>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">纯音乐</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">【节奏】美</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">loli控？听这个</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">萝莉幼女</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">耳机福利</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">30首东方神曲</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">二次元的钢琴曲</span>
        </dd>
        <dd>
            <span><img class='icon' src="@/assets/list.png" alt="">唯美纯音</span>
        </dd>
    </dl>
  </div>
</template>

<script>
export default {
    name: 'List',
    props: ['choosed'],
    data() {
        return {
            app: '网易云音乐'
        }
    },
    mounted() {
        console.log(this.$props.name);
    }
}
</script>

<style lang="scss" scoped>
#list {
    height: 100%;
    width: 100%;
    background-color: rgba(245,245,247);
    float: left;
    // 隐藏y轴方向的滚动条
    overflow-y: scroll;
    // overflow-x: hidden;
    dt,dd {
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        color: rgba(125, 125, 125);
        position: relative;
    }
    dd {
        // 缩进
        text-indent: 20px;
        opacity: 0.5;
        &:hover {
            opacity: 1.0;
            cursor: pointer;
        }
    }
    dt {
        text-indent: 10px;
        color: rgba(125, 125, 125);
    }
    .icon {
        width: 20px;
        height: 20px;
        vertical-align: top;
        margin-right: 10px;
        margin-top: 5px;
    }
    .choosed {
        background-color: rgba(230,231,234);
        opacity: 1;
        &:before {
            content: '';
            width: 5px;
            height: 30px;
            background-color: rgba(198,47,47);
            position: absolute;
            left: 0px;
            top: 0px;
        }
    }
}
///*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 7px;
    background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0);
    border-radius: 10px;
    background-color: rgba(245,245,247);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(225, 225,226);
    background-color: rgba(225,225,226);
}
</style>
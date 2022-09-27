<template>
    <dd class="item animated fadeIn">
        <p v-if="!down" class="more animated fadeInDown">{{ msg }}</p>
        <p v-if="!down" class="number animated fadeIn">
            <img src="@/assets/headset.png" />
            {{ number }}
        </p>
        <img v-bind:src="imgSrc" alt="" />
        <span>{{ introduce }}</span>
        <em v-if="!down" class="animated fadeIn"></em>
    </dd>
</template>

<script>
export default {
    name: 'Cover',
    data() {
        return {
            app: '网易云音乐'
        };
    },
    props: {
        msg: {
            default: 0
        },
        imgSrc: {
            require: true
        },
        introduce: {
            require: true
        },
        width: {
            require: true
        },
        down: {
            default: false
        },
        number: {
            default: 0
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
dd {
    display: inline-block;
    height: 180px;
    font-size: 12px;
    line-height: 1.4;
    position: relative;
    cursor: pointer;
    &.item > img {
        width: 100%;
        height: 140px;
        border: 1px solid rgba(225, 225, 226);
    }
    em {
        position: absolute;
        background-image: url('../assets/play.png');
        width: 25px;
        height: 25px;
        right: 5px;
        bottom: 45px;
        background-size: cover;
        border: 1px solid white;
        border-radius: 24px;
        opacity: 0.8;
        display: none;
    }
    &:hover em,
    &:hover p {
        display: inline-block;
    }
    .number {
        position: absolute;
        height: 20px;
        width: 100%;
        color: white;
        font-size: 11px;
        text-align: right;
        line-height: 20px;
        padding: 0 10px;
        background: linear-gradient(
            to left,
            rgba(100, 100, 100, 0.9),
            rgba(255, 255, 255, 0.1)
        );
        img {
            width: 15px;
            height: 15px;
            // 图片与文字对齐
            vertical-align: middle;
        }
    }
    .more {
        position: absolute;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px;
        height: 48px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: none;
    }
}
</style>

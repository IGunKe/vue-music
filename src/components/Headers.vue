<template>
  <div id="headers" name="headers">
    <dl>
        <dd class="logo">
            <img src="@/assets/logo2.jpg" alt="">
        </dd>
        <dd class="control">
            <div>
                <img src="@/assets/pre.png" alt="">
                <img src="@/assets/next.png" alt="">
            </div>
        </dd>
        <dd></dd>
        <dd class="person">
            <PersonMsg></PersonMsg>
        </dd>
        <dd></dd>
        <dd></dd>
    </dl>
  </div>
</template>

<script>
export default {
    name: 'Headers',
    data() {
        return {
            app: '网易云音乐'
        }
    },
    components: {
        PersonMsg: () => import('@/components/PersonMsg.vue')
    }
}
</script>

<style lang="scss" scoped>
#headers {
    background-color: rgba(198,47,47);
    height: 50px;
    width: 100%;
    .control {
        width: 65px;
        div {
            border: 2px solid rgba(168,40,40);
            border-radius: 2px;
            width: 50px;
            margin: 0 auto;
            img {
                height: 20px;
                width: 24px;
                cursor: pointer;
                &:first-child {
                    border-right: 2px solid rgba(168,40,40);
                }
            }
        }
    }
    .person {
        width: 400px;
        text-align: right;
    }
}
.logo {
    width: 190px;
}
dl dd {
    float: left;
    height: 50px;
    box-sizing: border-box;
    font-size: 0;
    position: relative;
    padding: 15px 0;
}
dl dd:first-child {
    padding: 0;
}

</style>
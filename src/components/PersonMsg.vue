<template>
    <div id="personmsg" class="person">
        <a href="javascript:;"
            ><img class="small" src="@/assets/head.jpg" alt=""
        /></a>
        <span @focus="display" @blur="display" tabindex="1">IPOKE</span>
        <em @focus="display" @blur="display"></em>
        <div v-show="show" name="downlist" id="downlist">
            <em></em>
            <dl class="content">
                <dt>
                    <img src="@/assets/head.jpg" alt="" class="headpic" />
                    <span>IPOKE</span>
                    <button>签到</button>
                    <div>
                        <span><em>3</em>动态</span>
                        <span><em>3</em>关注</span>
                        <span><em>0</em>粉丝</span>
                    </div>
                </dt>
                <dd>
                    <img src="@/assets/member.png" alt="" />
                    <span>会员中心</span>
                    <span class="intro">未订购</span>
                </dd>
                <dd>
                    <img src="@/assets/level.png" alt="" />
                    <span>等级</span>
                    <span class="intro">Lv.7</span>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PersonMsg',
    data() {
        return {
            app: '网易云音乐',
            show: false
        };
    },
    methods: {
        display() {
            console.log(this.show);
            this.show = !this.show;
            console.log(this.show);

        }
    }
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.person {
    display: inline-block;
    width: 270px;
    font-size: 13px;
    text-align: center;
    position: relative;
    // 头像
    .small {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        vertical-align: top;
    }
    // ID号
    > span {
        font-size: 13px;
        line-height: 25px;
        color: white;
        // 文本省略
        text-overflow: ellipsis;
        overflow: hidden;
        width: 75px;
        //控制文本换行
        white-space: nowrap;

        display: inline-block;
        outline: none;
        cursor: pointer;
    }
    // 下拉三角
    > em {
        display: inline-block;
        width: 0;
        height: 0;
        position: absolute;
        left: 200px;
        top: 10px;
        color: black;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 5px solid white;
        box-sizing: content-box;
        outline: none;
        cursor: pointer;
    }
    #downlist {
        width: 100%;
        position: relative;
        z-index: 100;
        top: -5px;
        > em {
            display: block;
            margin: 0 auto;
            width: 0px;
            border-bottom: 11px white solid;
            border-left: 10px transparent solid;
            border-right: 10px transparent solid;
        }
        .content {
            width: 100%;
            background-color: white;
            box-shadow: 0 2px 4px rgba(225,225,226);
            border-radius: 5px;
            dt {
                font-size: 15px;
                .headpic {
                    width: 40px;
                    height: 40px;
                    border-radius: 40px;
                    vertical-align: top;
                }
                >span {
                    line-height: 40px;
                    padding: 0 5px;
                    width: 120px;
                    overflow: hidden;
                }
                button {
                    font-size: 12px;
                    border: 1px solid rgba(236,237,238);
                    background-color: white;
                    text-align: right;
                    width: 60px;
                    padding: 4px 10px;
                    background-image: url('@/assets/sign.png');
                    background-repeat: no-repeat;
                    background-position: 5px 2px;
                    border-radius: 5px;
                }
                > div {
                    overflow: hidden;
                    text-align: center;
                    margin: 10px 0;
                    em {
                        display: block;
                        font-weight: bolder;
                        margin: 5px;
                    }
                    span {
                        width: 33.3%;
                        display: inline-block;
                    }
                    span:nth-child(2) {
                        border-left: 1px solid rgba(225,225,226);
                        border-right: 1px solid rgba(225,225,226);
                    }
                }
            }
            dd {
                font-size: 13px;
                color: black;
                padding: 8px 20px;
                height: 40px;
                text-align: left;
                line-height: 24px;
                position: relative;
                &:hover {
                    background-color: rgba(236,237,238);
                    cursor: pointer;
                }
                > img {
                    width: 20px;
                    height: 20px;
                    opacity: .5;
                    vertical-align: top;
                    margin-right: 10px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    background-image: url('@/assets/right.png');
                    top: 15px;
                    right: 15px;
                    width: 10px;
                    height: 10px;
                    background-size: cover;
                    opacity: .5;
                }
                .intro {
                    display: inline-block;
                    position: relative;
                    right: 10px;
                    color: rgba(136,136,136);
                }
            }
        }
    }
}
</style>

<template>
    <div id="mains" name="mains">
        <div class="slider">
            <Slider v-bind="setting"></Slider>
        </div>
        <div class="recomand">
            <h1>推荐歌单</h1>
            <dl>
                <dd>
                    <div class="daliy">
                        <h3>星期四</h3>
                        <h2>23</h2>
                    </div>
                    <span>每日歌曲推荐</span>
                </dd>
                <Cover
                    number="77万"
                    msg="编辑推荐：人生之歌一开始便不休止。一首·····"
                    width="17%"
                    :img-src="publicPath + 'img/1.jpg'"
                    introduce="最长的名字，最动人的歌，最好听的故事"
                ></Cover>
                <Cover
                    number="77万"
                    msg="编辑推荐：霜落熊升树，林空鹿饮溪"
                    width="17%"
                    :img-src="publicPath + 'img/2.jpg'"
                    introduce="[欧美]打开胸膛，心里有朵被偷的玫瑰"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【酷到没朋友】"
                    width="17%"
                    :img-src="publicPath + 'img/3.jpg'"
                    introduce="[私藏]稀有极品节奏Vol.1"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【耳机福利】左右"
                    width="17%"
                    :img-src="publicPath + 'img/4.jpg'"
                    introduce="日语教学，让你看动漫不用字幕"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【东方独奏】"
                    width="17%"
                    :img-src="publicPath + 'img/5.jpg'"
                    introduce="东方交响乐集"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【孤独、哀伤、忧郁】"
                    width="17%"
                    :img-src="publicPath + 'img/6.jpg'"
                    introduce="<Chill Emotion>让心，缓下来"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【Let's go!】"
                    width="17%"
                    :img-src="publicPath + 'img/7.jpg'"
                    introduce="迭迭香小酒馆*Tenderness夜色"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【Blue Tears Night】"
                    width="17%"
                    :img-src="publicPath + 'img/8.jpg'"
                    introduce="东方彩鸟邦乐*三味线与曲的幽雅"
                ></Cover>
                <Cover
                    number="77万"
                    msg="根据你收藏的歌单：【The promise】"
                    width="17%"
                    :img-src="publicPath + 'img/9.jpg'"
                    introduce="【科学煲耳机】（白噪音 粉红噪音 无损）"
                ></Cover>
            </dl>
        </div>
        <div class="proper">
            <h1>独家放送</h1>
            <dl>
                <Cover
                    down="true"
                    width="30%"
                    :img-src="publicPath + 'img/10.jpg'"
                    introduce="音乐专栏 这些超级音乐组合是如何制造混沌的？"
                ></Cover>
                <Cover
                    down="true"
                    width="30%"
                    :img-src="publicPath + 'img/11.jpg'"
                    introduce="音乐专栏 最暖心的十首父女之歌"
                ></Cover>
                <Cover
                    down="true"
                    width="30%"
                    :img-src= "publicPath + 'img/12.jpg'"
                    introduce="征文大赛 有没有一首歌让你想起ta"
                ></Cover>
            </dl>
        </div>
    </div>
</template>

<script>
import Slider from 'vue-image-scroll';
import Nav from '@/components/find/nav';

export default {
    name: 'Mains',
    data() {
        return {
            app: '网易云音乐',
            publicPath: process.env.BASE_URL,
            setting: {
                styleObject: {
                    width: '750',
                    height: '300'
                },
                //imgSrc: ['img/1-1.jpg','img/1-2.jpg', 'img/1-3.jpg', 'img/1-4.jpg', 'img/1-5.jpg'],
                interval: 4000,
                image: [
                    {
                        src: 'img/1-1.jpg',
                        tagName: '',
                        tagStyle: {
                            backgroundColor: 'blue'
                        }
                    },
                    {
                        src: 'img/1-2.jpg',
                        tagName: '',
                        tagStyle: {
                            backgroundColor: 'blue'
                        }
                    },
                    {
                        src: 'img/1-3.jpg',
                        tagName: '',
                        tagStyle: {
                            backgroundColor: 'blue'
                        }
                    },
                    {
                        src: 'img/1-4.jpg',
                        tagName: '',
                        tagStyle: {
                            backgroundColor: 'blue'
                        }
                    },
                    {
                        src: 'img/1-5.jpg',
                        tagName: '',
                        tagStyle: {
                            backgroundColor: 'blue'
                        }
                    }
                ]
            }
        };
    },
    components: {
        Cover: () => import('@/components/find/cover'),
        Slider,
        Nav
    },
    // computed: {
    //     topName() {
    //         let path = this.$route.path;
    //         // console.log('recommend: ', path);
    //         path = path.substring(1);
    //         path = path.substring(path.indexOf('/'));
    //         path = path.substring(1);
    //         // console.log(path.substring(1));
    //         return path;
    //     }
    // }
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
#mains {
    height: 100%;
    width: 100%;
    float: right;
    padding: 0 20px;

    // overflow-y: scroll;
    .navigation {
        height: 40px;
    }
    .slider {
        // height: 250px;
        // width: 100%;
        // text-align: center;
        // line-height: 250px;
        margin-top: 20px;
    }
    .recomand {
        width: 100%;
        height: 450px;
        dl {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: flex-start;
            align-content: space-around;
            height: 380px;
            dd {
                display: inline-block;
                width: 17%;
                height: 170px;
                font-size: 12px;
                line-height: 2;
                cursor: pointer;
                .daliy {
                    width: 100%;
                    height: 140px;
                    border: 1px solid rgba(225, 225, 226);
                    text-align: center;
                    color: rgba(102, 102, 102);
                    h2 {
                        height: 80px;
                        line-height: 80px;
                        font-size: 80px;
                        color: rgba(198, 47, 47);
                    }
                    h3 {
                        height: 40px;
                        line-height: 40px;
                        font-size: 15px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
    .recomand > h1,
    .proper > h1 {
        line-height: 40px;
        font-size: 20px;
        font-weight: 400;
        border-bottom: 1px solid rgba(225, 225, 226);
    }
    .proper {
        width: 100%;
        height: 200px;
        dl {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: flex-start;
            align-content: space-around;
            height: 180px;
        }
    }
}
</style>

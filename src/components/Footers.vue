<template>
    <div id="footers" name="footers">
        <div class="control">
            <img src="@/assets/music_pre.png" alt="" class="pre" />
            <img src="@/assets/music_play.png" alt="" class="play" />
            <img src="@/assets/music_next.png" alt="" class="next" />
        </div>
        <div class="progress">
            <span>0:00</span>
            <vueSlider
                ref="slider1"
                class="playprogress"
                v-bind="setting"
                v-model="progress"
                style="display: inline-block; padding: 15px 10px"
            ></vueSlider>
            <span>3:45</span>
            <img src="@/assets/volume.png" alt="" class="volume" />
            <vueSlider
                ref="slider2"
                class="volumeprogress"
                v-bind="setting2"
                v-model="volume"
                style="display: inline-block; padding: 15px 10px"
            ></vueSlider>
        </div>
    </div>
</template>

<script>
import vueSlider from 'vue-slider-component';
// 进度条模块

export default {
    name: 'Footers',
    data() {
        return {
            progress: 1,
            volume: 2,
            setting: {
                width: 430,
                tooltip: false,
                dotSize: 13,
                processStyle: {
                    'background-color': 'rgba(232,60,60)'
                }
            },
            setting2: {
                width: 100,
                tooltip: false,
                dotSize: 10,
                processStyle: {
                    'background-color': 'rgba(232,60,60)'
                }
            }
        };
    },
    components: {
        vueSlider
    }
};
</script>

<style lang="scss" scoped>
* {
    // 限制css盒子，保证padding，border。content总宽不变
    box-sizing: border-box;
}

#footers {
    height: 50px;
    width: 100%;
    background-color: rgba(246, 246, 248);
    border: 1px solid rgba(225, 225, 226);

    .progress {
        display: inline-block;
        height: 100%;
        line-height: 50px;
        margin-left: 20px;
        span {
            position: relative;
            top: -12px;
        }
        .volume {
            width: 20px;
            height: 20px;
            opacity: 0.5;
            position: relative;
            top: -8px;
            left: 5px;
        }
    }
    .control {
        display: inline-block;
        .pre,
        .next {
            width: 30px;
            height: 30px;
            cursor: pointer;
            border-radius: 30px;
            // relative相对自身
            position: relative;
            top: -5px;
        }
        .play {
            width: 40px;
            height: 40px;
            border: 40px;
            cursor: pointer;
            margin: 0 15px;
        }
    }
}

</style>

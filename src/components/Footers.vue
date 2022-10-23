<template>
    <div id="footers" name="footers">
        <div class="control">
            <img
                src="@/assets/music_pre.png"
                alt=""
                class="pre"
                @click="getCurrent"
            />
            <img
                src="@/assets/music_play.png"
                alt=""
                class="play"
                @click="playMusic"
                :style="{ display: !play ? 'inline-block' : 'none' }"
            />
            <img
                src="@/assets/music_stop.png"
                alt=""
                class="play"
                @click="pauseMusic"
                :style="{ display: !play ? 'none' : 'inline-block' }"
            />
            <img src="@/assets/music_next.png" alt="" class="next" />
        </div>
        <div class="progress">
            <span>{{ current }}</span>
            <vueSlider
                ref="slider1"
                class="playprogress"
                v-bind="setting"
                v-model="progress"
                style="display: inline-block; padding: 15px 10px"
            ></vueSlider>
            <span>{{ end }}</span>
            <img src="@/assets/volume.png" alt="" class="volume" />
            <vueSlider
                ref="slider2"
                class="volumeprogress"
                v-bind="setting2"
                v-model="volume"
                style="display: inline-block; padding: 15px 10px"
            ></vueSlider>
            <audio
                :src="mp3Url"
                @canplay="audioInit"
                ref="player"
                @ended="ended"
                @error="errorLoad"
                @timeUpdate="setCurrent"
                style="display: none"
                controls="controls"
            ></audio>
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
            progress: 0,
            volume: 2,
            setting: {
                width: 430,
                tooltip: false,
                dotSize: 13,
                processStyle: {
                    'background-color': 'rgba(232,60,60)'
                },
                min: 0,
                max: 200,
                clickable: true,
                speed: 1.0
            },
            setting2: {
                width: 100,
                tooltip: 'hover',
                dotSize: 10,
                clickable: true,
                processStyle: {
                    'background-color': 'rgba(232,60,60)'
                },
                min: 0,
                max: 100
            },
            volume: 100,
            play: false,
            current: '00:00',
            end: '00:00',
            update: '',
            drag: false
        };
    },
    components: {
        vueSlider
    },
    methods: {
        getCurrent() {
            const currentTime = this.$refs.player.currentTime;
            this.end = this.timeToStr(currentTime);
            this.setting.max = Number.parseInt(currentTime, 10);
        },
        audioInit() {
            const duration = this.$refs.player.duration;
            this.end = this.timeToStr(duration);
            this.setting.max = Number.parseInt(duration, 10);
            this.playMusic();
        },
        playMusic() {
            if (!this.mp3Url) {
                return;
            }
            this.update = setInterval(this.getCurrent, 1000 / 60);
            this.$refs.player.play();
            this.play = true;
        },
        pauseMusic() {
            clearInterval(this.update);
            this.$refs.player.pause();
            this.play = false;
        },
        ended() {
            clearInterval(this.update);
            this.play = false;
            this.progress = 0;
        },
        timeToStr(time) {
            let min = Number.parseInt(time / 60, 10) + '';
            let seconds = Number.parseInt(time % 60, 10) + '';
            min = min.length === 1 ? '0' + min : min;
            seconds = seconds.length === 1 ? '0' + seconds : seconds;
            return min + ':' + seconds;
        },
        errorLoad() {
            alert('该歌曲网易云具有版权，无法播放');
            this.play = false;
        },
        setCurrent() {
            // this.current = this.timeToStr(newValue)
            // this.$refs.player.currentTime = this.current
        }
    },
    computed: {
        mp3Url() {
            return this.$store.state.songList[0];
        }
    },
    watch: {
        progress(newValue, oldValue) {
            if (this.drag || Math.abs(newValue - oldValue) > 1) {
                this.current = this.timeToStr(newValue);
                this.$refs.player.currentTime = newValue;
            }
        },
        volume(newValue) {
            this.$refs.player.volume = newValue / 100;
        },
        mp3Url() {
            this.playMusic();
        }
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

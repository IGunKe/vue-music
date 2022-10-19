<template>
    <ul class="slider" :style="styleObject">
        <li v-for="(item, index) in imgSrc" :key="index" :class="[move[index]]">
            <img :src="publicPath + item" alt="" :style="imgStyle" />
        </li>
        <li class="button">
            <em
                v-for="(item, index) in imgSrc"
                @click="target(index)"
                :key="index"
                :class="[move[index]]"
            ></em>
        </li>
        <li class="control">
            <em @click="prePic"></em>
            <em @click="nextPic"></em>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Slider',
    props: ['styleObject', 'imgSrc', 'interval'],
    data() {
        return {
            publicPath: process.env.BASE_URL,
            imgStyle: () => {},
            leftStyle: {},
            centerStyle: {},
            rightStyle: {},
            move: ['left', 'center', 'right'],
            move1: []
        };
    },
    mounted() {
        const width = parseInt(this.styleObject.width);
        const height = parseInt(this.styleObject.height);
        this.imgStyle.width = width * 0.7 + 'px';
        this.imgStyle.height = height * 0.8 + 'px';
        this.styleObject.width += 'px';
        this.styleObject.height += 'px';

        for (let i = 3; i < this.imgSrc.length; i++) {
            this.move[i] = 'wait';
        }
        this.move1 = this.move;
        setInterval(() => {
            let temp = this.move.pop();
            this.move.unshift(temp);
        }, 1500);
    },
    updated() {
        const slider = document.querySelector('.slider');
        const lis = slider.querySelectorAll('li');
        //点击图片跳转
        lis.forEach((li) => {
            //console.log(li.classList[0]);
            li.addEventListener('click', (e) => {
                if (e.path[1].className === 'left') {
                    let temp = this.move.shift();
                    this.move.push(temp);
                }
                if (e.path[1].className === 'right') {
                    let temp = this.move.pop();
                    this.move.unshift(temp);
                }
            });
        });

        //状态条特效
        // const ems = slider.querySelector('.button').querySelectorAll('em');
        // ems.forEach( em => {
        //     em.addEventListener('click', () => {

        //     })
        // })
    },
    methods: {
        prePic() {
            let temp = this.move.shift();
            this.move.push(temp);
        },
        nextPic() {
            let temp = this.move.pop();
            this.move.unshift(temp);
        },
        target(pos) {
            const num = this.imgSrc.length;
            // 排他思想
            for (let i = 0; i < num; i++) {
                this.move[i] = 'wait';
            }
            this.move[pos] = 'center';
            this.move[pos + 1 < num ? pos + 1 : 0] = 'right';
            this.move[pos - 1 === -1 ? num - 1 : pos - 1] = 'left';
            //this.move = this.move.concat();
        }
    }
};
</script>

<style lang="scss" scoped>
.slider {
    perspective: 1000px;
    position: relative;
    &:hover .control {
        display: inline-block;
    }
    li {
        list-style: none;
        position: absolute;
        top: 0;
        transition: transform 0.5s, scale 1s, left 1s, right 1s;

        &.left {
            left: -3%;
        }
        &.right {
            left: 33%;
        }
        &.center {
            left: 15%;
            z-index: 100;
        }
        &.wait {
            transform: scale(0, 0);
        }
    }
    .left,
    .right {
        transform: scale(0.9, 0.9);
        z-index: 10;
    }
    .button {
        text-align: center;
        width: 100%;
        height: 20px;
        top: calc(100% - 20px);
        em {
            display: inline-block;
            width: 20px;
            height: 5px;
            background-color: rgb(198, 47, 47);
            border-radius: 10px;
            margin: 0 2px;
            border: 1px solid rgb(215, 212, 212);
            cursor: pointer;
            &.center {
                background-color: #fff;
            }
        }
    }
    .control {
        text-align: center;
        width: 100%;
        height: 30px;
        top: calc(50% - 20px);
        display: none;
        em {
            position: absolute;
            display: block;
            width: 30px;
            height: 30px;
            background-size: cover;
            z-index: 100;
            cursor: pointer;
            &:first-child {
                left: 10px;
                background-image: url('@/assets/pre.png');
            }
            &:last-child {
                right: 0px;
                background-image: url('@/assets/next.png');
            }
        }
    }
}
</style>

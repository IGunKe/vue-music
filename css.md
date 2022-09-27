# css

### box-shadow
阴影的 X 轴偏移量、Y 轴偏移量、模糊半径、扩散半径和颜色。

### overflow-y：scroll
设置滑块
```css
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
```
# 文档流
- 浏览器页面从上往下，从左往右排列元素

//ul li 天生有外边距，与内边距

# 浮动布局
1. 实现文字环绕图片
2. 控制元素的水平排列
- 缺陷: 浮动元素会脱离文档流，导致父容器的高度塌陷，后续容器的元素会受到影响

# 清楚浮动（抵消掉浮动布局带来的负面影响）
1. 直接给父亲容器设置高度 -- 不推荐，屏幕缩小会导致高度塌陷
2. 在浮动元素的末尾增加一个空容器，设置claer:left  ,实在要用直接“clear:both” -- 不推荐
3. 利用父容器的伪元素清除浮动
父容器::after{
    display:block;
    clear:both;
}
4. 在被影响的元素中，做清除浮动。  设置 clear:both  --  不推荐
5. 将浮动元素的父容器设置为 BFC 容器   -- 最推荐


# BFC (block formatting context)（块级格式化上下文）
- 普通容器中存在  父容器的 margin-top 与 子容器的margin- top 重叠的问题


- BFC是一个拥有特殊渲染规则的隔离空间

- 如何创建一个BFC容器
1. overflow: hidden | auto | scroll | overlay
2. position:absolute 
3. float: left | right
4. display: inline-block | flex | grid

- BFC特殊的渲染规则
1. BFC 容器中的子元素会从上往下，从左往右排列
2. BFC 容器中的子元素margin-top不会超出父容器 （不会和父容器margin-top重合）
3. BFC在计算容器高度时，会将浮动子元素高度计算在内
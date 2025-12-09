# Flex 布局 (弹性布局)
## 基本概念
1.  Flex容器：采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。
2.  Flex项目： 它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目
3. 容器内部两条轴：容器默认存在两根轴：
    - 水平的主轴（main axis）。
    - 垂直的交叉轴（cross axis）。
## Flex容器上的属性
1. flex-direction：row | row-reverse | column | column-reverse;
- 该属性决定主轴的方向（即项目的排列方向）
- row 表示默认方向，水平从左往右排列
- row-reverse 水平方向，从右往左
- column 垂直方向，从上往下
- column-reverse 垂直方向，从下往上

2. flex-wrap：nowrap | wrap | wrap-reverse;
- 属性定义，如果一条轴线排不下，如何换行。
- nowrap：默认不换行，项目会在主轴上压缩，直到不能压缩为止。 ----不能在压缩，指的是项目设置了最小宽度
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

3. flex-flow

4. justify-content:flex-start | flex-end | center | space-between | space-around;
- 属性定义，主轴方向排列方式
- flex-start：默认属性 ，左对齐
- flex-end：右对齐
- center：居中对齐
- space-between：项目之间平均分布，项目与项目之间的间距相等
- space-around：项目之间平均分布，项目与项目之间的间距相等，项目与边框的间距是间距的一半
5. align-items：flex-start | flex-end | center | baseline | stretch;
- 属性定义交叉轴方向排列方式
- stretch：默认属性如果项目未设置高度或设为auto，将占满整个交叉轴长度
- flex-start：交叉轴起点对齐
- flex-end：交叉轴终点对齐
- center：交叉轴居中对齐
- baseline：项目的第一行文字的基线对齐

6. align-content：flex-start | flex-end | center | space-between | space-around | stretch;
- 当项目存在多个主要轴时轴有效果

# flex项目上的属性
1. order：<number>
- 确定项目在主轴上的优先级
2. flex-grow：<number>
- 该过程发生在是否换行判断结束后，如果换行后剩余空间，则容器也会放大
- 确定项目是否在主轴上放大，以及放大倍率
- 默认值为0，意为不放大
- 正值，项目放大倍率。如果其它项目不放大，则占据剩余所有空间，否则根据同主轴上所有 容器 正值比例来放大
2. flex-shrink<number>
- 该属性确定项目缩小倍率，当flex容器内部不换行时，但是子项目宽度溢出了，则根据flex-shrink的值按比例缩小，直到不能再小时.
- 默认值为1，所有容器缩小倍率相同。
- 缩小比例公式，（（项目宽度*flex-shrink）/（所有项目宽度*flex-shrink之和））* （子项目总宽度-父亲容器宽度） 
—————— 当子容器总宽度大于父容器总宽度时生效 
3. align-self
- 该属性用来确定项目（子容器）在交叉轴上的对齐方式，可以覆盖掉父亲flex容器的align-items的属性


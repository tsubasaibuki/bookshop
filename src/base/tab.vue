
<template>

<div class="footer">
<router-link to="/home">
<i class="iconfont icon-index"></i>
<span>首页</span>
</router-link>
<router-link to="/list">
<i class="iconfont icon-liebiaoyemian"></i>
<span>推荐杂志</span>
</router-link>
<router-link to="/collect">
<i class="iconfont icon-shoucang"></i>
<span>收藏</span>
</router-link>
<router-link to="/ehome">
<i class="iconfont icon-personal"></i>
<span>个人中心</span>
</router-link>
</div>
</template>
<!--
display:flex
flex-direction:row/column
justify-content:center 垂直居中
align-item:center 横向居中
flex:1 每份占1
-->
<style scoped lang="less">
.footer{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:3.125rem;
    display:flex;
    a{display:flex;
    color:yellowgreen;
      flex-direction:column;
      flex:1;
      align-items:center;
      justify-content:center;
    }
    a.router-link-active{
        color:red;
    }
}
</style>
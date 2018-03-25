<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/detail">详细页</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .nav ul, .nav li {
    list-style: none; /*去除圆点*/
  }

  .nav a {
    text-decoration: none;
  }

  /* 使用弹性布局
    display:flex;
    flex-flow: flex-direction || flex-wrap
    justify-content: flex-start | flex-end | center | space-between | space-around
    align-item: flex-start | flex-end | center | baseline | stretch
    align-content: flex-start | flex-end | center | space-between | space-around | stretch

    order: 排序
    flex: flex-grow | flex-shrink | flex-basis [0,1,auto]
    align-self:flex-start | flex-end | center | baseline | stretch | auto
    */
  .nav ul {
    margin: 0;
  }

  .nav ul:after {
    content: ".";
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
  }

  .nav li {
    float: left;
    background: #ddd;
    margin-right: 10px;
  }

  .nav li a {
    display: inline-block;
    width: 100px;
    padding: 5px 10px;
    text-align: center;
  }
  .nav li a.active{
    background: #3a33d1;
  }


</style>

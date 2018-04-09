<template>
<el-container class="e-container" >
  <el-header class="e-header">Header</el-header>
  <el-container>
    <el-aside class="e-menu" width="200px">Aside</el-aside>
    <el-main class="e-main"> </el-main>
  </el-container>
</el-container>
</template>

<script>



export default{
    data(){
        return {
            title:"使用例子442424",
            msg:"vvvbbbbbb11444331213123124444323123444444444444442444444bbbbbbqqqqqqqqqqqqqqqqqqqqqqqq"
        }
    }
}

</script>


<style>
html,body{
    padding: 0px;
    margin: 0px;
    height: 100%;
    font-family: 微软雅黑;
}
.e-container{
    height: 100%;
}
.e-header{
     background:linear-gradient(to right, #ed2739 , #f03d4d); /* 标准的语法 */
     color:white;
     height: 80px;
     line-height: 80px;
}
.e-menu{

}

</style>
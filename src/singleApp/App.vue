<template>
<el-container class="e-container" >
  
  <el-header height="60px" class="e-header">
      <el-row class="ap-title" type="flex"  align="middle">
           
           <img src="./assets/image/logo.png" />
           
           <el-row type="flex" style="color:gray;" align="bottom">
               移动审批
               <small>Approval.Admin</small>
            </el-row>       
      </el-row>
      
  </el-header>
  <el-container>
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo ap-menut"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>     

    <el-main class="e-main"> 
        this is Content
    </el-main>
  </el-container>
</el-container>


</template>

<script>



export default{
    data(){
        return {
            title:"使用例子442424",
            msg:""
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
    box-shadow: 1px -4px 20px 1px gray;
    z-index: 2;
}
.e-menu{

}
.ap-title{
    height: 100%;
}
.ap-title img{
    max-height: 38px;
}
.ap-menut{
    width: 200px;
}

</style>
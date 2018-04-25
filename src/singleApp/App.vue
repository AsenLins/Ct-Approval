<template>
<el-container class="e-container" >
  
  <el-header height="60px" class="e-header">

      <el-row class="ap-title" type="flex"  align="middle">
           
           <img src="./assets/image/logo.png" />
           
           <el-row type="flex" style="color:#a3a3a3; padding-left:5px; padding-top:20px;" align="bottom">
               移动审批
               <small>Approval.Admin</small>
            </el-row>       
      </el-row>
      
  </el-header>
  <el-container>
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo ap-menut"
      >
      <!--
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>这个</span>
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
      -->
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">审批表单</span>
      </el-menu-item>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">审批应用</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">审批记录</span>
      </el-menu-item>
    </el-menu>     

    <el-main class="e-main"> 
        <el-row type="flex" justify="center" style="height:100%;">

            <el-row class="ap-config-wrap" type="flex" justify="center" >
                <el-col :span="24">
                    <el-row type="flex" class="ap-config-title" justify="center" align="middle" >
                        加班申请设置
                    </el-row>


                    <el-tabs class="ap-config-tab" value="first" style="">
                        <el-tab-pane  label="模板设置" name="first">
                            <el-row class="ap-template-wrap" type="flex"  style="">
                            <el-col :span="12" class="ap-template-designPanel" style=" ">
                                <van-nav-bar class="ap-template-header" title="加班申请"/>
                                <van-row class="ap-template-content" style="">
                                    <van-cell-group>
                                        <van-field  placeholder="请输入用户名" />
                                    </van-cell-group> 
                                    <van-cell-group>
                                        <van-field  placeholder="请输入用户名" />
                                    </van-cell-group>  
                                    <van-cell-group>
                                        <van-field  placeholder="请输入用户名" />
                                        <van-field  placeholder="请输入用户名" />
                                    </van-cell-group> 
                                </van-row>
                                <van-button type="primary" style="box-shadow:1px -2px 15px -7px black;" block bottom-action >
                                    <van-icon name="add-o" style="top:3px; right:3px;" />添加控件
                                </van-button>
                            </el-col>
                            <el-col class="ap-template-config" :offset="1"  :span="11">
                                <el-form ref="form"  label-width="80px">
                                    <el-form-item label="活动名称:">
                                        <el-input style="width:260px;" size="small"></el-input>
                                    </el-form-item>
                                    <el-form-item label="模板图标:">
                                        <el-input style="width:260px;" size="small"></el-input>
                                    </el-form-item>
                                </el-form>  
                            </el-col>
                            </el-row>
                            <el-row  style="margin:15px 0px">
                                <div style="height:2px;background-color:#eeeeee; margin-top:15px; margin-bottom:15px; "></div>
                                <el-button size="small" type="primary" >保存</el-button>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="规则设置" name="second"></el-tab-pane>

                    </el-tabs>



                    
                </el-col>

            </el-row> 

 
        
        </el-row>

        <!--

        -->
    </el-main>
  </el-container>
</el-container>


</template>

<script>
export default {
  data() {
    return {
      title: "使用例子442424",
      msg: ""
    };
  }
};
</script>


<style>
html,
body {
  padding: 0px;
  margin: 0px;
  height: 100%;
  background-color: #eeeeee;
  font-family: 微软雅黑;
}
.e-container {
  height: 100%;
}
.e-header {
  box-shadow: 1px -4px 20px 1px gray;
  z-index: 2;
  background-color: white;
}
.ap-template-warp {
  background-color: #eeeeee;
}
.e-main {
}
.e-menu {
}
.ap-title {
  height: 100%;
}
.ap-title img {
  max-height: 38px;
}
.ap-menut {
  width: 200px;
}



.ap-config-wrap {
  box-shadow: 1px 1px 15px -7px gray;
  width: 860px;
  border-radius: 2px;
  background-color: white;
  height: 100%;
}
.ap-config-title {
  height: 46px;
  border-bottom: 1px solid #eeeeee;
  background-color: #f5f5f5;
}
.ap-config-tab {
  margin-left: 20px;
  margin-right: 20px;
}

/*表单模板样式*/
.ap-template-header {
  background-color: #ea1313;
  color: white;
}
.ap-template-warp {
  height: calc(100% - 46px);
  margin-top: 20px;
}
.ap-template-designPanel {
  width: 375px;
  height: 600px;
  border: 1px solid #e9eaeb;
}
.ap-template-content {
  background-color: #eeeeee;
  height:calc(100% - 108px);
}
.ap-template-content{
    padding-top: 12px;
}
.ap-template-content .van-cell-group{
  margin-bottom: 12px;
}
</style>
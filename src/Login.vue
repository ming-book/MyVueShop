<template>
<div class="login_container">
  <div class="login_box">
    <div class="avatar_box">
      <img src="./assets/logo.png" alt="">
    </div>
    <el-form ref="loginFormRef" :model="loginForm" class="login_form">
      <el-form-item>
        <el-input v-model="loginForm.username" prefix-icon="iconfont icon-tianjiayonghu">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-mima">
        </el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="resetloginForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data(){
      return {
            //登录表单的数据绑定
            loginForm:{
              username: 'admin',
              password: '123456'
            }

    }
},
  methods: {
    resetloginForm () {
      this.$refs.loginFormRef.resetFields();
    },
    login () {
      this.$refs.loginFormRef.validate(async vaild => {
        if (!vaild) return;
        // eslint-disable-next-line no-unused-vars
        const { data: result } = await this.$http.post('login', this.loginForm);
        if (result.meta.status !== 200) {
          return this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
          })
        }
        this.$message.success('登录成功');
        console.log(result);
        window.sessionStorage.setItem('token', result.data.token);
        this.$router.push('/home');
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-size: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.avatar_box{
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left:50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form{
  width: 100%;
  padding:0 20px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
</style>

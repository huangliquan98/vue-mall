<template>
	<div class="login-content">
		<van-form validate-first @failed="onFailed">
		  <!-- 通过 pattern 进行正则校验 -->
      <span>账号：(字母开头，允许5-16字节，允许字母数字下划线)</span>
		  <van-field
		    v-model="value1"
		    name="pattern"
		    placeholder="请输入您的账号"
		    :rules="[{ pattern, message: '请输入正确的内容' }]"
		  />
		  <!-- 通过 validator 进行函数校验 -->
      <span>手机号：</span>
		  <van-field
		    v-model="value2"
		    name="validator"
		    placeholder="请输入您的电话"
		    :rules="[{ validator, message: '号码错误' }]"
		  />
		  <!-- 通过 validator 进行异步函数校验 -->
      <span>密码：(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)</span>
		  <van-field
		    v-model="value3"
		    name="asyncValidator"
		    placeholder="请输入您的密码"
		    :rules="[{ validator: asyncValidator, message: '密码错误' }]"
		  />
		  <div style="margin: 16px;" @click="isTrue">
		    <van-button round block type="info" native-type="button">提交</van-button>
		  </div>
		</van-form>
	</div>
</template>

<script>
  import { Toast } from 'vant';
	export default {
		name:'loginContent',
    data() {
        return {
          value1: '',
          value2: '',
          value3: '',
          pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
          bar:document.getElementById('tab-bar'),
          flag1:false,
          flag2:false,
          flag3:false
        };
      },
      methods: {
        // 校验函数返回 true 表示校验通过，false 表示不通过
        validator(val) {
          this.flag2 = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val)
          return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val);
        },
        // 异步校验函数返回 Promise
        asyncValidator(val) {
          return new Promise((resolve) => {


            setTimeout(() => {
              Toast.clear();
              this.flag3 = /^[a-zA-Z]\w{5,17}$/.test(val)
              resolve(/^[a-zA-Z]\w{5,17}$/.test(val));
            }, 100);
          });
        },
        onFailed(errorInfo) {
          console.log('failed', errorInfo);
        },
        isTrue(){
          if(this.flag2&&this.flag3){
            Toast.loading('验证中...');
            setTimeout(()=>{
              alert("验证成功")
              this.$router.replace('/homeA')
              this.bar.style.display = "flex"
            },1000)
          }
        }
      }
	}
</script>

<style scoped="scoped">
  .login-content{
    margin-top: 20px;
  }
</style>

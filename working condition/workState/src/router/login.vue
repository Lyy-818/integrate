<template>
    <main>
      <p><input placeholder="手机号码" v-model="phoneNum" /></p>
      <p><input placeholder="密码" v-model="passWord" type="password" /></p>
      <button @click="loginFn">登陆</button>
    </main>
</template>
<script>
    export default {
        props: {},
        components: {},
        data() {
            return {
              phoneNum:"",
              passWord:""
            }
        },
        computed: {},
        methods: {
          loginFn(){
            console.log(this.phoneNum,this.passWord)
            this.$axios.post("http://localhost:3000/api/login",{phone:this.phoneNum,password:this.passWord}).then(({data})=>{
              if(data.code){
                localStorage.token = data.token;
                this.$router.push("/home");
              }
            }).catch((err)=>{
               console.log(err);
            })
          }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
  main{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      width:90%;
      height: 60px;
      border-bottom:1px solid #ccc;
      padding:10px;
      input{
        width:100%;
        height: 100%;
        padding: 10px;
        border:0;
        outline: none;
      }
    }
    button{
      width:300px;
      height: 50px;
      border-radius: 30px;
      background: #666666;
      color:#fff;
      outline: none;
      border:0;
      margin: 20px auto;

    }
  }
</style>

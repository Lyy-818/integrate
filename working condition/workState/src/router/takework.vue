<template>
    <div class="apply">
        <div class="head-box">
          <header>
            <span><i class="iconfont icon-fanhui"></i></span>
            <h4>办公室调休申请表</h4>
          </header>
            <dl class="portrait">
              <dt><img /></dt>
              <dd>
                <p><span>申请人姓名</span><b>刘宇</b></p>
                <p><span>直接主管</span><b>秦毅超</b></p>
              </dd>
              <dd> > </dd>
            </dl>
        </div>
          <main>
             <Portrait></Portrait>
<!--               @handleData="ReceiveDataFn"-->
          </main>
        <footer>
          <button>取消</button>
          <button class="submit" @click="submitFn(obj)">提交</button>
        </footer>
      </div>

</template>
<script>
  import {mapState,mapMutations} from "vuex"
  import Portrait from "../components/portrait"
  import request from "../api/api"
    export default {
        props: {

        },
        components: {
          Portrait
        },
        data() {
            return {

            }
        },
        computed: {
          ...mapState(["obj"])
        },
        methods: {
          ...mapMutations(["handleTakeworkData"]),
          // ReceiveDataFn(data){
          //   console.log(data);
          // },
          submitFn(obj){
            // console.log(obj)
            //


            requests("http://localhost:3000/api/apply/vacation",{annex:"",describes:"",startTime:"",endTime:"2",type:2})
            // this.$router.push("/home");
            console.log(obj)
          }
        },
        created() {

          // this.$axios.get("http://localhost:3000/api/apply/vacation").then(({data})=>{
          //
          // })
        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
  .apply{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
    overflow: hidden;
  }
.head-box{
  width:100%;
  height: 45%;
  background: seagreen;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    color: #fff;
    i{
      font-size: 20px;
    }
    h4{
      margin: 0 auto;
    }
  }
  .portrait{
    display: flex;
    justify-content: space-around;
    align-items: center;
    dt{
      background: #9a6e3a;
      width:80px;
      height: 80px;
      border-radius: 50%;
    }
    dd{
      color:#fff;
      p{
        span{
          font-size: 16px;
        }
        b{
          font-size: 14px;
          margin-left:20px;
        }
      }
    }
  }
}
main{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
  footer{
    width:100%;
    height:60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
      width:50%;
      height: 100%;
      border:0;
      outline: none;
      background: #fff;
    }
    main{
      width:100%;
      height: 100%;
    }
    .submit{
      background: seagreen;
      color:#fff;
    }
  }

</style>

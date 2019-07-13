<template>
    <div class="home">
      <header>
        <h4>加班/休假</h4>
        <p><i class="iconfont icon-daiban"></i><i class="iconfont icon-fangdajing"></i></p>
      </header>
<!--      状态处理-->
      <div class="states">
        <dl :class="{active:statusCount===index}"  v-for="(item,index) in stateList" :key="index" @click="changStateFn(index)">
          <dt><i :class="item.icon"></i></dt>
          <dd>{{item.title}}</dd>
        </dl>
      </div>
<!--      加班/休假-->
      <div class="change_state">
         <div class="top">
           <ul>
             <li :class="{active:typeCount===index}" v-for="(item,index) in typeList" :key="index" @click="typeListFn(index)">{{item.title}}</li>
           </ul>
           <p><i class="iconfont icon-iconplsd"></i><i class="iconfont icon-paixu-sheng"></i></p>
         </div>
        <div class="content">
<!--          每条list-->
          <List v-for="(item,index) in listArr" :key="index" :listItem="item"></List>
        </div>
<!--        发起任务按钮-->
        <div class="bottom">
          <button @click="workBtn"><i class="iconfont icon-jia"></i>发起任务</button>
          <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
            <router-link to="/overtime" tag="div"><p><i class="iconfont icon-diannao2"></i></p><span>加班</span></router-link>
            <router-link to="/takework" tag="div"><p><i class="iconfont icon-dujia"></i></p><span>休假</span></router-link>
          </mt-popup>
        </div>
      </div>
    </div>
</template>
<script>

  import request from "../api/api"
  import List from "../components/list"
  import PopUp from "../components/popup"

    export default {
        props: {},
        components: {List,PopUp},
        data() {
            return {
              stateList:[{icon:"iconfont icon-shijian",title:"待处理"},
                {icon:"iconfont icon-zhifeiji",title:"已发送"},
                {icon:"iconfont icon-wancheng",title:"已处理"}],
              typeList:[{title:"加班"},{title:"休假"}],
              statusCount:0,
              typeCount:0,
              type:"overtime",
              listArr:[],
              popupVisible:false
            }
        },
        computed: {},
        methods: {
          listArrFn(data){
               this.listArr = data;
          },
          changStateFn(i){
            this.statusCount = i;
            request("http://localhost:3000/api/task/list",{status:this.statusCount,type:this.type,create_at:0,pageSize:10,page:1},this.listArrFn);
          },
          typeListFn(i){
            this.typeCount = i;
            this.type = i === 0 ? "overtime":"vacation";
            request("http://localhost:3000/api/task/list",{status:this.statusCount,type:this.type,create_at:0,pageSize:10,page:1},this.listArrFn);
          },
          workBtn(){
            this.popupVisible = true;
          }
        },
        created() {

          request("http://localhost:3000/api/task/list",{status:this.statusCount,type:this.type,create_at:0,pageSize:90,page:1},this.listArrFn);
        },
        mounted() {
        }
    }
</script>
<style scoped lang="scss">
.home{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header{
    width:100%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    position: relative;
    h4{
      width:100%;
      position: absolute;
      text-align: center;
    }
    p{
      i{
        font-size: 18px;
        padding:0 10px;
      }
    }
  }
}
  .states{
    width:100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    dl{
      width:33%;
      /*height: 100%;*/
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      dt{
        margin-bottom:10px;
        i{
          font-size:28px;
        }
      }
      dd{
        font-size: 14px;
      }
    }
    .active{
      color:seagreen;
    }
  }
  .change_state{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .top{
      width:100%;
      height: 90px;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      ul{
        border:1px solid seagreen;
        border-radius: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li{
          padding: 6px 20px;
          color:#ffff;
          font-size: 12px;
          text-align: center;
        }
        .active{
          background: seagreen;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        .act{
          background: seagreen;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
      p{
        float:right;
        width:40px;
        background: slateblue;
      }
    }
  }
  .content{
    width:100%;
    height: 100%;
    overflow: auto;
    background: #eee;

  }
  .bottom{
    width:100%;
    height: 150px;
    background: #eee;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button{
      width:180px;
      height: 60px;
      border-radius: 30px;
      background: seagreen;
      color:#fff;
      outline: none;
      border:0;
      font-size:20px;
      margin-right: 20px;
      i{
        font-size: 20px;
        padding-right:10px;
      }
    }
  }
.mint-popup{
  width:100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 30px;
    p{
      width:50px;
      height: 50px;
      border-radius: 50%;
      line-height: 50px;
      background: tomato;
    }
    i{
      font-size:18px;
    }
    span{
      font-size:16px;
    }
  }
  div:last-child p{
    background: seagreen;
  }
}
</style>

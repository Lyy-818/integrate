<template>
  <div class="portrait-box">
<!--    申请信息-->
    <div class="user-message">
       <div class="title">
        <h4>申请信息</h4>
         <!--      休假日期-->
         <mt-field label="休假日期" placeholder="选择休假日期" v-model="list.VacationTime" @click.native="openPicker"></mt-field>
         <mt-datetime-picker  ref="picker" v-model="list.defaultDate" type="date" @confirm="handleConfirm"></mt-datetime-picker>
         <!--        休假类型-->
         <div class="select">
           <p>休假类型</p>
           <select value="list.VacationType">
             <option value="调休">默认</option>
             <option value="调休">调休</option>
           </select>
         </div>

        <!--        休假起始时间-->
         <mt-field label="休假起始时间" placeholder="选择起始时间" v-model="list.StartTime" @click.native="openPickerStart"></mt-field>
         <mt-datetime-picker ref="picker2" v-model="list.defaultStartTime" type="datetime" @confirm="handleConfirmStart"></mt-datetime-picker>
        <!--        休假截止日期-->
         <mt-field label="休假截止时间" placeholder="选择截止时间" v-model="list.EndTime" @click.native="openPickerEnd"></mt-field>
         <mt-datetime-picker ref="picker3" v-model="list.defaultEndTime" type="datetime" @confirm="handleConfirmEnd"></mt-datetime-picker>
        <!--    共计时数-->
         <p>共计时数</p>
      </div>
       <!--    休假事由-->
       <div class="textarea">
        <mt-field label="休假事由" placeholder="填写事由" type="textarea" rows="4" v-model="list.introduction"></mt-field>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState,mapMutations} from "vuex"
    export default {
        props: {},
        components: {

        },
      destroyed(){
          // console.log(this.$emit);
          // this.$emit("ReceiveDataFn",this.list);
      },
        data() {
            return {
              list:{
              //默认日期
              defaultDate:new Date(),
              //默认起始时间
              defaultStartTime:new Date().toLocaleString(),
              //默认截止时间
              defaultEndTime:new Date().toLocaleString(),
              //休假日期
              VacationTime:"",
              //休假类型
              VacationType:"调休",
              //起始时间
              StartTime:"",
              //  截止时间
              EndTime:"",
              //总时长
              SumTime:"",
              //  休假事由
              introduction:""
            }
            }
        },
        computed: {
            ...mapState(["obj"])
        },
        methods: {
          ...mapMutations(["handleTakeworkData"]),
          openPicker() {
            this.$refs.picker.open();
          },
          openPickerStart(){
            this.$refs.picker2.open();
          },
          openPickerEnd(){
            this.$refs.picker3.open();
          },
          handleConfirm(ref){
            this.list.VacationTime=ref.toLocaleDateString();
            this.$refs.picker.close();
          },
          handleConfirmStart(ref){
            this.list.StartTime=ref.toLocaleString();
            this.$refs.picker2.close();
          },
          handleConfirmEnd(ref){


            this.list.EndTime = ref.toLocaleString();

            if(EndTime<=StartTime){
              this.$refs.picker2.close();
              alert("截至时间不可以大于起始时间")
            }
            this.$refs.picker2.close();
            console.log(this.list);
          }
        },
        created() {
            this.handleTakeworkData(this.list)
        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
  main{
    overflow: hidden;
  }
  .portrait-box{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }
  .select{
    width:100%;
    display: flex;
    /*justify-content: space-between;*/
    select{
      border:0;
      outline: none;
    }
  }
  .user-message{
    width:100%;
    height: 110%;
    position: absolute;
    top:-10%;
    overflow: auto;
  }
.title{
  width:90%;
  background: #fff;
  margin: 0 auto;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  h4{
    padding:20px 10px;
    border-bottom:1px solid #ccc;
  }
  p{
    height:50px;
    font-size: 14px;
    margin: 0 10px;
    line-height: 50px;
  }
}
  .textarea{
    width:90%;
    height:100px;
    background: #fff;
    margin: 10px auto;
  }
</style>

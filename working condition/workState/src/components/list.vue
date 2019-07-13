<template>
    <ul>
      <li><p>{{listItem.applicationNumber}}</p><span><i class="iconfont icon-73dengdai"></i>待审批</span></li>
      <li><p><b>申请人</b><span>{{listItem.nickname}}</span></p><p><b>加班类型</b><span>{{listItem.type}}</span></p></li>
      <li><p><b>加班日期</b><span>{{listItem.create_at.substr(0,10)}}</span></p><p><b>加班时数</b><span>{{listItem.type}}</span></p></li>
    </ul>
</template>


<!--{-->
<!--"applicationNumber": "3gvn7916rwg0",-->
<!--"uid": "21ma84sk2tkw00021ma84sk2tkw000",-->
<!--"type": 3,-->
<!--"startTime": "2019-05-22T16:00:00.000Z",-->
<!--"endTime": "2019-05-23T16:00:00.000Z",-->
<!--"describes": "做不完了加班做",-->
<!--"annex": [],-->
<!--"status": 0,-->
<!--"auditor": null,-->
<!--"create_at": "2019-05-21T02:56:26.000Z",-->
<!--"list_type": "overtime",-->
<!--"nickname": "刘宇"-->
<!--}}-->

<script>
    export default {
        props:["listItem"],
        components: {},
        data() {
            return {

            }
        },
        computed: {
        },
        methods: {},
        created() {

        },
        mounted() {
        }
    }
</script>
<style scoped lang="scss">
  ul{
    width:100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    font-size:14px;
    p{
      color:#a2a2a2;
      width:41%;
       b{
         font-style: normal;
       }
    }
    span{
      padding-left:10px;
      color: #333;
      i{
        padding: 5px;
        border-radius: 50%;
        color: gold;
      }
    }
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
  }
</style>

<template>

</template>
<script>
    export default {
        props: ["popupVisible"],
        components: {},
        data() {
            return {
              // popupVisible:popupVisible
            }
        },
        computed: {},
        methods: {},
        created() {

        },
        mounted() {

        }
    }
</script>
<style scoped lang="scss">
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

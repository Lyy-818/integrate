import axios from "axios"

function request(url,param,Fn){


  axios.get(url,{params:param}).then((res)=>{

       // console.log(res.data);
       if(res.data.code === 1){
         Fn(res.data.data);
       };
     }).catch((err)=>{
       console.log(err);
    });
}
export default request;

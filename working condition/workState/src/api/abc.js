import axios from "axios"

function requests(url,body,Fn){


  axios.post(url,body).then((res)=>{

    // console.log(res.data);
    if(res.data.code === 1){
      Fn(res.data.data);
    };
  }).catch((err)=>{
    console.log(err);
  });
}
export default requests;

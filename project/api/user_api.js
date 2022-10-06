import axios from "axios";
import { BASE_URL } from "../config";
import ApiManager from "./ApiManager";

export default function user_login(){
    axios.post(`${BASE_URL}/login`)
    .then (function(res){
      console.log(res.data)  
    })
    .catch(function(e){
        console.log(e)
    })
    
}

import { browser } from "$app/environment";

export default class postApi {
   static readData(){
      if(!browser) return;
      let myData = localStorage.getItem("posts")|| [];
      return JSON.parse(myData)
   }
   static saveData(myData){
      if(!browser) return;
      return localStorage.setItem("posts", JSON.stringify(myData));
   }
}
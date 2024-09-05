const url="https://randomuser.me/api/"

const axios ={

    get:function(url){
        return new Promise((reslove,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.onload = ()=>reslove(xhr.responseText);
            xhr.onerror=()=>reject(xhr.statusText);
            xhr.send();
        })
    }
}
axios.get(url).then(data=>console.log(data)).catch(err=>console.log(err));
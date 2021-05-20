const express=require('express');
const ejs=require('ejs-mate')
const axios=require('axios')
const path=require('path')
const app=express();

const PORT=process.env.PORT || 7070;

app.set(express.static(path.join(__dirname,'views')));
app.set('view engine','ejs')
app.engine("ejs",ejs);

app.get('/',async (req,res)=>{
    const response=await axios.get('https://api.wazirx.com/api/v2/tickers/?limit=10');
    const data=Object.keys(response.data).map(i=>response.data[i]);
    res.render('home',{data:data})
})

app.listen(PORT,()=>{
    console.log(`server started onn ${PORT}`);
})
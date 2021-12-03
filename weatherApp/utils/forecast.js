import fetch from 'node-fetch'
const forecast= async(longitude, latitude,callback)=>{
const url='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=5fd2b18518fd014e54a46bc68d82682f'

const response = await fetch(url);
if(response.status===200){
    const data = await response.json(); 
   callback(undefined,'Today There will be'+ data.weather[0].description+', In '+data.name+'temperature most likely to be'+data.main.temp)
}
else
{
    callback('No data found', undefined)
}
}
export{forecast};
import {geocode} from './utils/geocode.js'
import {forecast} from './utils/forecast.js'

const address= process.argv[2];
//Philadelphia
if(!address){
    console.log('Please Provide Address')
}else{
    geocode(address,(error, data)=>{
        if( error){
            console.log('Error', error)
        }
       
    
        forecast(data.logitude,data.latitude,(error,forecastdata)=>{
    
            if( error){
                console.log(error)
            }
            console.log(address)
            console.log('data', forecastdata)
        })
    
    });
    
    
}


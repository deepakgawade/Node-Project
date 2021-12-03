import {geocode} from './utils/geocode.js'
import {forecast} from './utils/forecast.js'


geocode('Philadelphia',(error, data)=>{
    console.log('Error', error)
    console.log('data', data)
});

forecast(74.1044,15.4953,(error,data)=>{
    console.log('Error', error)
    console.log('data', data)
})
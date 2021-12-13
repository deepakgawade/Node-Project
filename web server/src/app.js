//const path = require('path');
import path from 'path'
import hbs from 'hbs'
import express from 'express'
import{ forecast } from './utils/forecast.js'
import { geocode } from './utils/geocode.js'
const __dirname = path.resolve();
//const express = require('express');
//const hbs=require('hbs');
//const { forecast } = require('./utils/forecast');
//const { geocode } = require('./utils/geocode');

console.log()

const app = express();
const publicDirPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname, '../templates/partial')

app.use(express.static(publicDirPath));

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

app.get('',(req,res)=>{
   return res.render('index',{
        name: 'Deepak Gawade',
        title:'Weather'
    })
})

app.get('/about',(req,res)=>{
    res.render('About',{title:'About',name:'Deepak Gawade'})
})
app.get('/help',(req,res)=>{
    res.render('Help',{title:'Help',name:'Deepak Gawade'})
})
//fourth route
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:'please provide address'});
    }
    geocode(req.query.address,(error, data)=>{
        if( error){
           return  res.send({error:'Cannot find location coordinates'});
        }
       
    
        forecast(data.logitude,data.latitude,(error,forecastdata)=>{
    
            if( error){
                return  res.send({error:'cannot find weather data'});
            }
           console.log(data.location)
           console.log(req.query.address)
            console.log('data', forecastdata)
            res.send({Addres:req.query.address,
                location:data.location,
                forecast:forecastdata});
        })
    
    });
    
   
})

app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send({Error:'Please provide search term'})

    }else{
        return res.send({
            result:'data found for search'
        })
    }
   
})
//for error
app.get('*',(req,res)=>{
    console.log('this is app server')
   return res.send('Opps! Please try again later');
   
});
app.listen(3000,()=>{
    console.log('Server is up and running...    ')
});
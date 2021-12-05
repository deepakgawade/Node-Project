import fetch from 'node-fetch'

const  geocode = async (address, callback)=>{
    const gecodingURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGVlcGFrZ2F3YWRlIiwiYSI6ImNrd3FiYnVqNzBrdTMyd3AzNnV2cGd5ZTkifQ.qq0BkDUf5VU7uNkalaW0aw'
    
    const response = await fetch(gecodingURL);

    if(response.status===200){
        const data = await response.json();
        if(data.features.length === 0){
            callback('could not find data, please try other data',undefined)
        }
        else
        {
            const latitude=  data.features[0].center[0]
            const logitude=  data.features[0].center[1]
            callback(undefined,{latitude,logitude})
        }
       

    }
    else
    {
        callback('No data found',undefined)
    }

}

export { geocode };
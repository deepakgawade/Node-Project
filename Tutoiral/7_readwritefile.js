const {readFile, writeFile} = require('fs');
console.log('satrt');
readFile('./content/subfolder/first.txt', 'utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;

        writeFile('./content/subfolder/firstCopy.txt', `this is a copy from first two files. Content:${first} :: ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with this task');
        })
    })
})
console.log('MOving to next task');
const express= require('express');
const storage= require('node-persist');

// const init=()=>{
//     storage.init()
//     .then(() => console.log("Storage Initialized"))
//     .then(()=>storage.clear())
//     .then(()=>console.log('storage cleared'))
//     .catch((err) => console.log("Storage not initialied"))
// }

const init1=async()=>{
    try {
        await storage.init();
        console.log("Storage Initialized");
        await storage.clear();
        console.log('Storage cleared');
    } catch (error) {
        console.log("Storage not initialied")
    }
}

const app= express();
app.use(express.json()); //reading data from postman or frontend

app.post("/addstudent",(req,res)=>{
    console.log(req.body);
    const {id,First_name,Last_name}=req.body
    storage.setItem(id+"",req.body);
    res.send("Post Triggered Data Saved")
})
app.get('/getstudents',async(req,res)=>{
    try {
        const resp= await storage.values();
        res.status(200).json({message:"data retrived",resp});
    } catch (error) {
        console.log(error);
    }
})
app.get('/getstudent/:id',async(req,res)=>{
    try {
        const id= req.params.id;
        const resp= await storage.getItem(id);
        res.status(200).json({message:"data retrived",resp});
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000,()=>{
    console.log("Server Started");
    init1();
})
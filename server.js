const express = require('express')
const cors = require('cors')
const connectDB = require('./config/mongo');
const jsondata = require('./csvjson.json');
const Data = require('./models/Data');



const app = express()
app.use(cors())
app.use(express.json({ extended :false}));

app.use('/api/search',require('./routes/api/search'));

const PORT = process.env.PORT || 5000;

connectDB();
// app.get('/', async (req,res) =>{
//     try {
//         await Data.create(jsondata, (err) =>{
//             if(err) throw err;
//         })
//         res.send("Hi from node data senr");
//     } catch (error) {
//         console.log("Error",error.message);
//     }
    
// })

app.listen(PORT ,()=>{
    console.log(`Server running at Port: ${PORT}`);
});

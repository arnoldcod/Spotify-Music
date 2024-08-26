import express from 'express';
import cors from 'cors';



//app config
const app = express();
const port =  8000;

//middleware
app.arguments(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Working!');
})



//run express server
app.listen(port, ( ) => {
    console.log(`Server is running on http://localhost:${port}`);   
})  
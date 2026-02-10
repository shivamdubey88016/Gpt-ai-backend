import 'dotenv/config';
import OpenAI from 'openai';
import mongoose from 'mongoose';
import router from './routes/char.js';

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;


const connectDb=async ()=>{

    try{
        await mongoose.connect(process.env.MONGO_KEY);
        console.log('Connected to MongoDB');
    }catch(err){    
        console.log('Error connecting to MongoDB:', err);       
    }
}

app.use('/api', router);   



app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDb();
}   );

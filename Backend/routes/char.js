import express from 'express';
const router = express.Router();
import models from '../models/Thread.js';
const { Thread } = models;   


router.get('/test', async(req,res)=>{
try{
const threads = await Thread.find();
res.json({ success: true, threads });
}catch(err){
    console.log(err);
    res.status(500).send('Error occurred while processing the request');
}
})

router.post('/test', async(req,res)=>{
try{

const thread=new Thread({
    threadId: '123456',
    title: 'Test Thread'
   
});
await thread.save();
res.json({ success: true, thread });

}catch(err){
    console.log(err);
    res.status(500).send('Error occurred while processing the request');
}
})
export default router;  
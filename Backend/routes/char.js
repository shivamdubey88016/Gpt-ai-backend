import express from 'express';
const router = express.Router();
import  Thread from '../models/Thread.js';
import getOpenAiResponse from '../utils/openai.js';  




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



//get all threads
router.get('/threads',async(req,res)=>{
try{
const threads = await Thread.find({}).sort({updatedAt: -1});
res.json(threads);


}catch(err){
    console.log(err);
    res.status(500).json('Error occurred while processing the request');
}







})

router.get('/threads/:threadId',async(req,res)=>{
try{
const {threadId} = req.params;  
const thread = await Thread.findOne({threadId});
if(!thread){
    return res.status(404).json({message:'Thread not found'});
}
res.json(thread);

}catch(err){
    console.log(err);
    res.status(500).json('Error occurred while processing the request');
}

})


router.delete('/threads/:threadId',async(req,res)=>{
try{
const {threadId} = req.params;
const thread = await Thread.findOneAndDelete({threadId});
if(!thread){
    return res.status(404).json({message:'Thread not found'});
}
res.json({message:'Thread deleted successfully'});

}catch(err){
    console.log(err);
    res.status(500).json('Error occurred while processing the request');
}

})
//post message to thread
router.post('/chats',async(req,res)=>{
try{
const {threadId,message} = req.body;
if(!threadId || !message){
    return res.status(400).json({message:'threadId and message are required'});

}
const thread = await Thread.findOne({threadId});
if(!thread){
    const threads=new Thread({
        threadId,
        title: message,
        messages:[{
    role:'user',
    content:message
}]
    });
    await threads.save();
    return res.json(threads);
}else{
    thread.messages.push({
        role:'user',
        content:message
    });
    
}

const aiResponse = await getOpenAiResponse(message);
thread.messages.push({
    role:'assistant',
    content:aiResponse
});
thread.updatedAt = Date.now();
await thread.save();
res.json({reply: aiResponse});   

}
catch(err){
    console.log(err);
    res.status(500).json('Error occurred while processing the request');    

}



})
export default router;  
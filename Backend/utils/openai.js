import OpenAI from 'openai';
import 'dotenv/config'

const getOpenAiResponse = async (message) => {

const options={
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body : JSON.stringify({
            model : "gpt-4o-mini",
            messages : [
                {
                    role : "user",
                   
                    content :message
                }
            ]
        })
    };
try{
    const response = await fetch('https://api.openai.com/v1/chat/completions',options);
    const data = await response.json();
    console.log(data);
    return data.choices[0].message.content;}
    catch(err){ 
        console.log(err);
        res.status(500).send('Error occurred while processing the request');
    }   


}

export default getOpenAiResponse;
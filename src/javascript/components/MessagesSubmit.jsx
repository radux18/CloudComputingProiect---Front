import React from 'react';
import { LANGUAGES_ARRAY } from '../utils/constants';
import axios from 'axios';

const handleMessageSend = async (e) => {
   // const button = e.target;

    const language = e.target.value;
    const senderName = document.getElementById('senderName').value;
    const receiverMail = document.getElementById('receiverMail').value;
    const messageContent = document.getElementById('messageContent').value;

    try {
        let response = await axios.post(
            `${process.env.REACT_APP_API_URL}/messages/foreign`,
            {
                language,
                senderName,
                receiverMail,
                messageContent,
                senderMail: 'radux188@gmail.com'
            });

            if(response.status === 200) {
                alert(`\nMessage sent: ${response.data.translationData.translatedText}`);
            }
    }
    catch (error) {
        alert('Something went wrong');
        console.log(error);
    }
}


function MessagesSubmit() {

   
    return (
      <div id = "MessagesSubmit">
          <div className='text-2xl font-bold mb-4'>Submit your message</div>
          <form className="w-full max-w-lg">
                {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                    {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> */}
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="John" />
                    {/* </div> */}
                    {/* <div className="w-full md:w-1/2 px-3"> */}
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverMail">
                            Receiver mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverMail" type="text" placeholder="jane@mail.com" />
                    
                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2'>
                        Your message
                    </label>
                    <textarea
                            rows={7}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'Say hello!'} />
                    {/* </div> */}
                {/* </div> */}
            </form>

            {LANGUAGES_ARRAY.map((language, index) => {
                return (
                    <button
                        key={index}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                        onClick={handleMessageSend}
                        value={language}>
                        {language.toLowerCase()}
                    </button>
                )
            })}

      </div>
    );
}

export default MessagesSubmit;
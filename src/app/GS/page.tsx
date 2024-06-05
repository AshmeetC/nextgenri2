'use client'
import { useState } from "react";
import { motion } from "framer-motion"
import Navbar from "@/components/ui/navbar";

export default function GS() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  //const [canBeSubmit, setCanBeSubmit] = useState(false);

  const data = {
    "name": username,
    "email": email,
    "message": message
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //if(username!="" && email!="" && message!=""){
    event.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbw8vR3dQt8kLrIdhGHkuUpJSy7vzx7ZAfuzEOQYnPrQuyOJPjn8egzDHEktksv1hUe-/exec';
    console.log("submit called");

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.log('err', err));
    }
    catch (err) {
      console.log(err);
    }
    setMessage(""); setEmail(""); setName("");
    //}
  }

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center pt-32 pb-16 bg-slate-500" id="contact">
      <Navbar />
      <div className='items-center justify-center text-center px-8'>
        <div className='flex flex-col justify-center items-center lg:w-auto'>
          <motion.div initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.7 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] ">
            <div>
              <h1 className="text-7xl pb-10 text-center">
                Apply Here
              </h1>
            </div>
          </motion.div>
        </div>

        <div className='flex flex-col justify-center items-center lg:w-auto'>
          <motion.div initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] ">
            <div>
              <h4 className="text-4xl pb-5 text-center">Contact Us</h4>
              <p className="text-xl pb-5 text-center">Reach out to us using the form or contact details given below</p>
              <p className="text-xl pb-5 text-center">Email: nextgenresearchinstitute@gmail.com</p>
              <p className="text-xl pb-10 text-center">Phone: 346-538-6296</p>

            </div>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.7 }} className="bg-slate-300 border-red-400 rounded-3xl w-4/5 md:w-2/5">
        <form className="justify-center my-6" onSubmit={handleSubmit} method="post">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="John Doe" required value={username} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="username@email.com" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
          </div>
          <div className="flex flex-wrap mb-6 justify-center">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea rows={10} className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Ask Questions or Apply Here! For applications include three things; 1. Field of Interest, 2. High School, 3. Link to Paper (Anyone Can View)" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <p className="text-gray-600 text-xs italic text-center">Let us know about any questions or concerns</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-transparent hover:text-black transition-all duration-300 text-black-700 font-semibold hover:bg-slate-200 py-2 px-4 border-2 rounded">Submit</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
// api link
// https://script.google.com/macros/s/AKfycbxSSWiOCtwyERXYb850PJKc7JsH0STLV0V6lRi-FMghuo-glhxoqM0YhbCL8JZXwju1rw/exec

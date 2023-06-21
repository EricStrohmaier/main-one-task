"use client"
import React, { useState } from 'react';
import InfoCard from './components/InfoCard';
import { supabase } from './supabase';

export default function LandingPage() {

  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async () => {

    if (!email) alert("Please enter an valid email")
    try {
      setLoading(true)
      
      let { data, error } = await supabase.auth.signInWithOtp({
        email : email,
      })


    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen'>
    <header className="flex justify-center ">
    
    <div className="m-20 w-2/3 rounded-3xl bg-cover bg-center pb-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/2OrUzHCRSI-V46Z1qJBh90usG6OkKwCbXN80FbrjkWoQz4VfoJjNAoQHLHPQRZWH7dI_m5I1gi48h6xMJ5pK6kkdXmUnXPe4VqwvEdo4QeWRjLV9Oew=w2400-rj')" }}>
       
        <div className="p-10 flex flex-col justify-center items-center">
          <div className="text-5xl  font-extrabold text-slate-800">
            <h1 className="m-3">Focusing on the right things </h1>
          </div>
          <div className="text-lg text-center font-medium text-slate-600 mx-3 mt-3">
          This is a method where you will reverse enigneer your goals.Help defining what to do on a day to day basis to focus with productive work towards your future.
          </div>
          <div className="mt-8 ">
          <div>
              <input onChange={(e)=>{setEmail(e.target.value)}} className='rounded-3xl my-3 mx-1' type="email" placeholder='your@email.com'/>
              <button onClick={login} className="bg-blue-400 hover:scale-105 transition-transform   my-2 mx-1 p-2 px-3 rounded-3xl">
                   <span className="text-lg text-slate-800">Get started</span>
              </button>
            </div>
          </div>
        </div>
        {/* link to next down page smooth scroll */}
        <div className="flex justify-center items-center mt-10 w-full text-slate-600 hover:text-slate-800">
          <span className='p-2 rounded-3xl border-2 border-gray-400 hover:border-gray-600'>Scroll down to learn more</span>
        </div>
          </div>
    </header>

   <div className='min-h-screen '> 
   <div className="flex justify-center ">
      <div className="m-5 w-2/3 rounded-3xl bg-cover bg-center pb-16" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/QTSOFxOaVde6gu-lNjTZ_VrOh7ihpSgRc-hErsBVjQ4Te9tIj4cW4BNWXj2fy1WbDnWYNS3v6pO628xBLC-A74K7ylf0ODNz-jbNhM1OUCgTUvZSN3zP=w960')" }}>
        <div className="p-10 flex flex-col justify-center items-center">
          <div className="text-5xl  font-bold text-slate-800">
            <h1 className="m-3">What am I talking about?</h1>
          </div>
          <div className="text-lg text-center font-medium text-slate-600 mx-3 mt-3">
          This is a method where you will reverse enigneer your goals.Help defining what to do on a day to day basis to focus with productive work towards your future.
          </div>
          <div className="mt-16  grid grid-cols-2 gap-5">
            <InfoCard title="first Card" description="small text" />
            <InfoCard title="second Card" description="small text"/>
            <InfoCard title="3 Card" description="small text"/>
            <InfoCard title="444 Card" description="small text"/>
            </div>
            </div>
      </div> 
    </div>
    </div>
   
    </div>
  );
}

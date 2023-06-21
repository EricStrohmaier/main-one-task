"use client";
import { useEffect, useState } from "react";


import { useRouter } from "next/navigation";

import { questionsObject } from "../data";
import { supabase } from "../supabase";


export default function Questionpage(){
   //set router to go back to dashboard/homepage
    const router = useRouter();  
    const { questions } = questionsObject;
   
    //Get Questions depennding on the Day
    const getActiveQuestion = () => {
        
        const today = new Date();
        // const dayOfWeek = today.getDay();
        const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const endOfYear = new Date(today.getFullYear()+1,0,0);

        if (today.getTime() === endOfYear.getTime()) {
           return 0;
        } else if (today.getDate() === endOfMonth.getDate()) {
            return 1;
        } else
        // const daysToEndOfWeek = (endOfWeek.getTime() - today.getTime()) / (1000 * 3600 * 24);
       
        if (today.getDay() === 1) {
          return 2; // Return Mondays
        } else
        return 3; // Default case
      }

    // const [activeQuestion, setActiveQuestion] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(getActiveQuestion());
        
    const { id,title, question} = questions[activeQuestion];

    const getAnswerInput = async (e) => {
        const answer = e.target.value;
        setInputAnswer(answer);
        setChecked(true);
      };
     
      const nextQuestion = async (e) => {
        const answer = e.target.value;
        try {
            const { data, error } = await supabase.from("questions").insert([
              {
                title: title,
                description: question,
                // title_id: id,
                answer: answer,
              },
            ]);
            if (error) throw error;
                    
          } catch (error) {
            console.error(error);
          }

        if (activeQuestion === questions.length - 1) {
          // Last question, show the dashboard
          setShowDashboard(true);
        } else {
          setActiveQuestion(activeQuestion + 1);
          setInputAnswer('');
          setChecked(false);
        }
      }; 
     

      useEffect(() => {
        if (showDashboard) {
         
          router.push("/");
        }
      }, [showDashboard,router]);
    
    return(
    <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 mt-4 sm:mt-3 lg:mt-3 items-center">
      <div className="ml-1">
        {/* <p>Questions for today: {questions[activeQuestion.length]}</p> */}
      </div>
      {!showDashboard ? (
        <div className="overflow-hidden m-5 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
        <div className="ml-1">
        <h3>{questions[activeQuestion].title}</h3>
        <h3>{questions[activeQuestion].question}</h3>
        </div>
        <input  
             value={inputAnswer}
            onChange={getAnswerInput}
            className="rounded-2xl p-1  indent-4"
            type="text"
            placeholder="Your Awnser" /> 
        
        {checked ? (
              <button  value={inputAnswer} onClick={nextQuestion}  className='p-1 m-2 rounded-lg bg-blue-200'>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button  value={inputAnswer} onClick={nextQuestion} disabled className='p-1 m-2 rounded-lg bg-blue-200 disabled'>
                {' '}
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
       </div> 
      ) :  null}
       

    </div>
    )
}
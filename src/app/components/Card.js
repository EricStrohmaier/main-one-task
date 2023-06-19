"use client"
import { PencilSquareIcon, DocumentCheckIcon, CheckIcon } from "@heroicons/react/24/outline";
import { supabase } from "../supabase";
import { useState } from "react";
import { questionsObject } from "../data";

export default function Card({ data }) {
  const [editing, setEditing] = useState(false);
  const [inputAnswer, setInputAnswer] = useState(data.answer);
  const [done, setDone] = useState(data.done);

  async function updateAnswer() {
    try {
      await supabase.from("questions").update({
        answer: inputAnswer,
      }).eq("id", data.id);

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  async function checkAnswer() {
    try {
        await supabase.from("questions").update({
          done: "true",
        }).eq("id", data.id);
  
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    setDone(true);
  }
  

  return (
    <div className="mt-5 mb-3 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300">
      <div className="lg:text-2xl sm:text-lg">
        <h2 className="lg:text-3xl sm:text-xl font-bold">My {data.title}</h2>
        <p className="mt-2 lg:text-xl sm:text-md">{data.description}</p>
        <div className="flex justify-center items-center mt-4 lg:text-3xl sm:text-xl">
          <span className="text-gray-800">Your answer: </span>
          {editing ? (
            <>
              <input
                value={inputAnswer}
                onChange={(e) => setInputAnswer(e.target.value)}
                className="rounded-2xl p-1 indent-4"
                type="text"
              />
              <button title="Done">
                <CheckIcon onClick={updateAnswer} className="w-8 h-8 hover:text-gray-700" />
              </button>
            </>
          ) : done ? (
            <span className="m-2 font-bold text-green-600">{inputAnswer}</span>
          ) : (
            <>
              <span className="m-2 font-bold text-blue-400">{data.answer}</span>
              <div className="ml-2 top-1 relative text-gray-500">
                <button title="EDIT ME">
                  <PencilSquareIcon onClick={() => setEditing(true)} className="w-8 h-8 hover:text-gray-700" />
                </button>
                <button title="FINISH ME">
                  <DocumentCheckIcon onClick={checkAnswer} className="w-8 h-8 hover:text-gray-700" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

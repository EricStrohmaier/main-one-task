"use client"
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { supabase } from "../supabase";


export default function AllQuestions({data}) {
  
  
  const [datas, setData] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        let { data, error } = await supabase.from("questions").select("*").order('created_at', { ascending: false });
        if (error) {
          throw new Error(error.message);
        }
        setData(data);
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  
      return (
        <main className="relative max-w-5xl mx-auto pt-12 sm:pt-12 lg:pt-12 text-center item-center">
          <div className="font-medium m-5  text-gray-800">
            {datas.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </main>
      )
}

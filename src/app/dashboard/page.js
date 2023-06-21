"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabase";
import CardDashboard from "../components/CardDashboard";


export default function Home() {
  const [latestEntries, setLatestEntries] = useState([]);
  const [showQuestions, setShowQuestions] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const titles = ['Weekly Goal', 'Monthly Goal', 'Daily Goal', 'Right Now'];
        const queries = titles.map((title) =>
          supabase
            .from('questions')
            .select('*')
            .eq('title', title)
            .order('created_at', { ascending: false })
            .limit(1)
            .single()
        );

        const results = await Promise.all(queries);

        const latestEntries = results.map((result, index) => ({
          title: titles[index],
          entry: result.data ? result.data : null,
        }));
      
        setLatestEntries(latestEntries);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  const router = useRouter();  
  useEffect(() => {
    if (showQuestions) {
     
      router.push("/questions");
    }
  }, [showQuestions,router]);



  
  return (
    <main className="relative max-w-5xl mx-auto pt-12 sm:pt-12 lg:pt-12 text-center item-center">
    <div className="font-medium m-5 text-gray-800">
      {latestEntries.map((entry, index) => (
        <CardDashboard key={index} entry={entry.entry}/>
        
      ))}
    </div>
  </main>
  );
}

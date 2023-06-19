"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { supabase } from "./supabase";
import CardDashboard from "./components/CardDashboard";



export default function Home() {
  const [latestEntries, setLatestEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const titles = ['Weekly Goal', 'Monthly Goal', 'Daily Goal', 'Right Now'];
        const queries = titles.map((title) =>
          supabase
            .from('questions')
            .select('*')
            .eq('title', title)
            .order('created_at', { ascending: true })
            .limit(1)
            .single()
        );

        const results = await Promise.all(queries);

        const latestEntries = results.map((result, index) => ({
          title: titles[index],
          entry: result.data ? result.data : null,
        }));
      
        setLatestEntries(latestEntries);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  console.log(latestEntries);

  if (isLoading) {
    return (
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-center item-center font-bold text-3xl">
        Loading...
      </div>
    );
  }

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

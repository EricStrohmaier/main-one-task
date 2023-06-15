"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { supabase } from "./supabase";


export default function Home() {

  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let { data, error } = await supabase.from("questions").select("*").order('created_at', { ascending: false });
        if (error) {
          throw new Error(error.message);
        }
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-center item-center font-bold text-3xl">Loading...</div>;
  }
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

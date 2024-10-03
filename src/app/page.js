"use client";
import DisplayForm from "@/components/DisplayForm";
import NewForm from "@/components/NewForm";
import Validator from "@/components/Validator";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const[showValidator, setValidator] = useState(false)
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={()=> setShow(!show)} className="bg-red-400 p-3">Create new Form</button>
      <button onClick={()=> setValidator(!showValidator)} className="bg-red-400 p-3">Open Validator</button>
      {
        show && <NewForm/>
      }

      {
        showValidator && <Validator/>
      }

      <DisplayForm/>
    </div>
  );
}

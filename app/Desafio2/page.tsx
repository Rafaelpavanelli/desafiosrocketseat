'use client'
import { useState } from "react";

export default function Desafio2(){
    const palavras=["HTML", "CSS", "JavaScript","React Native","E muito mais..."];
    const[count,setCount]=useState(0)
    
    setTimeout(function(){
        if(count < 4){
            setCount(count+1);
        }else{
            setCount(0);
        }
    },1000);
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <p className="flex gap-2">Aqui na rocketseat você aprende:<p className="text-violet-300">{palavras[count]}</p> </p>
        </div>
    )
}
'use client'
import { useState } from "react"
import Image from 'next/image'

export default function Desafio5(){
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4  bg-gray-900 p-12 rounded-lg">
            <Perfil image={'/perfil.webp'} />
            <Perfil image={'/perfil.webp'}/>
            <Perfil image={'/perfil.webp'}/>
            <Perfil image={'/perfil.webp'}/>
            </div>
        </div>
    )
}

function Perfil({image}:any){
    const[filter,setFilter]=useState(false)
    return(
            
            <Image
            width={100}
            height={200}
            src={image}
            
            onMouseEnter={()=>setFilter(true)}
            onMouseLeave={()=>setFilter(false)}
            alt="Imagem de perfil"
            className={`w-20 h-20 md:w-44 md:h-44 rounded-full transition-all ${!filter? 'grayscale':''}`}
            />
    )
}
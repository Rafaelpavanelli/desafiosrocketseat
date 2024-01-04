'use client'
import { FaStar } from "react-icons/fa";
import { useState } from "react";
export default function Desafio4() {
    const [ranking, setRanking]: any = useState(0);
    function handleRanking(star: number) {
        setRanking(star)
    }
    function handleExitRanking(){
        setRanking(0)
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center text-3xl transition-all">
            <button onMouseEnter={() => { handleRanking(1) }} onMouseLeave={handleExitRanking}><FaStar className={ranking >= 1 ? "text-yellow-300 transition-all" : 'transition-all'} /></button>
            <button onMouseEnter={() => { handleRanking(2) }} onMouseLeave={handleExitRanking}> <FaStar className={ranking >= 2 ? "text-yellow-300 transition-all" : 'transition-all'} /></button>
            <button onMouseEnter={() => { handleRanking(3) }} onMouseLeave={handleExitRanking}> <FaStar className={ranking >= 3 ? "text-yellow-300 transition-all" : 'transition-all'} /></button>
            <button onMouseEnter={() => { handleRanking(4) }} onMouseLeave={handleExitRanking}> <FaStar className={ranking >= 4 ? "text-yellow-300 transition-all" : 'transition-all'}/></button>
            <button onMouseEnter={() => { handleRanking(5) }} onMouseLeave={handleExitRanking}> <FaStar className={ranking >= 5 ? "text-yellow-300 transition-all" : 'transition-all'}/></button>

        </div>
    )
}
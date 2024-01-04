import Link from 'next/link';
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center text-center p-8 w-screen pt-20  md:h-screen'>
      <h1 className='text-3xl font-mono'>Desafios rocketseat</h1>
      <div className='w-full flex flex-col overflow-y-auto justify-center items-center mt-20 md:mt-0 gap-8 pt-20 md:pt-10 md:flex-row md:flex-wrap md:justify-center  md:w-3/4'>
        <Link href={'/Desafio1'} className='CardButton '>Desafio 1</Link>
        <Link href={'/Desafio2'} className='CardButton'>Desafio 2</Link>
        <Link href={'/Desafio3'} className='CardButton'>Desafio 3</Link>
        <Link href={'/Desafio4'} className='CardButton'>Desafio 4</Link>
        <Link href={'/Desafio5'} className='CardButton'>Desafio 5</Link>
      </div>
    </div>

  )
}

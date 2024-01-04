import { FaTwitter,FaFacebookSquare ,FaGithub,FaInstagramSquare } from "react-icons/fa";
export default function Desafio1(){
    return(
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-8 md:flex-row">
            <button className="SocialButtons">
            <p className="text"> <FaTwitter className={"text-blue-400"}/>Twitter</p>
            </button>
            <button className="SocialButtons">
                <p className="text"><FaFacebookSquare  className={"text-blue-700 "}/> Facebook</p>
            </button>
            <button className="SocialButtons">
            <p className="text"> <FaGithub className={"text-gray-700"}/>Github</p>
            </button>
            <button className="SocialButtons">
            <p className="text"><FaInstagramSquare className={" text-pink-600"}/>Instagram</p>
            </button>
        </div>
    )
}
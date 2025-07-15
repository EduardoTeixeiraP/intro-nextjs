
import Image from "next/image";

interface NavBarProps {
    links:{
        label:string,
        href:string
    }[]
}

export default function NavBar({links}:NavBarProps) {

    return (
        <nav className="bg-gradient-to-br from-blue-400 to-blue-700 h-25">
            <div className="px-4">
                <div className="flex justify-between h-25 items-center">
                {/*Logo*/}

                    <div className="flex items-center">
                        <Image
                            src="/nextjs-icon.svg"
                            alt="logo nextjs"
                            width={40}
                            height={40}
                        />
                        <span className="font-bold text-3xl ml-2 text-white">NextApp</span>
                    </div>
                {/*Links*/}
                    <div className="flex text-2xl    text-white space-x-6 mr-5">
                        {
                            links.map((link, indice)=>(
                                <a key={indice} href={link.href} className="text-lg font-medium hover:text-indigo-600">
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>

                </div>
            </div>
        </nav>

    )
}
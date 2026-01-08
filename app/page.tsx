import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center"style={{backgroundImage: "url('/main-bg.webp')"}}>
        <div className="pl-15 md:pl-30 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[800px]">
          <h1 className= "text-[50px] text-white font-semibold z-[20]">Justin Rakotoniaina <br></br>
            <span className="text-[30pt] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Data Scientist<br></br>Full Stack Web developer
            </span>
          </h1>
          <p className="text-gray-200 text-[14pt] font-semibold hidden md:block">I love working on real world problems, dig into data to understand them,and build digital products designed to solve them. 
            As a data scientist and web developer, I bridge the gap between insights and execution by transforming raw information into scalable, 
            and user-friendly solutions.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
              <Link href="/my-skills" className= "rounded-[40px] group border-2 border-white shadow-[0_0_10px_#fff] hover:bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-lg text-white max-w-[200px]">
                My Skills
              </Link>
              <Link href="/my-projects" className= "rounded-[40px] group border-2 border-white shadow-[0_0_10px_#fff] hover:bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-lg text-white max-w-[200px]">
                <div className="relative rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
                My projets
              </Link>
              <Link href="/contact-me" className= "rounded-[40px] group border-2 border-white shadow-[0_0_10px_#fff] hover:bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-lg text-white max-w-[200px]">
                <div className="relative rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
                Contact me
              </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-30 z-[20] right-25 flex-col md:hidden sm:hidden gap-5">
              <Link href="/my-skills" className= "rounded-[40px] group border-2 border-white shadow-[0_0_10px_#fff]  hover:bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-lg text-white max-w-[200px]">
                Learn more
              </Link>
              <Link href="/my-projects" className= "rounded-[40px] group border-2 border-white shadow-[0_0_10px_#fff] hover:bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-lg text-white max-w-[200px]">
              
                My projets
              </Link>
              <Link href="/contact-me" className= "rounded-[40px] group border-2 border-white shadow-[0_0_10px_#fff] hover:bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-lg text-white max-w-[200px]">
               
                Contact me
              </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[1]">
        <Image
          src="/horse.png"
          unoptimized
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
        src="/trees.webp"
        alt="trees"
        width={2000}
        height={2000}
        className="w-full h-full"
        />
      </div>
      <Image
          src="/stars.png"
          unoptimized
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0 z-[10]"
        />

    </main>
  );
}

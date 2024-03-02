import { useState } from "react"
import { Link } from "react-router-dom"


function App() {
  const [madal, setModal]=useState(false)
  return (
    <div>
    <div className='min-h-full p-8 md:p-[39px] lg:px-[165px]'>


    <div className="flex justify-between h-8 items-center">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z" fill="#33323D"/>
      </svg>
      </div>
      <div className={`flex flex-col   h-[13px] z-20 lg:hidden md:hidden ${madal ? 'justify-center  pr-8':'justify-between '}`} onClick={()=>setModal(!madal)}>
        <div  className={`h-[2px]  w-6 ${madal ? 'bg-[#fff] rotate-45 absolute':'bg-[#33323d]'}`}></div>
        <div  className={`h-[2px] w-6 ${madal ? 'hidden':'bg-[#33323d]'}`}></div>
        <div className={`h-[2px] w-6 ${madal ? 'bg-[#fff] rotate-[-45deg] absolute':'bg-[#33323d]'}`}></div>
      </div>
      <div className={`md:flex md:gap-[42px]  ${madal ? 'gap-[4px] right-8 top-5 pt-10 p-5  bg-black text-white flex flex-col absolute ':'hidden'}`}>
        
      <Link to={'/'}><h2 className="md:text-[#33323D] text-[12px] font-normal" onClick={()=>setModal(!madal)} >HOME</h2></Link>
      <Link to={'/portfolia'}><h2 className="md:text-[#33323D] text-[12px] font-normal" onClick={()=>setModal(!madal)}>PORTFOLIO</h2></Link>
      <Link to={'/contact'}> <h2 className="md:text-[#33323D] text-[12px] font-normal" onClick={()=>setModal(!madal)}>CONTACT ME</h2></Link>
      </div>
    </div>



    <div className="mt-10 ">
        <div className="w-full">
          <img src="./kampyuter.png" alt="" className="w-full" />
          <div className='md:w-[514px] md:mt-[-286px] md:pr-16 md:bg-white'>
          <div className='bg-white md:pt-14  md:relative'>
          <h2 className="text-[40px] Nova leading-[42px] font-bold mt-6">Hey, I  m Alex Spencer and I love building beautiful websites</h2>
          <div className="w-[200px] h-12 bg-[#203A4C] flex cursor-pointer mt-8">

            <div className=" w-12 h-12  flex items-center justify-center bg-[#000]">
                <img src="./ynsh.svg" alt="" />
            </div>
            <button className="text-[#fff] flex-1  text-[12px] font-normal">ABOUT ME</button>
          </div>
          </div>

          </div>
        </div>

        <div className="mt-[96px] md:flex md:gap-[69px]">
          <img src="./odam.png" alt="" className="w-full"/>
          <div className="mt-8 border-y-[1px] border-slate-400 border-solid">
          <h2 className="text-[40px] Nova leading-[42px] font-bold mt-6">About Me</h2>
          <p className="text-[#33323D] text-[16px] font-normal leading-[30px] sans mt-7">Im a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. Im based in London, UK, but Im happy working remotely and have experience in remote teams. When Im not coding, youll find me outdoors. I love being out in nature whether thats going for a walk, run or cycling. Id love you to check out my work.</p>
          <button className="text-[12px] font-normal text-[#33323D] border-[2px] border-[#33323d] border-solid mb-[51px]  px-8 cursor-pointer mt-6 py-4">GO TO PORTFOLIO</button>
          </div>
        </div>


    </div>

    <div className='text-center mt-[115px] mb-20 md:flex  md:items-center md:gap-8'>
    <div className="md:w-[350px]">
    <h2 className="text-[40px] mb-10 Nova leading-[42px] font-bold mt-6">Interested in doing a project together?</h2>
    </div>
    <div className="flex-1 h-[1px] bg-[#33323D] opacity-15"></div>
    <button className="text-[12px] font-normal text-[#33323D] border-[2px] border-[#33323d] border-solid  px-8 cursor-pointer py-4">CONTACT ME</button>
    </div>
    



    </div>


        <div className="w-full bg-black flex flex-col items-center p-14 md:flex-row md:py-6 lg:px-[165px] md:gap-11">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32" viewBox="0 0 61 32" fill="#fff">
              <path fillRule="evenodd" clipRule="evenodd" d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z" fill="#fff"/>
            </svg>
            <h2 className="text-[#fff] text-[12px] font-normal sans mt-10 md:mt-0">HOME</h2>
            <h2 className="text-[#fff] text-[12px] font-normal sans mt-8 md:mt-0">PORTFOLIO</h2>
            <h2 className="text-[#fff] text-[12px] font-normal sans mt-8 mb-10 md:mt-0 md:mb-0">CONTACT ME</h2>
            <div className="md:flex-1 block">

            <svg className="md:ml-auto" xmlns="http://www.w3.org/2000/svg" width="104" height="24" viewBox="0 0 104 24" fill="none">
              <path d="M12.5 0C5.59375 0 0 5.50948 0 12.3045C0 17.742 3.58125 22.3531 8.54688 23.9788C9.17188 24.0946 9.40104 23.7137 9.40104 23.3871C9.40104 23.095 9.39062 22.3207 9.38542 21.295C5.90833 22.0369 5.175 19.6442 5.175 19.6442C4.60625 18.2241 3.78437 17.8443 3.78437 17.8443C2.65208 17.0815 3.87188 17.0971 3.87188 17.0971C5.12708 17.1827 5.78646 18.3649 5.78646 18.3649C6.90104 20.2463 8.7125 19.7027 9.42708 19.3886C9.53958 18.5924 9.86146 18.0509 10.2188 17.743C7.44271 17.4352 4.525 16.3771 4.525 11.6628C4.525 10.3198 5.00937 9.22212 5.81146 8.36127C5.67083 8.05031 5.24896 6.7992 5.92083 5.10462C5.92083 5.10462 6.96771 4.77489 9.35833 6.36617C10.3583 6.09278 11.4208 5.95713 12.4833 5.95087C13.5458 5.95713 14.6083 6.09278 15.6083 6.36617C17.9833 4.77489 19.0302 5.10462 19.0302 5.10462C19.7021 6.7992 19.2802 8.05031 19.1552 8.36127C19.9521 9.22212 20.4365 10.3198 20.4365 11.6628C20.4365 16.3897 17.5146 17.43 14.7333 17.7326C15.1708 18.102 15.5771 18.8564 15.5771 20.0094C15.5771 21.656 15.5615 22.9791 15.5615 23.3788C15.5615 23.7012 15.7802 24.0862 16.4208 23.9631C21.4219 22.3478 25 17.7336 25 12.3045C25 5.50948 19.4031 0 12.5 0V0Z" fill="white"/>
              <path d="M64 4.55705C63.117 4.94905 62.168 5.21305 61.172 5.33205C62.189 4.72305 62.97 3.75805 63.337 2.60805C62.386 3.17205 61.332 3.58205 60.21 3.80305C59.313 2.84605 58.032 2.24805 56.616 2.24805C53.437 2.24805 51.101 5.21405 51.819 8.29305C47.728 8.08805 44.1 6.12805 41.671 3.14905C40.381 5.36205 41.002 8.25705 43.194 9.72305C42.388 9.69705 41.628 9.47605 40.965 9.10705C40.911 11.388 42.546 13.522 44.914 13.997C44.221 14.185 43.462 14.229 42.69 14.081C43.316 16.037 45.134 17.46 47.29 17.5C45.22 19.123 42.612 19.848 40 19.54C42.179 20.937 44.768 21.752 47.548 21.752C56.69 21.752 61.855 14.031 61.543 7.10605C62.505 6.41105 63.34 5.54405 64 4.55705Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M82.4 0H101.6C102.92 0 104 1.08 104 2.4V21.6C104 22.92 102.92 24 101.6 24H82.4C81.08 24 80 22.92 80 21.6V2.4C80 1.08 81.08 0 82.4 0ZM83.6 20.4H87.2V9.6H83.6V20.4ZM85.4 7.56C84.2 7.56 83.24 6.6 83.24 5.4C83.24 4.2 84.2 3.24 85.4 3.24C86.6 3.24 87.56 4.2 87.56 5.4C87.56 6.6 86.6 7.56 85.4 7.56ZM96.8 20.4H100.4V13.56C100.4 11.28 98.48 9.36 96.2 9.36C95.12 9.36 93.8 10.08 93.2 11.04V9.6H89.6V20.4H93.2V14.04C93.2 13.08 94.04 12.24 95 12.24C95.96 12.24 96.8 13.08 96.8 14.04V20.4Z" fill="white"/>
            </svg>
            </div>
      </div>



    </div>
  )
}

export default App
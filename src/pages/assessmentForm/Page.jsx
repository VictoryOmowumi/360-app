import React from 'react'
import logo from '../../assets/images/logo1.png'
import image1 from '../../assets/images/image1.png'
import { Link } from 'react-router-dom'
const Homepage = () => {
  const year = new Date().getFullYear()
  return (
    <div className="w-full min-h-screen p-3 bg-[#f8f7f7]"
    style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}

    >

        <div className="bg-[#2fa42b] w-max p-4 rounded text-white font-semibold">
            SBC 360 Assessment
        </div>
        <div className="w-full flex justify-between px-8 gap-4 h-screen relative">
            <div className="flex flex-col justify-center gap-4 p-4">
                    <div className="flex flex-col">
                        <h1 className="text-7xl font-semibold text-slate-800">
                            Welcome to SBC 360 Assessment
                        </h1>
                        <p className="text-lg ml-1">Kindly click on the button below to start the assessment</p>
                    </div>
                    <Link
                      to="/assessmentForm/1"
                     className="">
                        <button className="bg-[#2fa42b] text-white text-lg py-4 px-6 rounded">Start Assessment</button>
                    </Link>
            </div>
            <div className="flex justify-center">
              <img src={image1} alt="" className="object-contain" />
            </div>
        </div>
        {/* footer with copy right */}
        <div className="w-full text-[#2fa42b]  text-center py-4">
            <p>&copy; {year} Seven-Up Bottling Company Ltd. All rights reserved</p>
        </div>
    </div>
  )
}

export default Homepage
import React from 'react'
import Link from "next/link";


export default function Contactpackage() {
  return (
    <div className="h-[30rem] flex flex-col justify-center items-center bg-gray-900">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg mb-4">Have a question or want to book a hunting tour with us? Feel free to contact us!</p>
        <Link href={"/contactus"}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Contact Us
        </button>
        </Link>
        
      </div>
    </div>
  )
}

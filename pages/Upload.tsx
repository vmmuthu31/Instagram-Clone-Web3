import {useState} from 'react'
import {useRouter} from 'next/router'
import {useAppContext} from "../context/context"

const style = {
    wrapper: `w-full h-full flex flex-col`,
    title: `text-center text-3xl font-bold mb-11`,
    input: `w-full h-10 border-2 borders-gray-300 rounded-md p-2`,
    button: `flex bg-[#3898ff] text-white font-bold items-center justify-content flex-1 mt-[5rem] rounded-[1rem]`,
}

function Upload() {
  return (
    <div>Upload</div>
  )
}

export default Upload
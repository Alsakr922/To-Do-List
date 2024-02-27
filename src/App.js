"use client"
import { useRef, useState } from 'react';
import { HiCheck, HiEye, HiPlus, HiX, } from 'react-icons/hi';
import "./App.css"


const App = () => {
  const [X, setX] = useState([])
  const inputRef = useRef()
  const add = () => {
    const value = inputRef.current.value
    const newX = {completed:false , value}
    setX([...X, newX])
    inputRef.current.value = ""
  }
  const itemDone = (index) => {
    const newX = [...X]
  X[index].completed = !X[index].completed
    setX(newX)
  }
  const itemDelete = (index) => {
    const newX = [...X]
    newX.splice(index, 1)
    setX(newX)
  }
  return (
    <div className='p-[200px] m-auto text-center w-[800px] '>
      <h1 className='regular-64'>To <span className=' text-lime-500 '>Do</span> List</h1>
      <input ref={inputRef} type="text" className='py-2 px-5 rounded-2xl w-full my-5 text-gray-90  outline-none bg-white transition-all border focus:bg-lime-300 focus:border-lime-500' placeholder="Your Next Task ......" />
      <button onClick={add} 
              className='flexCenter gap-3 rounded-full border py-2 px-7 text-gray-50 btn_lime_outline'
              type="submit"
    >
      {<HiPlus />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">Add Mission</label>
    </button>
        <ul className='border border-gray-50 my-10'>
          {
            X.map((item, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className='flexCenter border border-gray-50'>
                  <HiX className='w-[30px] text-red-600 cursor-pointer' onClick={() => itemDelete(index)}   />
                  <li className={item.completed ? "list bg-lime-500": "list bg-gray-400" }>{item.value}</li>
                  {item.completed ?
                    <HiEye className='w-[30px] text-green-600 cursor-pointer' onClick={() => itemDone(index)}/> :
                    <HiCheck className='w-[30px] text-gray-600 cursor-pointer' onClick={() => itemDone(index)} />
                  }
                </div>
              )
            })
          }
        </ul>
    </div>
  );
}

export default App;

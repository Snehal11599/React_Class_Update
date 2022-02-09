import React,{useState} from 'react'

export default function InputName() {
    const[Name,setName]=useState(1)
    function getText(val)
    {
        console.warn(val.target.value)
        setName(val.target.value)
    }
  return (
    <div>
        <h1>{Name}</h1>
        <input type="text" onChange={getText}/>
      
    </div>
  )
}

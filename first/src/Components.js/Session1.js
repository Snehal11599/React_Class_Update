import React from 'react'

export default function Session1() {
    let name='khushali'
    function UpdateName(){
        name='riya'
        alert(name)
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={UpdateName}>update</button><br/><br/><br/>
    </div>
  )
}

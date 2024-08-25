import React from 'react'

const Select = (props) => {
  return (
    <div>
        <select name="" id="">
        { props.map((data, index)=>   <option value="" key={index}>{data}</option>)}
        </select>
    </div>
  )
}

export default Select
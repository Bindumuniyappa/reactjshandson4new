import React from 'react'
import {Link} from 'react-router-dom'

const AddNewStudentPage = () => {
  return (
    <div>
        <input type='text' placeholder='Name' name="name" className='inputCon'/>
        <input type='number' placeholder='Age'name="age" className='inputCon'/>
        <br/>
        <br/>
        <input type='text' placeholder='Course' name="course" className='inputCon'/>
        <input type='text' placeholder='Batch' name="batch" className='inputCon'/>
        <br/>
        <br/>
        <br/>
        <Link to='/tablepage'><button  className='btn_btn'>Cancel</button></Link>
        <button className='btn_btn'>Submit</button>
    </div>
  )
}

export default AddNewStudentPage
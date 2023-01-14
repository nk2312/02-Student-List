import './style.css';
import React, { useState } from 'react';

const StudentForm = (props) => {

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [uName, setUName] = useState('');
  const [age, setAge] = useState('');


  const FirstNameHandler = (e) => {
    setFName(e.target.value);
  }

  const LastNameHandler = (e) => {
    setLName(e.target.value)
  }

  const UserNameHandler = (e) => {
    setUName(e.target.value)
  }
  const AgeHandler = (e) => {
    setAge(e.target.value)
  }
  const SubmitHandler = (e) => {
    e.preventDefault();
    const obj={fName,lName,uName,age,id:Math.random()*10};
    props.formData(obj);
    setUName('');
    setAge('');
    setFName('');
    setLName('');
  }

  return (
    <div className='student-form'>
      <form onSubmit={SubmitHandler}>
        <div>
          <label>FirstName</label><br></br>
          <input type="text" onChange={FirstNameHandler} value={fName} />
        </div>
        <div>
          <label>LastName</label><br></br>
          <input type="text" onChange={LastNameHandler} value={lName} />
        </div>
        <div>
          <label>UserName</label><br></br>
          <input type="text" onChange={UserNameHandler} value={uName} />
        </div>
        <div><label>Age</label><br></br>
          <input type="number" min="14" max="24" step="1" onChange={AgeHandler} value={age} />
        </div>
        <button className='add-student'>Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
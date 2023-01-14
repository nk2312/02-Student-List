import { useState } from "react";
import Student from "./Components/Student";
import StudentForm from "./Components/StudentForm";
import Modal from "./Components/Modal";

const DUMMY_DATA=[{fName:'neelu',lName:'katiyar',age:24,uName:'neeluk12',id:'e1'}]

const App=()=>{
  const [studentData,setStudentData]=useState(DUMMY_DATA);

  const [error,setError]=useState();
  console.log(error);

  const formSubmitHandler=(obj)=>{
    console.log(obj);
    if(obj.fName===''||obj.lName===''||obj.uName==='' ||obj.age===''){
        console.log(error)
      setError({title:'Invalid Input',msg:'You Entered an Empty or InValid Inputs in the form'});
      console.log(error);
      return
    }
    if(obj.age<=0){
      setError({title:'Incorrect Age',msg:'Age should be between 14 to 20'});
      return
    }

    setStudentData((prevState)=>{return [...prevState,obj]})
  }

  const closeHandler=()=>{
    console.log("hi");
    setError(null);
  }
  return (
    <div >
      {error && <Modal title={error.title} msg={error.msg} closeModal={closeHandler}/>}
      <StudentForm formData={formSubmitHandler}/>
      <Student data={studentData}/>
    </div>
  );
}

export default App;

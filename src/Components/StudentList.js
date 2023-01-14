import React from "react";
import './style.css';

const StudentList = (props) => {
    return  <div className="student-list">
                <div className="name">{props.fname} {props.lname}</div>
                <div>{props.age}</div>
                <div>{props.uname}</div>
        </div>
    
}
export default StudentList;
import React from "react";
import Card from "./Card";
import StudentList from "./StudentList";


const Student = (props) => {
    return (
    <Card>{props.data.map(s => <StudentList 
        fname={s.fName} 
        lname={s.lName}
        uname={s.uName}
        age={s.age} 
        key={s.id}
    />)}
    </Card>
    )
}

export default Student;
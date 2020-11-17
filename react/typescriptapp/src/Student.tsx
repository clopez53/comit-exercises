import React, {FunctionComponent} from "react";

export interface IStudent {
    name: string;
    age: number;
    city?: string;
}


const Student : FunctionComponent<IStudent> = (props) => 
    <>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        <div>City: {props.city}</div>
    </>

Student.defaultProps = {
    city:"Winnipeg"
}

export default Student;
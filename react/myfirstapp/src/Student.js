const Student = ({stud, isTest}) => {
    <>
        <div>Name: {stud.name}</div>
        <div>Age: {stud.age}</div>
        <div>City: {stud.city}</div>
        <div>{isTest.toString()}</div>
    </>
}

export default Student;
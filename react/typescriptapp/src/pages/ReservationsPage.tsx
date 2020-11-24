import React, { useState } from "react";

const ReservationsPage = () => {
  const [userForm, setForm] = useState({ isGoing: false, numberOfGuests: 0 });
  //const [errors, setErrors] = useState<any>();
  const [hasError, setHasError] = useState<boolean>(false);  
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...userForm,
      [target.name]:
        target.type === "checkbox" ? target.checked : +target.value,
    });
  };  
  
  const validateForm = (): boolean => {
    //const _errors : { [key: string]: any } = {};    
    if (userForm.numberOfGuests === 0) {
    //   _errors.numberOfGuests = true;
    //   _errors.numberOfGuestsErrorMessage = "Number of guests cannot be zero!";
    setHasError(true);
    }    
    
    return !hasError;
  };  
  
  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!validateForm()) return;
    //Form is valid. You may call an API
    console.log(userForm);
  };  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="isGoing">Is going:</label>
        <input id="isGoing"
          name="isGoing"
          type="checkbox"
          value={+userForm.isGoing}
          onChange={handleChange}          
         />              
      </div>
      <div>
      <label htmlFor="numberOfGuests"> Number of guests: </label>
        <input
          id="numberOfGuests"
          name="numberOfGuests"
          type="number"
          value={userForm.numberOfGuests}
          onChange={handleChange}
        />      
      {hasError && <label style={{color:'red'}}>*</label>}
      </div>
      <div><button type="submit">Add</button></div>
    </form>
  );
};

export default ReservationsPage;
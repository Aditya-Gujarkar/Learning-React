import { useState } from "react";

export default function Form() {
  const [formData, setformData] = useState({
    fullName:"",
    userName:"",
    password:"",
  });

  // we won't be using this in case of multiple inputs in form
//   let handleNameChange = (event) => {
//     setFullName(event.target.value);
//   };

// USING COMMON HANDLER for handling multiple inputs
let handleInputChange=(event)=>{
    setformData((formData)=> {
    return {...formData,[event.target.name]: event.target.value}
    })
}
// to prevent default behaviour of form (which is to refresh the page)
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
    setformData({        // resetting form after its submission
        fullName:"",
        userName:"",
        password:"",
    })
}

  return (
    <form onSubmit={handleSubmit}>
      {/* using label in form (can't use for bcz it is a attribute in js) so we use htmlFor */}
      <label htmlFor="fullName">Full Name:&nbsp;</label>
      <input
        type="text"
        placeholder="write your full name"
        id="fullName"
        value={formData.fullName}
        name="fullName"
        onChange={handleInputChange}
      />
        <br />
      <label htmlFor="userName">Username:&nbsp;</label>
      <input
        type="text"
        placeholder="write your username"
        id="userName"
        value={formData.userName}
        name="userName"
        onChange={handleInputChange}
      />
              <br />
      <label htmlFor="password">password:&nbsp;</label>
      <input
        type="password"
        placeholder="write your password"
        id="password"
        value={formData.password}
        name="password"
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
}

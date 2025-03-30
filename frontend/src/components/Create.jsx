import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = {name, email, age};

    const response = await fetch("http://localhost:5000/api/user", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(response.ok){
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setAge("");
      navigate('/all');
    }
  }
  

  return (
    <div className='container my-2'>

      {error && <div className="alert alert-warning alert-dismissible fade show" role="alert">{error}</div>}

      <h2 className='text-center'>Enter the data</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input value={name} onChange={(e)=> setName(e.target.value)} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
          <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Age</label>
          <input value={age} onChange={(e)=> setAge(e.target.value)} type="number" className="form-control" id="exampleInputPassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Create
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div style={{ height: "80vh" }} className='d-flex justify-content-center align-items-center'>
            <div className="container mt-5">
                <div className="card p-4 shadow-sm mx-auto">
                    <h3 className="text-center mb-3">Sign Up</h3>
                    <form>
                        <div className="mb-3">
                            <label for="signupName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="signupName" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label for="signupEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="signupEmail" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label for="signupPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signupPassword" placeholder="Create a password" />
                        </div>
                        <button type="submit" className="btn btn-success w-100">Sign Up</button>
                    </form>
                    <p className="text-center mt-3">
                        Already have an account? <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Signup
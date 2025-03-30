// import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div style={{ height: "80vh" }} className="d-flex justify-content-center align-items-center">
            <div className="container mt-5">
            <h1 className="d-flex justify-content-center">Please first Login or Signup to create post</h1>
                <div className="card p-4 shadow-sm mx-auto">
                    <h3 className="text-center mb-3">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label for="loginEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="loginEmail" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label for="loginPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="loginPassword" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <p className="text-center mt-3">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;

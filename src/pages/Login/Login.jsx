import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Login = () => {
    const location = useLocation();
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(userCredential => {
                const loggedInUser = userCredential.user;
                navigate(location?.state? location.state : '/');
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-2">
                    <div className='hidden md:block'>
                        <img className='w-3/4 mx-auto' src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm border rounded-md mx-auto">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center my-3'>
                                Don't have an account?
                                {/* <Link className='ml-1 text-orange-600 font-bold' to={'/signup'}>Sign Up</Link> */}
                                <Link to={{ pathname: '/signup', state: 'wowwo' }}>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
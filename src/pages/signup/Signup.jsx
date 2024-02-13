import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-2">
                    <div className='hidden md:block'>
                        <img className='w-3/4 mx-auto' src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm border rounded-md mx-auto">
                        <form className="card-body">
                            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
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
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='confirmPassword' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center my-3'>
                                Already have an account?
                                <Link className='ml-1 text-orange-600 font-bold' to={'/login'}>Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
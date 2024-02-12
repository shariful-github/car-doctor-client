import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid md:grid-cols-2 grid-cols-1">
                <div className='relative'>
                    <img className='w-3/4' src={person} alt="" />
                    <img className='w-1/2 absolute right-5 top-1/2 border-8 border-white' src={parts} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-lg text-red-500'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error bg-red-500 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
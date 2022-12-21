import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import { setUtilitiesToken } from '../../../../utilities/utilities';

const Register = () => {

    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.url.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
                setUtilitiesToken(user);
                navigate('/');
                toast.success('User created successfully.');
            })
            .catch(er => console.error(er.message))
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(er => console.error(er.message));
    }

    return (
        <div className="hero min-h-screen py-10 bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='text-center pt-3 font-bold'>
                    <h4 className='text-4xl mb-2 text-sky-500'>Welcome!</h4>
                    <h3 className='text-3xl text-green-300'>Register</h3>
                </div>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input name='url' type="text" placeholder="Image url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover text-blue-400">Already have an Account?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
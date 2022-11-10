import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../../hooks/useTitle';
import { setUtilitiesToken } from '../../../../utilities/utilities';


const Login = () => {


    const { logIn, LogInWithGoogle, logInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // jwt token 
                fetch('https://service-review-assignment11-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('reviewToken')}`
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('reviewToken', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err))
    }
    const provider = new GoogleAuthProvider();
    const loginGoogle = () => {
        LogInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUtilitiesToken(user);
            })
            .catch(er => console.error(er))
    }
    const gitProvider = new GithubAuthProvider();
    const handleGithub = () => {
        logInWithGithub(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUtilitiesToken(user);
            })
            .catch(er => console.error(er))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='text-center pt-3 font-bold'>
                    <h4 className='text-4xl mb-2 text-sky-500'>Welcome Back!</h4>
                    <h3 className='text-3xl text-green-300'>Login</h3>
                </div>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover text-red-300">New to this site?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="text-center mt-5">
                        <button onClick={loginGoogle} className="btn btn-circle bg-slate-200 border-none mr-5"><FcGoogle /></button>
                        <button onClick={handleGithub} className="btn btn-circle  bg-black border-none"><BsGithub /></button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;
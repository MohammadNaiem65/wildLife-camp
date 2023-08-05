import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaPinterest, FaApple } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';

const Login = () => {
	const { setShowNavbar } = useContext(MetaContext);
	const navigate = useNavigate();

	// Make the navbar visible
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);

	// Get location
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	return (
		<div className='w-1/3 mx-auto mt-44 mb-20 px-10 py-5 bg-secondary/60 font-bree rounded'>
			<h2 className='text-4xl text-center font-candal'>Login</h2>
			<form className='w-fit mx-auto px-5'>
				{/* Email */}
				<>
					<label
						htmlFor='email'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email.'
						className='w-96 px-3 py-1 outline-primary rounded'
						required
					/>
				</>
				{/* Password */}
				<>
					<label
						htmlFor='password'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Password
					</label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password.'
						className='w-96 px-3 py-1 outline-primary rounded'
						required
					/>
				</>
				<p className='mt-2'>
					New to Brainiac Toys?{' '}
					<Link
						to='/sign-up'
						className='text-gray-500 underline hover:text-slate-950'>
						Sign Up
					</Link>{' '}
					now.
				</p>
				<button
					className='btn btn-primary block mx-auto mt-7 font-candal'
					type='submit'>
					Login
				</button>
				<div className='w-full'>
					<p className='text-xl text-center mt-4 mb-4'>Or</p>
					<div className='text-4xl flex justify-center gap-x-5'>
						<FcGoogle
							className='cursor-pointer'
							// onClick={handleLoginWithGoogle}
						/>
						<FaFacebook className='cursor-pointer text-blue-600' />
						<FaPinterest className='cursor-pointer text-red-600' />
						<FaApple className='cursor-pointer' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;

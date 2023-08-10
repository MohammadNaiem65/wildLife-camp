import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaPinterest, FaApple } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { MetaContext } from '../../Providers/MetaContextProvider/MetaContextProvider';
import { AuthContext } from '../../Providers/AuthContextProvider/AuthContextProvider';
import Swal from 'sweetalert2';

const Login = () => {
	// ! Variable definitions
	const { setShowNavbar } = useContext(MetaContext);
	const { setUser, setRole, setLoggedIn, setLoading, signInWithEmail } =
		useContext(AuthContext);
	const navigate = useNavigate();

	// Make the navbar visible
	useEffect(() => {
		const unsubscribe = () => setShowNavbar(true);
		return unsubscribe();
	}, []);

	// Get location
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	// * Handle Sign In / Login
	const handleLogin = (e) => {
		e.preventDefault();
		setLoading(true);

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		if (password.length < 6) {
			setLoading(false);
			Swal.fire({
				icon: 'error',
				title: 'Error!',
				text: 'Your Password must be at least six characters long',
			});
		} else {
			signInWithEmail(email, password)
				.then((userCredential) => {
					fetch(`http://localhost:5000/users/role?email=${email}`)
						.then((res) => res.json())
						.then((data) => {
							setLoading(false);
							setLoggedIn(true);
							setUser(userCredential.user);
							setRole(data.role);
							Swal.fire({
								icon: 'success',
								title: 'Success!',
								text: 'Logged in Successfully',
							});
							navigate(from);
						});
				})
				.catch((err) => {
					setLoading(false);
					const e = err.code
						.split('.')[0]
						.split('/')[1]
						.replace(/-/g, ' ');

					const error = e.charAt(0).toUpperCase() + e.slice(1) + '.';
					Swal.fire({
						icon: 'error',
						title: error,
						text: `${
							err.code.split('.')[1] ? err.code.split('.')[1] : ''
						}`,
					});
				});
		}

		form.reset()
	};

	return (
		<div className='w-1/3 mx-auto mt-44 mb-20 px-10 py-5 bg-secondary/60 font-bree rounded'>
			<h2 className='text-4xl text-center font-candal'>Login</h2>
			<form className='w-fit mx-auto px-5' onSubmit={handleLogin}>
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
						className='w-96 px-3 py-1 outline-secondary  rounded'
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
						className='w-96 px-3 py-1 outline-secondary  rounded'
						required
					/>
				</>
				<p className='mt-2'>
					New to Brainiac Toys?{' '}
					<Link
						to='/sign-up'
						className='text-gray-500 underline hover:text-slate-950 focus:outline-none focus:text-slate-950'>
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

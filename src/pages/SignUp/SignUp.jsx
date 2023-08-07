import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaPinterest, FaApple } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContextProvider/AuthContextProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
	// ! Required variables
	const { signUpWithEmail, setLoggedIn, setLoading, setUser } =
		useContext(AuthContext);
	const navigate = useNavigate();

	// * Handle Sign Up
	const handleSignUp = (e) => {
		e.preventDefault();
		setLoading(true);
		const form = e.target;

		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;

		// ! Validate password
		if (password.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Error!',
				text: 'Your Password must be at least six characters long',
			});
		} else if (password !== confirmPassword) {
			Swal.fire({
				icon: 'error',
				title: 'Error!',
				text: "Password didn't matched.",
			});
		} else {
			signUpWithEmail(email, password)
				.then((userCredential) => {
					updateProfile(userCredential.user, {
						displayName: name,
						photoURL: photo,
					}).then(() => {
						setUser(null);
						setLoggedIn(false);
						const newUser = {
							name: name,
							email: email,
							img: photo,
							role: 'student',
						};
						fetch('http://localhost:5000/users/role', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(newUser),
						})
							.then((res) => res.json())
							.then((data) => {
								if (data.insertedId) {
									setLoading(false);
									navigate('/login');
									Swal.fire(
										'Success!',
										'Account Created Successfully!',
										'success'
									);
								}
							});
					});
				})
				.catch((err) => {
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
	};

	return (
		<div className='w-1/3 mx-auto mt-44 mb-20 px-10 py-5  bg-secondary/60 font-bree rounded'>
			<h2 className='text-4xl text-center font-candal'>Sign Up</h2>
			<form className='w-fit mx-auto px-5' onSubmit={handleSignUp}>
				{/* Name */}
				<>
					<label
						htmlFor='name'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Enter your name.'
						className='w-96 px-3 py-1 outline-secondary rounded'
						required
					/>
				</>
				{/* Photo URL */}
				<>
					<label
						htmlFor='photo'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Photo URL
					</label>
					<input
						type='text'
						id='photo'
						name='photo'
						placeholder='Enter your photo URL.'
						className='w-96 px-3 py-1 outline-secondary rounded'
						required
					/>
				</>
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
						className='w-96 px-3 py-1 outline-secondary rounded'
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
						className='w-96 px-3 py-1 outline-secondary rounded'
						required
					/>
				</>
				{/* Confirm Password */}
				<>
					<label
						htmlFor='confirmPassword'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Confirm Password
					</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						placeholder='Confirm your password.'
						className='w-96 px-3 py-1 outline-secondary rounded'
						required
					/>
				</>
				<p className='mt-2'>
					Already have an account?{' '}
					<Link
						to='/login'
						className='text-gray-500 underline hover:text-slate-950 focus:outline-none focus:text-slate-950 '>
						Login
					</Link>{' '}
					here.
				</p>
				<button
					type='submit'
					className='btn btn-primary block mx-auto mt-7 font-candal'>
					Sign Up
				</button>
				<div className='w-full'>
					<p className='text-xl text-center mt-4 mb-4'>Or</p>
					<div className='text-4xl flex justify-center gap-x-5'>
						<FcGoogle className='cursor-pointer' />
						<FaFacebook className='cursor-pointer text-blue-600' />
						<FaPinterest className='cursor-pointer text-red-600' />
						<FaApple className='cursor-pointer' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;

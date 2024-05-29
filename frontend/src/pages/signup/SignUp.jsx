import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckBox.jsx';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInput]=useState({
		fullName: '',
		username: '',
        password: '',
        confirmPassword: '',
        gender: '',
	})

	const {loading, signup} = useSignup();
    const handleCheckboxChange = (gender) =>{
		setInput({...inputs, gender: gender});
	}
	const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
		signup(inputs);


    }
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-black'>
					Sign Up <span className='text-black'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-white label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='Ritik Parmar' className='w-full input input-bordered  h-10' 
						  value={inputs.fullName}
						  onChange={(e) => setInput({...inputs, fullName: e.target.value})}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-white label-text'>Username</span>
						</label>
						<input type='text' placeholder='ritik99' className='w-full input input-bordered h-10' 
						value={inputs.username}
						onChange={(e) => setInput({...inputs, username: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-white label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
						onChange={(e) => setInput({...inputs, password: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-white label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInput({...inputs, confirmPassword: e.target.value})}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<Link to="/login" className='text-white hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'
						disabled={loading}
						>
						{loading? <span className='loading loading-spinner'></span>: "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
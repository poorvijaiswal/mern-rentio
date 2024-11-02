import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Password reset successful!');
        setTimeout(() => navigate('/sign-in'), 2000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto absolute top-[120px] w-full left-[50%] translate-x-[-50%]'>
      <h1 className='text-3xl text-center mb-5' style={{
    fontSize: '30px',
    fontWeight: 700,
    fontFamily: 'Roboto,sans-serif'
  }}>Reset Password</h1>
   <div className='p-6 border border-gray-300 shadow-lg rounded-lg bg-white' style={{
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
  }}>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='password'
          placeholder='New Password'
          className='bg-slate-100 border p-3 rounded-lg'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='Confirm New Password'
          className='bg-slate-100 border p-3 rounded-lg'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          Reset Password
        </button>
      </form>
      {message && <p className='text-green-500 mt-5'>{message}</p>}
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
    </div>
  );
}

import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Password reset link sent to your email.');
        setError(null);
      } else {
        setMessage(null);
        setError(data.message);
      }
    } catch (error) {
      setMessage(null);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto absolute top-[120px] w-full left-[50%] translate-x-[-50%]'>
      <h1 className='text-3xl text-center mb-5'>Forgot Password</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Enter your email'
          className='bg-slate-100 border p-3 rounded-lg'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          Send Reset Link
        </button>
      </form>
      {message && <p className='text-green-500 mt-5'>{message}</p>}
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}

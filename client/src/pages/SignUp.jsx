import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from './RentioHome/components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto absolute top-[120px] w-full left-[50%] translate-x-[-50%]'>
      <h1 className='text-3xl text-center mb-5' style={{
    fontSize: '30px',
    fontWeight: 700,
    fontFamily: 'Roboto,sans-serif'
  }}>Sign Up</h1>
      <div className='p-6 border border-gray-300 shadow-lg rounded-lg bg-white' style={{
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
  }}>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='username'
            className='bg-slate-100 border p-3 rounded-lg'
            id='username'
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='email'
            className='bg-slate-100 border p-3 rounded-lg'
            id='email'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='password'
            className='bg-slate-100 border p-3 rounded-lg'
            id='password'
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth />
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to={'/sign-in'}>
            <span className='text-blue-700'>Sign in</span>
          </Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  );
}
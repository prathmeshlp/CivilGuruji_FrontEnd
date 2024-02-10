// Import necessary modules
import React, { useState } from 'react';
import axios from 'axios';

// Define functional component for the frontend
function App() {
  // State variables to hold user input
  const [email, setEmail] = useState('');
  const [lastActivity, setLastActivity] = useState('');
  const [visitedCheckout, setVisitedCheckout] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/user/activity', { email, lastActivity, visitedCheckout });
      setEmail('');
      setLastActivity('');
      setVisitedCheckout(false);
      alert('User activity updated successfully');
    } catch (error) {
      console.log('Error updating user activity:', error);
    }
  };

  return (
    <div className="App text-center mt-20">
      <h1 className='text-xl font-bold mb-10'>User Activity Management</h1>
      <div className='border border-black w-[600px] mx-auto p-4'>
      <form onSubmit={handleSubmit}>
        <div >
          <label  className='mr-4'>Email:</label> 
          <input className='border border-black rounded-lg p-2' type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='mt-5'>
          <label className='mr-4'>Last Activity:</label>  
          <input className='border border-black rounded-lg p-2'  type="date" value={lastActivity} onChange={(e) => setLastActivity(e.target.value)} required />
        </div>
        <div className='mt-5'>
          <label className='mr-4'>Visited Checkout:</label> 
          <input className='border border-black rounded-lg'  type="checkbox" checked={visitedCheckout} onChange={(e) => setVisitedCheckout(e.target.checked)} />
        </div>
        <button className='bg-black text-white p-2 rounded-xl mt-5' type="submit">Update Activity</button>
      </form>
    </div>
    </div>
  );
}

export default App;

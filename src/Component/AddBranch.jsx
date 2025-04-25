import React, { useState } from 'react';

const AddBranch = () => {
  const [formData, setFormData] = useState({
    branchName: '',
    apiUrl: '',
    port: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.branchName || !formData.apiUrl || !formData.port) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('/api/branches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add branch');
      }

      // Reset form and show success
      setFormData({ branchName: '', apiUrl: '', port: '' });
      setError('');
      setSuccess('Branch added successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Branch</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Branch Name</label>
          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter branch name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">API URL</label>
          <input
            type="url"
            name="apiUrl"
            value={formData.apiUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="https://api.example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Port</label>
          <input
            type="number"
            name="port"
            value={formData.port}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter port number"
            required
          />
        </div>

        {error && <div className="mb-4 text-red-500">{error}</div>}
        {success && <div className="mb-4 text-green-500">{success}</div>}

       <div className='flex gap-4'>
       <button
          type="submit"
          className="w-full  bg-red-600 text-white py-4 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Test Connection
        </button>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 bg-blue-600 text-white py-4 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add Branch
        </button>
       </div>
      </form>
    </div>
  );
};

export default AddBranch;
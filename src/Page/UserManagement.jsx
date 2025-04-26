import React, { useState } from 'react';

const UserManagement = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        designation: '',
        address: '',
        password: '',
        confirmPassword: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        setPasswordError('');
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('User created successfully');
            setIsSubmitting(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                designation: '',
                address: '',
                password: '',
                confirmPassword: ''
            });
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">User Management</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            First Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            Last Name
                        </label>
                    </div>

                    <div className="relative col-span-2">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            Email Address
                        </label>
                    </div>

                    <div className="relative col-span-2">
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            Designation
                        </label>
                    </div>

                    <div className="relative col-span-2">
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500 h-24"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            Address
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            Password
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                        <label className="absolute left-4 top-3 px-1 transition-all duration-200 
                            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3
                            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:bg-white
                            text-sm bg-white text-gray-600 pointer-events-none">
                            Confirm Password
                        </label>
                    </div>
                </div>

                {passwordError && <p className="text-red-500 text-sm -mt-4">{passwordError}</p>}

                <button
                    type="submit"
                    disabled={isSubmitting || !Object.values(formData).every(Boolean) || passwordError}
                    className={`w-full py-4 px-6 flex justify-center items-center gap-2 
                        transition-all rounded-xl font-bold text-white
                        ${isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 
                        'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}
                        shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                >
                    {isSubmitting ? (
                        'Creating User...'
                    ) : (
                        <>
                            <span>Create User</span>
                            <svg 
                                className="w-5 h-5 animate-bounce-horizontal"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                                />
                            </svg>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default UserManagement;
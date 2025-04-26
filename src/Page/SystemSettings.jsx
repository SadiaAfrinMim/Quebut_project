import React, { useState } from 'react';

const SystemSettings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('Password changed successfully');
            setIsSubmitting(false);
            setCurrentPassword('');
            setNewPassword('');
        }, 2000);
    };

    return (
        <div className="max-w-md  mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Current Password
                    </label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={!currentPassword || !newPassword || isSubmitting}
                    className={`w-full py-3 px-4 flex items-center justify-center gap-2 transition-all rounded-lg
                        ${isSubmitting ? 'bg-purple-400 cursor-not-allowed' : 
                        'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}
                        text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                >
                    {isSubmitting ? (
                        'Changing...'
                    ) : (
                        <>
                            <span>Change Password</span>
                            <svg 
                                className="w-4 h-4 transition-transform transform group-hover:translate-x-1"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                />
                            </svg>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default SystemSettings;
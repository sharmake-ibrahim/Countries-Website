import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const Navigate = useNavigate();

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const isFieldEmpty = (fieldName) => {
    return touched[fieldName] && formData[fieldName].trim() === '';
  };

  const isFieldValid = (fieldName) => {
    return touched[fieldName] && formData[fieldName].trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      username: true,
      email: true,
      password: true
    });

    // Check if all fields are filled
    const isFormValid = Object.keys(formData).every(key => formData[key].trim() !== '');
    
    isFormValid ? <Outlet/> : <Navigate to="/login"/>
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Username
          </label>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-md ${
                isFieldEmpty('username') 
                  ? 'border-red-500' 
                  : isFieldValid('username')
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
            />
            {isFieldEmpty('username') && (
              <div className="absolute right-2 top-2.5 text-red-500">
                <AlertCircle size={20} />
              </div>
            )}
            {isFieldValid('username') && (
              <div className="absolute right-2 top-2.5 text-green-500">
                <CheckCircle2 size={20} />
              </div>
            )}
          </div>
          {isFieldEmpty('username') && (
            <p className="mt-1 text-sm text-red-500">Username is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-md ${
                isFieldEmpty('email')
                  ? 'border-red-500'
                  : isFieldValid('email')
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
            />
            {isFieldEmpty('email') && (
              <div className="absolute right-2 top-2.5 text-red-500">
                <AlertCircle size={20} />
              </div>
            )}
            {isFieldValid('email') && (
              <div className="absolute right-2 top-2.5 text-green-500">
                <CheckCircle2 size={20} />
              </div>
            )}
          </div>
          {isFieldEmpty('email') && (
            <p className="mt-1 text-sm text-red-500">Email is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border rounded-md ${
                isFieldEmpty('password')
                  ? 'border-red-500'
                  : isFieldValid('password')
                  ? 'border-green-500'
                  : 'border-gray-300'
              }`}
            />
            {isFieldEmpty('password') && (
              <div className="absolute right-2 top-2.5 text-red-500">
                <AlertCircle size={20} />
              </div>
            )}
            {isFieldValid('password') && (
              <div className="absolute right-2 top-2.5 text-green-500">
                <CheckCircle2 size={20} />
              </div>
            )}
          </div>
          {isFieldEmpty('password') && (
            <p className="mt-1 text-sm text-red-500">Password is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
        Login
        </button>
      </form>
    </div>
  );
};

export default Login;
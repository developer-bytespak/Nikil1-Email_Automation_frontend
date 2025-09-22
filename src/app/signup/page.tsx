'use client';

import { useState } from 'react';

export default function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  // Password validation
  const passwordChecks = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    minLength: password.length >= 8
  };

  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '' && 
                     email.trim() !== '' && password.trim() !== '' && 
                     Object.values(passwordChecks).every(check => check) && 
                     recaptchaChecked;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern with Company Logos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-2xl font-bold text-gray-400">V</div>
        <div className="absolute top-32 right-20 text-xl font-bold text-gray-400">N</div>
        <div className="absolute top-48 left-1/4 text-lg font-bold text-gray-400">HubSpot</div>
        <div className="absolute top-64 right-1/3 text-xl font-bold text-gray-400">Salesforce</div>
        <div className="absolute top-80 left-16 text-lg font-bold text-gray-400">Pipedrive</div>
        <div className="absolute top-96 right-16 text-xl font-bold text-gray-400">Zendesk</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          {/* Signup Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">MarketingPro</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Try for free</h1>
            </div>

            {/* Social Signup Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-medium">Sign up with Google</span>
              </button>

              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                  <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
                <span className="text-gray-700 font-medium">Sign up with Microsoft</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Signup Form */}
            <form className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-3 border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-3 border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-3 border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {showPassword ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      ) : (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>

                {/* Password Requirements */}
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {Object.entries(passwordChecks).map(([key, isValid]) => (
                    <div key={key} className="flex flex-col items-center">
                      <div className={`w-2 h-2 rounded-full ${isValid ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={`text-xs mt-1 ${isValid ? 'text-green-600' : 'text-gray-500'}`}>
                        {key === 'uppercase' ? 'Uppercase' :
                         key === 'lowercase' ? 'Lowercase' :
                         key === 'number' ? 'Number' :
                         key === 'symbol' ? 'Symbol' :
                         key === 'minLength' ? 'Min. 8 char.' : key}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* reCAPTCHA */}
              <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    checked={recaptchaChecked}
                    onChange={(e) => setRecaptchaChecked(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="recaptcha" className="ml-2 text-sm text-gray-700">
                    I'm not a robot
                  </label>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">reCAPTCHA</div>
                    <div className="text-xs text-gray-500">Privacy - Terms</div>
                  </div>
                </div>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isFormValid 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer shadow-lg hover:shadow-xl' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
                Create account
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 text-center space-y-3">
              <div>
                <span className="text-gray-600">Already have an account? </span>
                <a href="/login" className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200">
                  Log in
                </a>
              </div>
              <div className="text-xs text-gray-500">
                By continuing you agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Terms of use</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500">Privacy policy</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

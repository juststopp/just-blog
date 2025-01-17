import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const ProtectedPost = ({ post, children }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === post.data.flag) {
      setIsUnlocked(true);
      setError('');
    } else {
      console.log(password, post.data)
      setError('Incorrect flag. Try again.');
      setPassword('');
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="mb-6 p-4 border rounded-lg shadow">
      <div className="pt-4">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Lock className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">Protected Content</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded text-sm"
              placeholder="Enter flag to unlock"
              required
            />
            
            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProtectedPost;
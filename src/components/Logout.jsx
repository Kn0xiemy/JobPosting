import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Example state to track login status

  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage, resetting state, etc.
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome User!</h1>
          <LogoutButton onLogout={handleLogout} />
        </div>
      ) : (
        <h1>You are logged out</h1>
      )}
    </div>
  );
}

export default App;

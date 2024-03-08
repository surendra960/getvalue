import React, { useState } from 'react';

export default function Profile() {
  const [loggedIn, setLoggedIn] = useState(2);

  return (
    <div>
      {loggedIn === 1 ? <h1>Welcome One</h1> : loggedIn === 2 ? <h1>Welcome Two</h1> : <h1>Welcome Three</h1>}
    </div>
  );
}

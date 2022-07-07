import React from 'react';

export default function Login() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Login</h1>
      
      <form>
  <label>
    Username:
    <input type="text" name="name" />
  </label>
</form>

<form>
  <label>
    Password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

    </div>
  );
}

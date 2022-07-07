import React from 'react';

export default function Signup() {
  return (
    <div  style={{textAlign: 'center'}}>
      <h1>Sign Up</h1>
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
</form>
<form>
  <label>
    Re-enter Password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}
import React from "react";

export default function login() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

async function handleSubmit(e){
    e.preventDefault();
    setError(""); 
    try {
     const res = await fetch("https:example.com/300x300")
      if (user === "") {
        throw new Error("Username cannot be empty");
      }
   
      console.log("User logged in:", user);
    } catch (err) {
      setError(err.message); 
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button>Log in</button>
      <div role="alert"></div>
      {error && <div role="alert">{error}</div>}
      <div role="status">Loading...</div>
    </form>
  );
}
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name"
          value={form.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email"
          value={form.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password"
          value={form.password} onChange={handleChange} required />

        <button type="submit" className="auth-btn">SIGN UP</button>
      </form>
    </div>
  );
}
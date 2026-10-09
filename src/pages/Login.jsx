import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email"
          value={form.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password"
          value={form.password} onChange={handleChange} required />

        <button type="submit" className="auth-btn">LOGIN</button>
      </form>
    </div>
  );
}
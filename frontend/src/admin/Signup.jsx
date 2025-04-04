import "./adminstyle.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    try {
      const res = await axios.post("http://localhost:3000/admin/signup", formData);
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Signup failed");
    }
  };

  return (
    <>
      <div className="admin-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={formData.password}
          />
          <button type="submit">Signup</button>
        </form>
        <ToastContainer /> {/* ✅ Toast Notifications */}
      </div>
    </>
  );
}

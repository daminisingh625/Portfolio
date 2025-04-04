import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/admin/login", formData);
            toast.success("Hey Damini, Welcome!");
        } catch (e) {
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <div className="admin-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

// Contact.js
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to a server)
        console.log(formData);
    };

    return (
        <section id="contact" className="px-10 w-full my-40 max-w-5xl mx-auto">
            <h2 className="text-center text-6xl text-green-800 font-bold">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6 max-w-3xl mx-auto">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-semibold text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-semibold text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="px-4 py-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-8 py-3 text-lg font-semibold text-white bg-green-800 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
}

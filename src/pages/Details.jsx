import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/contact";

const Details = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/all`);
      setContacts(response.data.contacts); // Store response in state
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id)); // Remove deleted item from state
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Company</th>
            <th className="py-2 px-4 border">Job Title</th>
            <th className="py-2 px-4 border">Message</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4">
                No contacts available.
              </td>
            </tr>
          ) : (
            contacts.map((contact) => (
              <tr key={contact._id} className="border">
                <td className="py-2 px-4 border">{contact.name}</td>
                <td className="py-2 px-4 border">{contact.email}</td>
                <td className="py-2 px-4 border">{contact.phone}</td>
                <td className="py-2 px-4 border">{contact.company}</td>
                <td className="py-2 px-4 border">{contact.jobTitle}</td>
                <td className="py-2 px-4 border">{contact.message}</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Details;

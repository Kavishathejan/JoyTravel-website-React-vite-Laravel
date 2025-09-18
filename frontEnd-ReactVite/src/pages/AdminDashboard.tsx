import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";


interface Contact {
  id: number;
  name: string;
  email: string;
  country: string;
  subject: string;
  message: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://127.0.0.1:8000/api/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch contacts");

        const data = await res.json();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
   <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
  <div className="w-full max-w-6xl">
    <h1 className="text-3xl font-bold mb-6 text-center">Contact Form Submissions</h1>

    {contacts.length === 0 ? (
      <p className="text-center">No submissions yet.</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Country</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Message</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="bg-gray-800 even:bg-gray-700">
                <td className="border px-4 py-2">{contact.name}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.country}</td>
                <td className="border px-4 py-2">{contact.subject}</td>
                <td className="border px-4 py-2">{contact.message}</td>
                <td className="border px-4 py-2">{new Date(contact.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</section>

  );
};

export default AdminDashboard;


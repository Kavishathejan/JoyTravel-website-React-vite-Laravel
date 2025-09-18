import { useEffect, useState } from "react";

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

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white p-4 sm:p-8">
      <div className="w-full max-w-6xl mt-32">

        <h1 className="text-3xl font-bold mb-6 text-center">Contact Form Submissions</h1>

        {contacts.length === 0 ? (
          <p className="text-center">No submissions yet.</p>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
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
                      <td className="border px-4 py-2">
                        {new Date(contact.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile & Tablet Cards */}
            <div className="lg:hidden flex flex-col gap-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-gray-800 rounded-xl p-4 shadow-md flex flex-col space-y-2"
                >
                  <p><span className="font-semibold">Name:</span> {contact.name}</p>
                  <p><span className="font-semibold">Email:</span> {contact.email}</p>
                  <p><span className="font-semibold">Country:</span> {contact.country}</p>
                  <p><span className="font-semibold">Subject:</span> {contact.subject}</p>
                  <p><span className="font-semibold">Message:</span> {contact.message}</p>
                  <p><span className="font-semibold">Date:</span> {new Date(contact.created_at).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;

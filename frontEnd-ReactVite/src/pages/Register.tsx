import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(""); // reset previous errors

  // Client-side validation first
  if (!name || !email || !password || !confirmPassword) {
    setError("All fields are required");
    return; // exit without setting loading
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return; // exit without setting loading
  }

  // Optional: validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  // Only start loading when sending request
  setLoading(true);

  try {
    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "Registration failed");
    }

    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    if (data.user.role === 1) navigate("/admin/dashboard");
    else navigate("/");
  } catch (err: any) {
    setError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>

        {error && <p className="text-red-400 mb-4">{error}</p>}

        {loading ? (
          <div className="flex justify-center my-6">
            <Loading text="Logging in..." />
          </div>
        ) : (

          <form className="space-y-6" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-500 bg-white/20 text-white"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
            >
              Register
            </button>
          </form>)}

        <p className="text-gray-300 text-sm mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;

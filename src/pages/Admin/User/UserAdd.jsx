import React, { useState, useEffect } from "react";

function UserAdd({ onClose, refresh }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role_id: "",
    status: "active",
    password: "",
  });

  const [roles, setRoles] = useState([]);

  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    const fetchRoles = async () => {
      const token = getToken();
      try {
        const res = await fetch("http://localhost:8000/api/roles", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setRoles(data.data);
        } else {
          console.error("Failed to fetch roles");
        }
      } catch (err) {
        console.error("Error fetching roles:", err);
      }
    };
    fetchRoles();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    const token = getToken();

    try {
      const res = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          role_id: Number(formData.role_id),
        }),
      });

      if (res.ok) {
        alert("User added successfully");
        refresh();
        onClose();
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Failed to add user");
      }
    } catch (err) {
      console.error("Error adding user:", err);
      alert("Error adding user");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white border border-blue-600 border-2 rounded-2xl shadow-xl p-8 w-lg max-w-full mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add User</h2>

        <form onSubmit={handleAddUser} className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Role */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Role</label>
            <select
              value={formData.role_id}
              onChange={(e) =>
                setFormData({ ...formData, role_id: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role.role_id} value={role.role_id}>
                  {role.role_name}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Status</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          {/* Buttons spanning 2 columns */}
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserAdd;

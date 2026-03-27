import React, { useState, useEffect } from "react";

function UserEdit({ user, onClose, refresh }) {
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

  // Load roles
  useEffect(() => {
    fetch("http://localhost:8000/api/roles", {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then((res) => res.json())
      .then((data) => setRoles(data.data || []))
      .catch((err) => console.error(err));
  }, []);

  // Load user into form
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        role_id: user.role_id || "",
        status: user.status || "active",
        password: "",
      });
    }
  }, [user]);

  // Update user
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role_id: Number(formData.role_id),
          status: formData.status,
          ...(formData.password && { password: formData.password }),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Updated successfully");
        refresh();
        onClose();
      } else {
        console.error(data);
        if (data.errors) {
          alert(Object.values(data.errors).flat().join("\n"));
        } else {
          alert(data.message || "Update failed");
        }
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md border border-blue-600 rounded-2xl shadow-xl p-8 w-full max-w-lg max-h-[90vh] overflow-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Edit User</h2>

        <form onSubmit={handleUpdateUser} className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Name</label>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Name"
              className="border p-2 rounded"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Email</label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email"
              className="border p-2 rounded"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Phone</label>
            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Phone"
              className="border p-2 rounded"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">New Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="New Password"
              className="border p-2 rounded"
            />
          </div>

          {/* Role */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Role</label>
            <select
              value={formData.role_id}
              onChange={(e) =>
                setFormData({ ...formData, role_id: e.target.value })
              }
              className="border p-2 rounded"
            >
              <option value="">Select Role</option>
              {roles.map((r) => (
                <option key={r.role_id} value={r.role_id}>
                  {r.role_name}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              className="border p-2 rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          {/* Buttons - span full width */}
          <button
            type="button"
            onClick={onClose}
            className="border p-2 rounded"
          >
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserEdit;

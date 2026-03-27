import React, { useState, useEffect } from "react";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import UserDelete from "./UserDelete";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const getToken = () => localStorage.getItem("token");

  // ✅ Fetch users from API
  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/users", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      const data = await res.json();

      if (data?.data?.data) {
        setUsers(data.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ✅ Delete user
  const handleDelete = async (id) => {
    setDeleteLoading(true);

    try {
      const res = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      if (res.ok) {
        alert("Deleted successfully");
        setOpenDelete(false);
        setSelectedUser(null);
        getUsers();
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setDeleteLoading(false);
    }
  };

  // ✅ Search filter
  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchText.toLowerCase()) ||
      u.phone?.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Header  */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-indigo-800">User Management</h1>

        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2"
        />

        <button
          onClick={getUsers}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Refresh
        </button>

        <button
          onClick={() => setOpenAdd(true)}
          className="bg-indigo-700 text-white px-4 py-2 rounded-lg"
        >
          Add User
        </button>
      </div>

      {/* Modals */}
      {openAdd && (
        <UserAdd onClose={() => setOpenAdd(false)} refresh={getUsers} />
      )}

      {openEdit && selectedUser && (
        <UserEdit
          user={selectedUser}
          onClose={() => setOpenEdit(false)}
          refresh={getUsers}
        />
      )}

      {openDelete && selectedUser && (
        <UserDelete
          user={selectedUser}
          onClose={() => setOpenDelete(false)}
          onConfirm={handleDelete}
          loading={deleteLoading}
        />
      )}

      {/* Table */}
      <div className="border border-blue-800 rounded-lg shadow-md mt-6 overflow-hidden">
        <table className="w-full">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-4 py-4">No.</th>
              <th className="px-4 py-4">Name</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Phone</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Role</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No data found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr key={user.id} className="px-4 py-4 hover:bg-gray-100">
                  <td className="text-center">{index + 1}</td>
                  <td className="px-4 py-4">{user.name}</td>
                  <td className="px-4 py-4">{user.email}</td>
                  <td className="px-4 py-4">{user.phone}</td>
                  <td className="px-4 py-4">{user.status}</td>
                  <td className="px-4 py-4">
                    {user.role?.role_name || "No Role"}
                  </td>

                  <td className="text-center space-x-2">
                    {/* Edit */}
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setOpenEdit(true);
                      }}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setOpenDelete(true);
                      }}
                      className="bg-red-600 text-white px-3 py-1 rounded"
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
    </div>
  );
}

export default UserList;

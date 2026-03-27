import React from "react";

function DeleteUser({ user, onClose, onConfirm, loading }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white border-blue-700 border-2 rounded-[11px] w-[400px] shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-700 rounded-[8px] border border-2 p-2">
          Confirm Deletion
        </h2>

        <p className="mb-6 text-center text-1xl">
          Are you sure you want to delete user{" "}
          <span className="font-semibold text-red-500 text-2xl">
            {user.name}
          </span>
          ?
        </p>

        {/* Buttons side by side */}
        <div className="flex justify-between gap-4">
          {/* Cancel */}
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          {/* Delete */}
          <button
            onClick={() => onConfirm(user.id)}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;

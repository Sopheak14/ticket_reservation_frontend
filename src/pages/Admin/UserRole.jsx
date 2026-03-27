import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Table, Space, message } from "antd";

function UserRole() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  //Get token from localStorage (after login)
  const getToken = () => localStorage.getItem("token");

  //Fetch roles
  const getList = async () => {
    try {
      setLoading(true);
      const token = getToken();
      const res = await fetch("http://127.0.0.1:8000/api/roles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data && Array.isArray(data.data)) {
        setList(data.data);
      } else {
        message.error("Failed to load roles");
      }
    } catch (err) {
      console.error("Error fetching roles:", err);
      message.error("Error fetching roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  //Add new role
  const onFinish = async (item) => {
    const token = getToken();
    const payload = {
      role_name: item.roleName, // must match DB column
      description: item.description,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/roles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        message.success("Role added successfully");
        getList();
        handleCloseModal();
      } else {
        const errorData = await response.json();
        console.error("Failed to add role:", errorData);
        message.error(errorData.message || "Failed to add role");
      }
    } catch (err) {
      console.error("Error adding role:", err);
      message.error("Error adding role");
    }
  };

  //Delete role
  const handleDelete = async (role_id) => {
    const token = getToken();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/roles/${role_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        message.success("Role deleted successfully");
        getList();
      } else {
        const errorData = await response.json();
        console.error("Failed to delete role:", errorData);
        message.error(errorData.message || "Failed to delete role");
      }
    } catch (err) {
      console.error("Error deleting role:", err);
      message.error("Error deleting role");
    }
  };

  //Modal controls
  const handleOpenNew = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#211C84] mb-6">User Role List</h1>

      <Button
        onClick={handleOpenNew}
        type="primary"
        className="bg-[#211C84] hover:bg-[#5a4ebd]"
      >
        Add User Role
      </Button>

      {/* Add Role Modal */}
      <Modal
        title="Add User Role"
        open={open}
        onCancel={handleCloseModal}
        footer={null}
        className="border-2 rounded-[8px]"
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Role Name"
            name="roleName"
            rules={[{ required: true, message: "Please enter role name" }]}
          >
            <Input placeholder="Enter role name" className="h-10" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea
              placeholder="Enter role description"
              className="h-10 resize-none"
            />
          </Form.Item>

          <div className="flex mt-6 space-x-4">
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Roles Table */}
      <Table
        dataSource={list}
        rowKey="role_id"
        loading={loading}
        bordered
        className="border border-[#211C84] rounded-lg shadow-md mt-6"
        columns={[
          {
            title: "SL",
            key: "sl",
            align: "center",
            render: (_, __, index) => index + 1,
          },
          {
            key: "name",
            title: "Role Name",
            dataIndex: "role_name",
          },
          {
            key: "description",
            title: "Description",
            dataIndex: "description",
          },
          {
            key: "users_count",
            title: "Users Count",
            dataIndex: "users_count",
          },
          {
            key: "action",
            title: "Action",
            align: "center",
            render: (record) => (
              <Space>
                <Button type="primary">Edit</Button>
                <Button
                  danger
                  type="primary"
                  onClick={() => handleDelete(record.role_id)}
                >
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
      />
    </div>
  );
}

export default UserRole;

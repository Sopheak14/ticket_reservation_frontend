import React from "react";
import { Form, Input, Button, message } from "antd";

function Register() {
  const onFinish = async (values) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        message.success("Registration successful");
        // redirect to login
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        message.error(errorData.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      message.error("Error registering");
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "auto" }}>
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]}>
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        Register
      </Button>
    </Form>
  );
}

export default Register;

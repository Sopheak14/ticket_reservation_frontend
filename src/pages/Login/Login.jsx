import React from "react";
import { Form, Input, Button, message } from "antd";
import Login_logo from "../../assets/login.png";

function Login() {
  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        message.success("Login successful");
        window.location.href = "/dashboard";
      } else {
        message.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      message.error("Error logging in");
    }
  };

  const onCancel = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: Login form */}
      <div className="flex flex-1 items-center justify-center">
        <Form
          layout="vertical"
          onFinish={onFinish}
          className=" bg-gray-200 rounded-[8px] max-w-[400px] w-full shadow p-8"
          requiredMark={false}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-3xl text-blue-900">Login</h2>

          <Form.Item
            label={<span className="text-2xl text-blue-800">Email</span>}
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter email" className="!bg-[#8d89d6]" />
          </Form.Item>

          <Form.Item
            label={<span className="text-2xl text-blue-800">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              placeholder="Enter password"
              className="!bg-[#8d89d6]"
            />
          </Form.Item>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <Button type="primary" htmlType="submit" className="flex-1">
              Login
            </Button>
            <Button type="default" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
          </div>
        </Form>
      </div>

      {/* Right side: Photo */}
      <div className="flex-1 hidden md:block">
        <img src={Login_logo} alt="Login" />
      </div>
    </div>
  );
}

export default Login;

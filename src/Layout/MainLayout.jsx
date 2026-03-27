import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import dashboard from "../assets/Dashboard.png";
import customer from "../assets/Customer.png";
import all_tickets from "../assets/All_tickets.png";
import cancelled from "../assets/Cancelled.png";
import route_management from "../assets/Route_management.png";
import seat from "../assets/Seat.png";
import schedule from "../assets/Schedules.png";
import vehicles from "../assets/Vehicles.png";
import notification from "../assets/Notification.png";
import user from "../assets/User.png";
import user_role from "../assets/User_role.png";
import logo from "../assets/Logo1.png";
import logout from "../assets/Logout.png";

import MainLayoutNavbarDashboard from "./MainLayoutNavbarDashboard";

const { Sider, Content } = Layout;

function getItem(label, key, icon) {
  return { key, icon, label };
}

const items = [
  getItem(
    <span className="text-white">Dashboard</span>,
    "/dashboard",
    <img src={dashboard} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Customer</span>,
    "/customer",
    <img src={customer} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">All Tickets</span>,
    "/all_tickets",
    <img src={all_tickets} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Cancelled</span>,
    "/cancelled",
    <img src={cancelled} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Route Management</span>,
    "/route_management",
    <img src={route_management} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Seat</span>,
    "/seat",
    <img src={seat} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Schedule</span>,
    "/schedule",
    <img src={schedule} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Vehicles</span>,
    "/vehicles",
    <img src={vehicles} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">Notification</span>,
    "/notification",
    <img src={notification} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">User</span>,
    "/user",
    <img src={user} alt="" className="w-5 h-5" />,
  ),
  getItem(
    <span className="text-white">User Role</span>,
    "/user_role",
    <img src={user_role} alt="" className="w-5 h-5" />,
  ),
];

const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ match login storage
    navigate("/login");
  };

  return (
    <Layout className="min-h-screen w-full">
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={230}
        className="!bg-[#8d89d6] flex flex-col"
      >
        <div className="flex items-center justify-center h-20">
          <img src={logo} alt="logo" className="h-12" />
        </div>

        <Menu
          defaultSelectedKeys={["/dashboard"]}
          mode="inline"
          items={items}
          theme="dark"
          className="flex-1 !bg-[#211C84]"
          onClick={(item) => navigate(item.key)}
        />

        <div className="w-full p-3 bg-[#211C84] flex justify-center mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white hover:bg-[#5a4ebd] p-2 rounded"
          >
            <img src={logout} alt="Logout Icon" className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </Sider>

      <Layout>
        <div className="m-0 p-6 bg-gray-100 ">
          <MainLayoutNavbarDashboard />
        </div>

        <Content className="m-0 p-6 bg-gray-100 min-h-screen">
          <Outlet /> {/* ✅ renders the child route (Dashboard, etc.) */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

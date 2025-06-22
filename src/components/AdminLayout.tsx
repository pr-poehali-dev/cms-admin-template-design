import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { path: "/orders", label: "Заказы", icon: "ShoppingCart" },
    { path: "/products", label: "Товары", icon: "Package" },
    { path: "/analytics", label: "Аналитика", icon: "BarChart3" },
    { path: "/settings", label: "Настройки", icon: "Settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-16"} bg-white border-r border-gray-200 transition-all duration-300`}
      >
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Store" size={20} className="text-white" />
            </div>
            {isSidebarOpen && <h1 className="font-bold text-xl">AdminPanel</h1>}
          </div>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 transition-colors ${
                location.pathname === item.path
                  ? "bg-primary/10 text-primary border-r-2 border-primary"
                  : ""
              }`}
            >
              <Icon name={item.icon} size={20} />
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Icon name="Menu" size={20} />
            </Button>

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>АД</AvatarFallback>
              </Avatar>
              <Button variant="ghost" onClick={handleLogout}>
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

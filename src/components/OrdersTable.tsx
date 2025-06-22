import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OrdersTable = () => {
  const orders = [
    {
      id: "#12345",
      customer: "Иван Петров",
      date: "2024-01-15",
      status: "completed",
      total: 2450,
    },
    {
      id: "#12346",
      customer: "Мария Сидорова",
      date: "2024-01-15",
      status: "pending",
      total: 1200,
    },
    {
      id: "#12347",
      customer: "Алексей Иванов",
      date: "2024-01-14",
      status: "processing",
      total: 3600,
    },
    {
      id: "#12348",
      customer: "Елена Козлова",
      date: "2024-01-14",
      status: "completed",
      total: 890,
    },
    {
      id: "#12349",
      customer: "Дмитрий Смирнов",
      date: "2024-01-13",
      status: "cancelled",
      total: 1500,
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: {
        variant: "default" as const,
        label: "Выполнен",
        color: "bg-green-100 text-green-800",
      },
      pending: {
        variant: "secondary" as const,
        label: "Ожидает",
        color: "bg-yellow-100 text-yellow-800",
      },
      processing: {
        variant: "outline" as const,
        label: "В работе",
        color: "bg-blue-100 text-blue-800",
      },
      cancelled: {
        variant: "destructive" as const,
        label: "Отменен",
        color: "bg-red-100 text-red-800",
      },
    };
    const config = variants[status as keyof typeof variants];
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Заказы</h1>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Новый заказ
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Всего заказов
                </p>
                <p className="text-2xl font-bold">245</p>
              </div>
              <Icon name="ShoppingCart" size={24} className="text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Выполнено</p>
                <p className="text-2xl font-bold">198</p>
              </div>
              <Icon name="CheckCircle" size={24} className="text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">В обработке</p>
                <p className="text-2xl font-bold">32</p>
              </div>
              <Icon name="Clock" size={24} className="text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Отменено</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <Icon name="XCircle" size={24} className="text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Последние заказы</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">ID заказа</th>
                  <th className="text-left py-3 px-2">Клиент</th>
                  <th className="text-left py-3 px-2">Дата</th>
                  <th className="text-left py-3 px-2">Статус</th>
                  <th className="text-left py-3 px-2">Сумма</th>
                  <th className="text-left py-3 px-2">Действия</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2 font-medium">{order.id}</td>
                    <td className="py-3 px-2">{order.customer}</td>
                    <td className="py-3 px-2">{order.date}</td>
                    <td className="py-3 px-2">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="py-3 px-2">
                      {order.total.toLocaleString()} ₽
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit" size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersTable;

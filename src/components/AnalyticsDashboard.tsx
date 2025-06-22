import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AnalyticsDashboard = () => {
  const salesData = [
    { month: "Янв", sales: 12000, orders: 45 },
    { month: "Фев", sales: 15000, orders: 52 },
    { month: "Мар", sales: 18000, orders: 64 },
    { month: "Апр", sales: 22000, orders: 78 },
    { month: "Май", sales: 25000, orders: 89 },
    { month: "Июн", sales: 28000, orders: 95 },
  ];

  const topProducts = [
    { name: "Беспроводные наушники", sales: 145, revenue: 181250 },
    { name: "Смартфон Samsung", sales: 89, revenue: 311500 },
    { name: "Рюкзак туристический", sales: 67, revenue: 301500 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Аналитика</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Выручка</p>
                <p className="text-2xl font-bold">₽1,245,000</p>
                <p className="text-xs text-green-600">+12% за месяц</p>
              </div>
              <Icon name="TrendingUp" size={24} className="text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Заказы</p>
                <p className="text-2xl font-bold">2,456</p>
                <p className="text-xs text-green-600">+8% за месяц</p>
              </div>
              <Icon name="ShoppingCart" size={24} className="text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Клиенты</p>
                <p className="text-2xl font-bold">1,834</p>
                <p className="text-xs text-green-600">+15% за месяц</p>
              </div>
              <Icon name="Users" size={24} className="text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Конверсия</p>
                <p className="text-2xl font-bold">3.2%</p>
                <p className="text-xs text-red-600">-2% за месяц</p>
              </div>
              <Icon name="Target" size={24} className="text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Продажи по месяцам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesData.map((item, index) => (
                <div
                  key={item.month}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{item.month}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-32">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(item.sales / 30000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold min-w-20 text-right">
                      ₽{item.sales.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Топ товары</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        #{index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        {product.sales} продаж
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">
                      ₽{product.revenue.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Активность по дням недели</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => {
              const activity = [85, 92, 78, 88, 95, 67, 45][index];
              return (
                <div key={day} className="text-center">
                  <div className="h-32 bg-gray-100 rounded-lg mb-2 flex items-end justify-center p-2">
                    <div
                      className="w-full bg-primary rounded-sm"
                      style={{ height: `${activity}%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium">{day}</p>
                  <p className="text-xs text-gray-500">{activity}%</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;

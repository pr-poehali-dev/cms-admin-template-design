import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductsTable = () => {
  const products = [
    {
      id: 1,
      name: "Беспроводные наушники Sony",
      category: "Электроника",
      price: 12500,
      stock: 45,
      status: "active",
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy",
      category: "Электроника",
      price: 35000,
      stock: 12,
      status: "active",
    },
    {
      id: 3,
      name: 'Книга "JavaScript для начинающих"',
      category: "Книги",
      price: 1200,
      stock: 0,
      status: "inactive",
    },
    {
      id: 4,
      name: "Рюкзак туристический",
      category: "Спорт",
      price: 4500,
      stock: 23,
      status: "active",
    },
    {
      id: 5,
      name: "Кофемашина Delonghi",
      category: "Дом",
      price: 25000,
      stock: 8,
      status: "active",
    },
  ];

  const getStockBadge = (stock: number) => {
    if (stock === 0) return <Badge variant="destructive">Нет в наличии</Badge>;
    if (stock < 10) return <Badge variant="secondary">Мало</Badge>;
    return <Badge variant="default">В наличии</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Товары</h1>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Добавить товар
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Всего товаров
                </p>
                <p className="text-2xl font-bold">1,245</p>
              </div>
              <Icon name="Package" size={24} className="text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Активных</p>
                <p className="text-2xl font-bold">1,198</p>
              </div>
              <Icon name="CheckCircle" size={24} className="text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Заканчиваются
                </p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Icon
                name="AlertTriangle"
                size={24}
                className="text-yellow-500"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Нет в наличии
                </p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Icon name="XCircle" size={24} className="text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Каталог товаров</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Товар</th>
                  <th className="text-left py-3 px-2">Категория</th>
                  <th className="text-left py-3 px-2">Цена</th>
                  <th className="text-left py-3 px-2">Остаток</th>
                  <th className="text-left py-3 px-2">Статус</th>
                  <th className="text-left py-3 px-2">Действия</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon
                            name="Package"
                            size={16}
                            className="text-gray-500"
                          />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">{product.category}</td>
                    <td className="py-3 px-2 font-medium">
                      {product.price.toLocaleString()} ₽
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <span>{product.stock}</span>
                        {getStockBadge(product.stock)}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <Badge
                        variant={
                          product.status === "active" ? "default" : "secondary"
                        }
                      >
                        {product.status === "active" ? "Активен" : "Неактивен"}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Trash2" size={14} />
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

export default ProductsTable;

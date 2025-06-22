import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const SettingsPanel = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Настройки</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Профиль администратора</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="text-lg">АД</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Icon name="Upload" size={16} className="mr-2" />
                Изменить фото
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Имя</Label>
                <Input id="firstName" defaultValue="Админ" />
              </div>
              <div>
                <Label htmlFor="lastName">Фамилия</Label>
                <Input id="lastName" defaultValue="Администратор" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="admin@example.com" />
            </div>

            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" defaultValue="+7 (999) 123-45-67" />
            </div>

            <Button>
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Безопасность</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Текущий пароль</Label>
              <Input id="currentPassword" type="password" />
            </div>

            <div>
              <Label htmlFor="newPassword">Новый пароль</Label>
              <Input id="newPassword" type="password" />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
              <Input id="confirmPassword" type="password" />
            </div>

            <Button variant="outline">
              <Icon name="Key" size={16} className="mr-2" />
              Изменить пароль
            </Button>

            <hr />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Двухфакторная аутентификация</p>
                <p className="text-sm text-gray-500">
                  Дополнительная защита аккаунта
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Настройки системы</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Уведомления</h3>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email уведомления</p>
                  <p className="text-sm text-gray-500">
                    Получать уведомления о новых заказах
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS уведомления</p>
                  <p className="text-sm text-gray-500">
                    Уведомления на телефон
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push уведомления</p>
                  <p className="text-sm text-gray-500">
                    Уведомления в браузере
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Интерфейс</h3>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Темная тема</p>
                  <p className="text-sm text-gray-500">
                    Использовать темное оформление
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Компактный режим</p>
                  <p className="text-sm text-gray-500">
                    Уменьшенные отступы и размеры
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Автосохранение</p>
                  <p className="text-sm text-gray-500">
                    Автоматически сохранять изменения
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <hr />

          <div className="flex gap-4">
            <Button>
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить настройки
            </Button>
            <Button variant="outline">
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Сбросить
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPanel;

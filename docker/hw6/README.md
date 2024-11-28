# Docker & cloud technologies: Домашнее задание 6 (morning)

При помощи aws cli создайте security group с вашем Вашим именем и Вашей группой (например --group-name 20240915-andrew-sg) и описанием ("Security Group for MySQL and HTTPS and SSH”) (скопируйте id только что созданной sg, например, sg-092d4ec2208cc14a6)

При помощи aws cli Добавьте правила входящего (inbound) трафика для портов 3306 (с комментарием mysql) и 443 (с комментарием https) для 0.0.0.0: (для всех адресов) --cidr 0.0.0.0/0

В в AWS Management Console (UI) - найдите свою security group и добавьте еще одно правило: порт 22 (SSH) для вашего IP-адреса
В поле Type выберите SSH (порт 22 будет добавлен автоматически).
В поле Source выберите опцию My IP — это автоматически подставит ваш текущий IP-адрес.
Добавьте описание в поле Description (опционально, например, “SSH My IP”).

Пришлите результат выполнения команды (не забудьте указать id именно Вашей security group! ):

aws ec2 describe-security-groups --group-ids sg-092d4ec2208cc14a6 --query 'SecurityGroups[*].IpPermissions' --output json]

Пришлите команды, использованные для создания security group и правил (из п. 1 и 2)

Удалите Вашу security group с inbound и outbound правилами

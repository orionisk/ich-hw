# Задание 1

# Запустите контейнер из образа веб-сервера, например, nginx.
docker run --rm --name nginx-1 nginx

# Запустите контейнер в режиме, чтобы он продолжал работать длительное время (не останавливался мгновенно).
docker run --rm --name nginx-1 -d nginx

# Войдите в контейнер, используя команду exec, и проверьте наличие конфигурационного файла веб-сервера (/usr/share/nginx/html/index.html).
docker exec nginx-1 ls /usr/share/nginx/html/index.html && echo "Файл существует" || echo "Файл не найден"


# Получите имя хоста и сохраните его в переменной.
HOSTNAME=$(docker exec nginx-1 hostname)

# В строке <title>Welcome to nginx!</title> конфигурационного файла (/usr/share/nginx/html/index.html) замените Welcome to nginx! на Welcome from dcbc5bbf0564 , где dcbc5bbf0564 - результат выполнения команды hostname.
docker exec nginx-1 sed -i "s/Welcome to nginx!/Welcome from $HOSTNAME/" /usr/share/nginx/html/index.html

# Скопируйте из контейнера (docker cp) этот конфигурационный файл с исправленной строкой Welcome from dcbc5bbf0564 , где dcbc5bbf0564 - результат выполнения команды hostname и пришлите его.
docker cp nginx-1:/usr/share/nginx/html/index.html ./index.html

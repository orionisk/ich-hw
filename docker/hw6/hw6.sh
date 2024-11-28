#!/bin/fish

# paru -S aws-cli-v2
# aws configure

# При помощи aws cli создайте security group с вашем Вашим именем и Вашей группой
# (например --group-name 20240915-andrew-sg) и описанием
# ("Security Group for MySQL and HTTPS and SSH”)
# (скопируйте id только что созданной sg, например, sg-092d4ec2208cc14a6)

set SG_ID (aws ec2 create-security-group \
    --group-name "20241128-vadym-sg" \
    --description "Security Group for MySQL and HTTPS and SSH" \
    --query 'GroupId' \
    --output text)

echo "Created Security Group: $SG_ID"

# При помощи aws cli Добавьте правила входящего (inbound) трафика для портов 3306 
# (с комментарием mysql) и 443 (с комментарием https) для 0.0.0.0: (для всех адресов) 
# --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 3306, "ToPort": 3306, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "MySQL"}]}]'

aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 443, "ToPort": 443, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "HTTPS"}]}]'

# В в AWS Management Console (UI) - найдите свою security group и добавьте еще одно правило: порт 22 (SSH) для вашего IP-адреса
# В поле Type выберите SSH (порт 22 будет добавлен автоматически).
# В поле Source выберите опцию My IP — это автоматически подставит ваш текущий IP-адрес.
# Добавьте описание в поле Description (опционально, например, “SSH My IP”).

set MY_IP (curl -s https://checkip.amazonaws.com)
aws ec2 authorize-security-group-ingress \
    --group-id $SG_ID \
    --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 22, "ToPort": 22, "IpRanges": [{"CidrIp": "'$MY_IP'/32", "Description": "SSH My IP"}]}]'

aws ec2 describe-security-groups \
    --group-ids $SG_ID \
    --query 'SecurityGroups[*].IpPermissions' \
    --output json | sed "s|$MY_IP|123.123.123.123|g" > hw6.json
    
# Удалите Вашу security group с inbound и outbound правилами
aws ec2 delete-security-group --group-id $SG_ID

echo "Security group $SG_ID has been deleted" 

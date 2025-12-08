# giac# giac

http://46.224.33.198:8000



Comandos para el proyecto

apt update && apt upgrade -y
apt install git -y
git clone REPO && cd PROYECTO

apt install php php-cli php-fpm php-mbstring php-xml php-curl php-zip php-mysql php-gd php-bcmath -y
apt install composer -y
composer install

cp .env.example .env
php artisan key:generate

apt install mysql-server -y
mysql
CREATE DATABASE giacdb;
exit

npm install
npm run build

php artisan migrate --seed

php artisan serve


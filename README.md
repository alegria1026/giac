# GIAC.mx – Plataforma Web Administrable

GIAC.mx es una plataforma web desarrollada para ofrecer a clientes y visitantes un **landing page informativo**, junto con secciones internas que presentan información detallada sobre los servicios y áreas principales de la empresa.  
El sistema incluye un **dashboard privado de administración**, desde el cual la empresa puede modificar en tiempo real el contenido mostrado en el sitio público, garantizando dinamismo, control y actualización continua.

---

## Equipo de Desarrollo

| Matrícula | Nombre | GitHub |
|--------|------|---------|
| s22017041 | Yahir Humberto Alegría Rodríguez | [https://github.com/alegria1026](https://github.com/alegria1026) |
| s22017035 | Alejandra Bautista Ortíz| [https://github.com/Ortiz05Ale](https://github.com/Ortiz05Ale) |
| s22017032 | Luis Germán Cabrera Monteros | [https://github.com/cabrademontes27](https://github.com/cabrademontes27) |
| s22017011 | Juan Alejandro Santiago Gallegos |[ https://github.com/zS22017011](https://github.com/zs22017011) |
| s22017039 | Diana Iratze Solano Uscanga | [https://github.com/imnanadotcom](https://github.com/imnanadotcom) |

---

## Descripción del Proyecto

Este proyecto consiste en una plataforma web compuesta por dos partes:

### **1. Sitio Público (Landing + Secciones Informativas)**
- Presenta la empresa y sus ramas de servicios
- Incluye secciones internas con información detallada.
- Navegación clara mediante redirecciones.
- Cuenta con un formulario de contacto.

### **2. Panel de Administración Privado**
- Interfaz exclusiva para la empresa.
- Modificación en tiempo real del contenido público.
- Gestión centralizada de secciones informativas.

El objetivo es proporcionar una solución web **administrable, moderna y completamente adaptable por el cliente**, sin necesidad de soporte técnico para actualizar el contenido.

---

## Tecnologías Utilizadas

### **Frontend**
- React  
- TailwindCSS  
- Vite  

### **Backend**
- Laravel 11  
- PHP 8+  

### **Base de Datos**
- MySQL  

### **Herramientas y dependencias**
- Composer  
- Node.js & NPM    
- Git  
---

## Requisitos Previos

Asegúrate de contar con:

- PHP 8.1+  
- Composer  
- MySQL Server  
- Node.js + NPM  
- Git  
---

## Instalación y Ejecución del Proyecto

### **1. Actualizar paquetes e instalar Git**
git clone REPO && cd PROYECTO

### **2. Instalar Composer e instalar dependencias**
apt install composer -y
composer install

### **3. Configurar el archivo de entorno**
cp .env.example .env
php artisan key:generate

### **4. Instalar dependencias node y preparar el frontend**
npm install
npm run dev

### **5. Ejecutar migraciones y seeders**
php artisan migrate --seed

### **5. Levantar el servidor de desarrollo**
php artisan serve

Dirección temporal: http://46.224.33.198:8000



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


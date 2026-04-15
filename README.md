# Event Logger Pro

## Descripción del proyecto

Event Logger Pro es una aplicación web tipo CRUD que permite crear, visualizar y eliminar eventos en tiempo real.

El proyecto está construido con arquitectura full stack y desplegado en AWS EC2 usando Docker y Docker Compose.

Los eventos se almacenan en MongoDB y se exponen mediante una API REST desarrollada con Node.js y Express.

---

## Arquitectura

El sistema está compuesto por tres servicios principales ejecutándose en contenedores Docker:

Frontend (Nginx) → Backend (Node.js + Express) → Base de datos (MongoDB)

---

## Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Docker  
- Docker Compose  
- Nginx  
- AWS EC2  
- HTML  
- CSS  
- JavaScript (Vanilla)

---

## Ejecución local

### Clonar el repositorio
git clone <https://github.com/mauricioglpz/Avance-devops>  
cd avance-devops  

### Levantar el proyecto
docker-compose up -d --build  

### Acceso local
Frontend: http://localhost:8080  
Backend: http://localhost:3000  

---

## Despliegue en AWS EC2

### Conectarse a EC2
ssh -i "peso.pem" ec2-user@<34.229.134.133>  

### Instalar dependencias
sudo yum update -y  
sudo yum install git -y  
sudo yum install docker -y  
sudo service docker start  
sudo usermod -aG docker ec2-user  

### Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose  
sudo chmod +x /usr/local/bin/docker-compose  

### Clonar proyecto
git clone <URL_DEL_REPOSITORIO>  
cd avance-devops  

### Levantar contenedores
docker-compose up -d --build  

### Acceso en producción
Frontend: http://<IP_EC2>:8080  
Backend: http://<IP_EC2>:3000  

---

## Puertos utilizados

Frontend: 8080  
Backend: 3000  
MongoDB: 27017  

---

## Funcionalidades

- Crear eventos  
- Listar eventos  
- Eliminar eventos  
- Persistencia en MongoDB  
- API REST con Express  
- Contenedores Docker  
- Despliegue en AWS EC2  

---

## Estructura del proyecto

avance-devops/  
├── backend/  
├── frontend/  
├── docker-compose.yml  
└── logs/  

---

## Notas importantes

- El backend corre en el puerto 3000  
- El frontend se sirve con Nginx en el puerto 8080  
- La comunicación entre servicios es interna por Docker  
- MongoDB corre dentro de contenedor  

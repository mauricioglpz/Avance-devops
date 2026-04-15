# Event Logger Pro

## 📖 Descripción del proyecto

Event Logger Pro es una aplicación web tipo CRUD que permite crear, visualizar y eliminar eventos en tiempo real.

El proyecto está construido con arquitectura full stack y desplegado en AWS EC2 usando Docker y Docker Compose.

Los eventos se almacenan en MongoDB y se exponen mediante una API REST desarrollada con Node.js y Express.

---

## Arquitectura

El sistema está compuesto por tres servicios principales ejecutándose en contenedores Docker:

- Frontend (Nginx)
- Backend (Node.js + Express)
- Base de datos (MongoDB)

Flujo de la aplicación:

Frontend → Backend API → MongoDB

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- Nginx
- AWS EC2
- HTML, CSS, JavaScript

---

## Ejecución local

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd avance-devops

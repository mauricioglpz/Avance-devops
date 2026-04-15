#!/bin/bash

echo "Iniciando despliegue del proyecto..."

# detener contenedores previos
docker-compose down

# construir imágenes
docker-compose build

# levantar contenedores
docker-compose up -d

echo "Proyecto desplegado correctamente"
echo "Frontend: http://localhost:8080"
echo "Backend: http://localhost:3000"
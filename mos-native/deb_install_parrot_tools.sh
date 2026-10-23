#!/bin/bash

# Colores para la terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # Sin color

echo -e "${GREEN}--- Iniciando integración de Parrot OS en Debian ---${NC}"

# 1. Verificar si se ejecuta como root
if [ "$EUID" -ne 0 ]; then 
  echo -e "${RED}Por favor, ejecuta el script con sudo.${NC}"
  exit
fi

# 2. Instalar dependencias básicas
echo -e "\n${GREEN}[*] Instalando dependencias (curl, gnupg)...${NC}"
apt update && apt install -y curl gnupg

# 3. Añadir el repositorio de Parrot
echo -e "${GREEN}[*] Añadiendo repositorio parrot.list...${NC}"
echo "deb https://deb.parrot.sh/parrot/ rolling main contrib non-free non-free-firmware" > /etc/apt/sources.list.d/parrot.list

# 4. Importar la llave GPG oficial
echo -e "${GREEN}[*] Importando llave GPG de Parrot...${NC}"
curl -s https://deb.parrot.sh/parrot/keyring.gpg | gpg --dearmor -o /etc/apt/trusted.gpg.d/parrot-archive-keyring.gpg

# 5. Configurar prioridad (Pinning) para evitar que Parrot rompa Debian
# Esto hace que Debian prefiera sus propios paquetes a menos que le pidamos algo de Parrot
echo -e "${GREEN}[*] Configurando prioridades de repositorio (Apt Pinning)...${NC}"
cat <<EOF > /etc/apt/preferences.d/parrot-pinning
Package: *
Pin: release o=Parrot
Pin-Priority: 400
EOF

# 6. Actualizar repositorios
echo -e "${GREEN}[*] Actualizando índices de paquetes...${NC}"
apt update

echo -e "\n${GREEN}--- ¡Configuración completada! ---${NC}"
echo -e "Ahora puedes instalar herramientas. Ejemplos:"
echo -e "  sudo apt install parrot-tools-full"
echo -e "  sudo apt install metasploit-framework"
echo -e "  sudo apt install nmap"
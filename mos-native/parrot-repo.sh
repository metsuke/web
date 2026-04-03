# 1. Habilitar contrib, non-free y non-free-firmware en Debian
sudo sed -i 's/main/main contrib non-free non-free-firmware/' /etc/apt/sources.list*

# 2. Añadir el repositorio de Parrot (versión "echo" para Debian 13 / Parrot 7)
echo "deb https://deb.parrot.sh/parrot echo main contrib non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/parrot.list

# 3. Descargar e instalar la clave GPG de Parrot
curl -fsSL https://deb.parrot.sh/parrot/pool/main/p/parrot-archive-keyring/parrot-archive-keyring_2025.0_all.deb -o /tmp/parrot-keyring.deb
sudo dpkg -i /tmp/parrot-keyring.deb

# 4. Actualizar
sudo apt update
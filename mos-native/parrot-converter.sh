# 1. Actualiza Debian
sudo apt update && sudo apt upgrade -y

# 2. Instala git y curl (necesarios)
sudo apt install git curl -y

# 3. Descarga el script oficial desde GitLab
git clone https://gitlab.com/parrotsec/project/debian-conversion-script.git

# 4. Entra en la carpeta
cd debian-conversion-script

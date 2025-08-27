<?php
  // Obtener la base URL dinámicamente
  $base_url = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

  // Eliminar el segmento de URL que no existe
  $base_url = substr($base_url, 0, strrpos($base_url, '/'));
  
  // Obtener la URL solicitada
  $requested_url = "" . $_SERVER['REQUEST_URI'];
    
  // Itchio cambia --- por — asi que revierto el cambio
  $requested_url = str_replace('—', '---', $requested_url);
  $requested_url = str_replace('%E2%80%94', '---', $requested_url);
  $requested_url = urldecode($requested_url);
  

  // Directorio donde se encuentran los ficheros
  $parts = explode('/', $requested_url);
  $ultimo_slash = array_pop($parts);
  $directory = '.' . implode('/', $parts); // Directorio donde se encuentran los ficheros
  
  // Ruta del archivo de caché
  $cache_file = './cache/' . md5($requested_url) . '.txt';

  // Verificar si el archivo de caché existe y no ha expirado
  if (file_exists($cache_file) && filemtime($cache_file) > time() - 3600) {
    // Leer el contenido del archivo de caché
    $redirect_url = file_get_contents($cache_file);

    // Redirigir a la URL completa
    header('Location: ' . $redirect_url);
    exit;
  }

  // Buscar el fichero que coincide con la URL solicitada
  $files = scandir($directory);
  foreach ($files as $file) {
    $jander_url = $requested_url;
    $jander_url = implode('---', array_slice(explode('---', $jander_url), 0, -1));
    if (strpos($file, basename($jander_url)) === 0) {
      // Redirigir a la URL completa
      $redirect_url = $base_url . '/' . $file;
      
      if (substr($redirect_url, -5) === '.html') {
        // Guardar el contenido en el archivo de caché
        file_put_contents($cache_file, $redirect_url);

        // Redirigir a la URL completa
        header('Location: ' . $redirect_url);
        exit;
      }
    }
  }

  // Seleccionar una imagen aleatoria de la carpeta ./assets/img/content-publicbrain
  $image_dir = './assets/img/content-publicbrain';
  $random_image = null;
  $background_style = "";

  // Verificar si la carpeta de imágenes existe
  if (is_dir($image_dir)) {
    $images = array_filter(scandir($image_dir), function($file) use ($image_dir) {
      $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
      return in_array($ext, ['jpg', 'jpeg', 'png', 'gif']) && is_file($image_dir . '/' . $file);
    });
    $random_image = !empty($images) ? $images[array_rand($images)] : null;
    $background_style = $random_image ? "background-image: url('https://metsuke.com/$image_dir/$random_image'); background-size: auto 200vh; background-position: center; background-repeat: no-repeat;" : "";
  }

  // Mostrar la página de error 404
  header('HTTP/1.1 404 Not Found');
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página no encontrada</title>
</head>
<body style="<?php echo $background_style; ?> background-color:rgb(0, 0, 0);">
  <center>
    <div style="opacity: 1.0; border: 10px solid rgb(148, 26, 26); border-radius: 100px; background-color: white; min-width: 80vw; position: relative; margin-top: 4rem; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.2);">
      <img style="max-width: 20vw; height: auto;" class="logo" src="https://www.metsuke.com/assets/img/logo/MetsukeLogo.png" alt="Logo Metsuke">
      <h1>Página no encontrada</h1>
      <p><?php echo $requested_url; ?></p>
      <a href="https://metsuke.com">Volver a la página principal</a>
    </div>
  </center>
</body>
</html>
<?php
  exit;
?>
// Obtiene las preferencias de idioma del navegador y las muestra en una alerta
function getLanguagePreferences() {

    const verbose = 0; // Cambia a 0 para desactivar alerts

    // Obtener idiomas del navegador, solo la parte general en mayúsculas, sin duplicados
    const languages = [...new Set(navigator.languages.map(lang => lang.split('-')[0].toUpperCase()))];
    
    // Encontrar el encabezado <h2> con texto exacto "Lang"
    const h2 = Array.from(document.getElementsByTagName('h2')).find(h => h.textContent.trim() === 'Lang');
    
    // Encontrar el <ul> que contiene el <li> con los enlaces de idiomas
    const ul = document.querySelector('ul');
    if (!ul) {
        return languages;
    }
    
    // Encontrar el <li> con los enlaces de idiomas
    const li = ul.querySelector('li');
    if (!li) {
        return languages;
    }
    
    // Encontrar el idioma activo (el que está dentro de <strong>)
    const activeLang = document.documentElement.lang.split('-')[0].toUpperCase();
    
    // Array con los 20 idiomas más comunes y traducciones de "Contenido disponible en los siguientes idiomas"
    const translations = {
        'CA': 'Contingut disponible en els següents idiomes',
        'EN': 'Content available in the following languages',
        'ES': 'Contenido disponible en los siguientes idiomas'
    };
    
    // Si existe el <h2>, cambiar su texto según el idioma activo
    if (h2) {
        h2.textContent = translations[activeLang] || translations['EN'];
    }
    
    // Si el idioma activo no es ES, terminar
    verbose && alert(activeLang);
    if (activeLang !== 'ES') {
        return languages;
    }
    
    // Obtener todos los enlaces de idiomas disponibles
    const links = Array.from(document.querySelectorAll('h2 + ul li a.internal'));
    verbose && alert(links);

    const availableLangs = Array.from(links).map(link => ({
        code: link.textContent.trim().toUpperCase(),
        href: link.getAttribute('href')
    }));

    // Formatear los objetos en un string legible
    const formattedArray = availableLangs
    .map((item, index) => {
    return `Elemento ${index + 1}:\n${Object.entries(item)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}`;
    })
    .join('\n\n');
    verbose && alert('Contenido del array:\n\n' + formattedArray);
    
    // Recorrer las preferencias de idioma en orden
    verbose && alert(languages);
    for (const lang of languages) {
        // Si encontramos ES, terminamos
        verbose && alert(lang);
        if (lang === 'ES') {
            return languages;
        }
        
        // Buscar si el idioma preferido está disponible
        const matchingLang = availableLangs.find(avail => avail.code === lang);
        if (matchingLang) {
            // Redirigir al enlace correspondiente
            verbose && alert(matchingLang.href);
            window.location.href = matchingLang.href;
            return languages; // La redirección detendrá la ejecución, pero retornamos por completitud
        }
    }
    
    // Retornar el array de idiomas si no se redirige
    return languages;
}
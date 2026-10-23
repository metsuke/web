const efemerides = {
    '05-11': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Dia Lanzamiento Sega Saturn en Norteamérica' },
    '05-12': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana lanzamiento Sega Saturn en Norteamérica' },
    '05-13': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana lanzamiento Sega Saturn en Norteamérica' },
    '05-14': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana lanzamiento Sega Saturn en Norteamérica' },
    '05-15': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana lanzamiento Sega Saturn en Norteamérica' },
    '05-16': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana lanzamiento Sega Saturn en Norteamérica' },
    '05-17': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana lanzamiento Sega Saturn en Norteamérica' },
    '07-02': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Dia Lanzamiento Shinning Force II en España y Europa' },
    '07-03': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en España y Europa' },
    '07-04': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en España y Europa' },
    '07-05': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en España y Europa' },
    '07-06': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en España y Europa' },
    '07-07': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en España y Europa' },
    '07-08': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Dia Lanzamiento Sega Saturn en España y Europa' },
    '07-09': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana Lanzamiento Sega Saturn en España y Europa' },
    '07-10': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana Lanzamiento Sega Saturn en España y Europa' },
    '07-11': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana Lanzamiento Sega Saturn en España y Europa' },
    '07-12': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana Lanzamiento Sega Saturn en España y Europa' },
    '07-13': { system: 'Lanzamiento Sega Saturn', year: 1995, desc: 'Semana Lanzamiento Sega Saturn en España y Europa' },
    '07-14': { system: 'Lanzamiento MH218', year: 2025, desc: 'Dia Lanzamiento Microhobby 218' },
    '07-15': { system: 'Lanzamiento MH218', year: 2025, desc: 'Semana Lanzamiento Microhobby 218' },
    '07-16': { system: 'Lanzamiento MH218', year: 2025, desc: 'Semana Lanzamiento Microhobby 218' },
    '07-17': { system: 'Lanzamiento MH218', year: 2025, desc: 'Semana Lanzamiento Microhobby 218' },
    '07-18': { system: 'Lanzamiento MH218', year: 2025, desc: 'Semana Lanzamiento Microhobby 218' },
    '07-19': { system: 'Lanzamiento MH218', year: 2025, desc: 'Semana Lanzamiento Microhobby 218' },
    '07-20': { system: 'Lanzamiento MH218', year: 2025, desc: 'Semana Lanzamiento Microhobby 218' },
    '08-29': { system: 'Dia Mundial Videojuego', year: 2008, desc: 'Dia Mundial del Videojuego', ref: 'https://efemeridesvideojuegos.com/efemerides-videojuegos-21-de-julio/' },
    '10-01': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Dia Lanzamiento Shinning Force II en Japón' },
    '10-02': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Semana Lanzamiento Shinning Force II en Japón' },
    '10-03': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Semana Lanzamiento Shinning Force II en Japón' },
    '10-04': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Semana Lanzamiento Shinning Force II en Japón' },
    '10-05': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Semana Lanzamiento Shinning Force II en Japón' },
    '10-06': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Semana Lanzamiento Shinning Force II en Japón' },
    '10-07': { system: 'Lanzamiento Shinning Force 2', year: 1993, desc: 'Semana Lanzamiento Shinning Force II en Japón' },
    '10-19': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Dia Lanzamiento Shinning Force II en Norteamérica' },
    '10-20': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en Norteamérica' },
    '10-21': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en Norteamérica' },
    '10-22': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en Norteamérica' },
    '10-23': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en Norteamérica' },
    '10-24': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en Norteamérica' },
    '10-25': { system: 'Lanzamiento Shinning Force 2', year: 1994, desc: 'Semana Lanzamiento Shinning Force II en Norteamérica' },
    '11-04': { system: 'Lanzamiento Pixels', year: 2024, desc: 'Dia Lanzamiento Revista Pixels' },
    '11-05': { system: 'Lanzamiento MH218', year: 1984, desc: 'Dia Lanzamiento Revista Microhobby' },
    '11-06': { system: 'Lanzamiento Pixels', year: 2024, desc: 'Semana Lanzamiento Revista Pixels' },
    '11-07': { system: 'Lanzamiento MH218', year: 1984, desc: 'Semana Lanzamiento Revista Microhobby' },
    '11-08': { system: 'Lanzamiento Pixels', year: 2024, desc: 'Semana Lanzamiento Revista Pixels' },
    '11-09': { system: 'Lanzamiento MH218', year: 1984, desc: 'Semana Lanzamiento Revista Microhobby' },
    '11-10': { system: 'Lanzamiento Pixels', year: 2024, desc: 'Semana Lanzamiento Revista Pixels' },
    '11-11': { system: 'Lanzamiento MH218', year: 1984, desc: 'Semana Lanzamiento Revista Microhobby' },
    '11-22': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Dia Lanzamiento Sega Saturn en Japón' },
    '11-23': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Semana Lanzamiento Sega Saturn en Japón' },
    '11-24': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Semana Lanzamiento Sega Saturn en Japón' },
    '11-25': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Semana Lanzamiento Sega Saturn en Japón' },
    '11-26': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Semana Lanzamiento Sega Saturn en Japón' },
    '11-27': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Semana Lanzamiento Sega Saturn en Japón' },
    '11-28': { system: 'Lanzamiento Sega Saturn', year: 1994, desc: 'Semana Lanzamiento Sega Saturn en Japón' },
};
let eventData = "Construyendo la plena inclusión a través del videojuego";

/*

https://efemeridesvideojuegos.com/efemerides-videojuegos/efemerides-videojuegos-julio/

Consolas

- Nintendo 3DS: 26 de febrero de 2011 (Japón)
- Sony PlayStation 2: 4 de marzo de 2000 (Japón)
- Nintendo Switch: 3 de marzo de 2017 (Mundial)
- Nintendo Game Boy Advance: 21 de marzo de 2001 (Japón)
- Nintendo Game Boy: 21 de abril de 1989 (Japón)
- Atari 7800: 14 de mayo de 1986 (EE. UU.)
- Magnavox Odyssey: 27 de mayo de 1972 (EE. UU.)
- Nintendo 64: 23 de junio de 1996 (Japón)
- Nintendo Entertainment System (NES) / Famicom: 15 de julio de 1983 (Japón)
- Atari 2600: 11 de septiembre de 1977 (EE. UU.)
- Nintendo GameCube: 14 de septiembre de 2001 (Japón)
- Sega Game Gear: 6 de octubre de 1990 (Japón)
- Sega Master System: 20 de octubre de 1985 (Japón)
- Sega Mega Drive / Genesis: 29 de octubre de 1988 (Japón)
- Microsoft Xbox Series X|S: 10 de noviembre de 2020 (Mundial)
- Sony PlayStation 3: 11 de noviembre de 2006 (Japón)
- Sony PlayStation 5: 12 de noviembre de 2020 (EE. UU., Japón, otros)
- Microsoft Xbox: 15 de noviembre de 2001 (EE. UU.)
- Sony PlayStation 4: 15 de noviembre de 2013 (EE. UU.)
- Nintendo Wii U: 18 de noviembre de 2012 (EE. UU.)
- Nintendo Wii: 19 de noviembre de 2006 (EE. UU.)
- Super Nintendo Entertainment System (SNES): 21 de noviembre de 1990 (Japón)
- Nintendo DS: 21 de noviembre de 2004 (EE. UU.)
- Microsoft Xbox 360: 22 de noviembre de 2005 (EE. UU.)
- Microsoft Xbox One: 22 de noviembre de 2013 (EE. UU.)
- Sony PlayStation: 3 de diciembre de 1994 (Japón)
- Sony PlayStation Portable (PSP): 12 de diciembre de 2004 (Japón)
- Sony PlayStation Vita: 17 de diciembre de 2011 (Japón)

Notas Consolas

Las fechas corresponden al lanzamiento inicial en el mercado indicado (generalmente Japón o EE. UU.).
No se incluyen sistemas con fechas imprecisas o sin día exacto confirmado en las fuentes disponibles.
La lista se basa en datos históricos de Vandal y publicaciones en X, priorizando exactitud.vandal.elespanol.com

Microordenadores

- Altair 8800: 2 de enero (1975, EE. UU.) - Primer microordenador comercial de MITS, basado en Intel 8080.
- Commodore PET 2001: 7 de enero (1977, EE. UU.) - Computadora personal todo en uno de Commodore, presentada en el CES.
- Commodore C128: 10 de enero (1985, EE. UU.) - Sucesor del C64, con 128 KB de RAM y compatibilidad con CP/M.
- Sinclair ZX80: 29 de enero (1980, Reino Unido) - Primer microordenador de Sinclair, con 1 KB de RAM, vendido por £99.95.
- Sinclair ZX81: 5 de marzo (1981, Reino Unido) - Microordenador económico de Sinclair, sucesor del ZX80, con 1 KB de RAM.
- Apple I: 1 de abril (1976, EE. UU.) - Primera computadora de Apple, diseñada por Steve Wozniak, con salida de video para monitores.
- Commodore Amiga 500: 2 de abril (1987, EE. UU.) - Computadora personal de 16 bits, popular para juegos y multimedia.
- ZX Spectrum: 23 de abril (1982, Reino Unido) - Microordenador de Sinclair Research, líder en el mercado europeo.
- Texas Instruments TI-99/4A: 5 de junio (1981, EE. UU.) - Sucesor del TI-99/4, con mejoras en gráficos y sonido.
- Apple II: 10 de junio (1977, EE. UU.) - Computadora personal icónica de Apple, parte de la "Trinidad de 1977".
- Amstrad CPC 464: 21 de junio (1984, Reino Unido) - Computadora personal con teclado integrado y unidad de cinta, popular en Europa.
- Commodore 64: 1 de agosto (1982, EE. UU.) - Uno de los computadores personales más vendidos, con 64 KB de RAM.
- Tandy TRS-80 Model I: 3 de agosto (1977, EE. UU.) - Computadora personal de Radio Shack, apodada "Trash-80", asequible y popular.
- IBM Personal Computer (Model 5150): 12 de agosto (1981, EE. UU.) - Estableció el estándar para PCs compatibles con arquitectura abierta.
- Atari 400: 6 de noviembre (1979, EE. UU.) - Microordenador de Atari con teclado de membrana, orientado a juegos.
- Atari 800: 6 de noviembre (1979, EE. UU.) - Versión de gama alta de Atari, con teclado completo y mayor capacidad gráfica.
- Commodore VIC-20: 3 de noviembre (1980, EE. UU.) - Primer computador personal en vender un millón de unidades, conocido como "The Friendly Computer".
- Acorn BBC Micro Model B: 1 de diciembre (1981, Reino Unido) - Computadora educativa de Acorn, popular en escuelas británicas.

Máquinas estilo Game & Watch

- Game & Watch (Gold Series - Manhole): 29 de enero (1981, Japón) - Primer título de la serie Gold de Nintendo.
- Game & Watch (Wide Screen - Turtle Bridge): 1 de febrero (1982, Japón) - Título de la serie Wide Screen.
- Game & Watch (Wide Screen - Chef): 4 de marzo (1981, Japón) - Título de la serie Wide Screen.
- Game & Watch (Multi Screen - Mario Bros.): 14 de marzo (1983, Japón) - Título Multi Screen con Mario Bros.
- Game & Watch (Tabletop - Mario’s Cement Factory): 16 de abril (1983, Japón) - Título de la serie Tabletop.
- Game & Watch (Silver Series - Ball): 28 de abril (1980, Japón) - Primer título de la serie Game & Watch.
- Game & Watch (Tabletop - Donkey Kong Jr.): 28 de abril (1983, Japón) - Título de la serie Tabletop.
- Game & Watch (Multi Screen - Oil Panic): 28 de mayo (1982, Japón) - Título Multi Screen.
- Game & Watch (Multi Screen - Donkey Kong): 3 de junio (1982, Japón) - Primer título Multi Screen, con Donkey Kong.
- Game & Watch (Silver Series - Flagman): 5 de junio (1980, Japón) - Segundo título de la serie Silver.
- Game & Watch (Crystal Screen - Super Mario Bros.): 6 de junio (1988, Japón) - Título de la serie Crystal Screen.
- Game & Watch (Wide Screen - Parachute): 19 de junio (1981, Japón) - Primer título de la serie Wide Screen.
- Game & Watch (Wide Screen - Octopus): 20 de junio (1981, Japón) - Título de la serie Wide Screen.
- Game & Watch (Super Mario Bros.): 25 de junio (1986, Japón) - Edición especial con Super Mario Bros.
- Game & Watch (Silver Series - Vermin): 10 de julio (1980, Japón) - Tercer título de la serie Silver.
- Game & Watch (Multi Screen - Punch-Out!!): 31 de julio (1984, Japón) - Título Multi Screen basado en Punch-Out!!.
- Game & Watch (Multi Screen - Zelda): 26 de agosto (1989, Japón) - Título Multi Screen basado en Zelda.
- Game & Watch (Panorama Screen - Donkey Kong): 8 de octubre (1983, Japón) - Título de la serie Panorama Screen.
- Game & Watch (New Wide Screen - Donkey Kong Jr.): 26 de octubre (1982, Japón) - Título de la serie New Wide Screen.
- Game & Watch (Panorama Screen - Mario’s Bombs Away): 10 de noviembre (1983, Japón) - Título de la serie Panorama Screen.
- Microvision: 12 de noviembre (1979, EE. UU.) - Primera consola portátil con cartuchos intercambiables, de Milton Bradley.
- Game & Watch (Multi Screen - Green House): 6 de diciembre (1982, Japón) - Título Multi Screen.

Notas Microordenadores y G&W

Microordenadores: La lista incluye sistemas representativos de los años 70 y 80, cuando los microordenadores (computadoras personales basadas en microprocesadores) dominaron el mercado. No se incluyeron sistemas como el Sinclair ZX80 (1980) o el BBC Micro (1981) porque no se encontraron fechas exactas con día específico en las fuentes disponibles.
Máquinas estilo Game & Watch: Estas son consolas portátiles con juegos preinstalados, generalmente con pantallas LCD, similares a la serie Game & Watch de Nintendo. La Microvision se incluye como precursora, aunque usaba cartuchos. No se incluyeron otras portátiles como la Atari Lynx (mencionada en) debido a la falta de una fecha exacta con día confirmado.
Fuentes: Las fechas de los microordenadores provienen principalmente de fuentes como Wikipedia y Computer History Museum (,). Las fechas de Game & Watch y Microvision se basan en información de Wikipedia y sitios de Nintendo (,).en.wikipedia.orgscience.howstuffworks.comen.wikipedia.org
Orden: La lista está organizada por categoría (microordenadores y máquinas estilo Game & Watch) y dentro de cada categoría, por fecha cronológica.
Limitaciones: Algunos dispositivos, como el Color TV-Game 6 (1977) de Nintendo, no se incluyeron porque no encajan estrictamente en el estilo Game & Watch (son consolas domésticas) o porque no tienen fechas exactas confirmadas con día.

*/

function getEfemeridesCSS() {
    // Get current date or test date from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const testDate = urlParams.get('test_date');
    const currentDate = testDate ? new Date(testDate) : new Date();

    console.log('testdate:', testDate); // Depuración
    console.log('currentdate:', currentDate); // Depuración
    console.log('currentDate.getDate():', currentDate.getDate()); // Debería ser 14
    console.log('currentDate.getMonth():', currentDate.getMonth()); // Debería ser 6 (julio, meses van de 0-11)

    // Format date for comparison (MM-DD) using local methods
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Meses van de 0-11, sumamos 1
    const day = currentDate.getDate().toString().padStart(2, '0'); // Día del mes
    const monthDay = `${month}-${day}`;

    console.log('monthDay:', monthDay); // Depuración

    let cssFile = 'default.css';
    
    // Check if current date matches an efemérides
    if (efemerides[monthDay]) {
        const system = efemerides[monthDay].system;
        cssFile = system.toLowerCase().replace(/[^a-z0-9-]/g, '_') + '.css';
        
        // Obtener el año actual
        const currentYear = new Date().getFullYear();

        // Calcular la diferencia en años
        const yearsDifference = currentYear - efemerides[monthDay].year;
        
        switch (yearsDifference) {
            case 0:
                eventData = "¡Está pasando AHORA!: " + efemerides[monthDay].desc;
                break;
            case 1:
                eventData = "¡Primer Aniversario!: " + efemerides[monthDay].desc;
                break;
            default:
                eventData = "¡" + yearsDifference + " Aniversario!: " + efemerides[monthDay].desc;
                break;
        }
    }

    return cssFile;
}

// Function to apply the CSS file dynamically
function applyEfemeridesCSS() {
    const cssFile = getEfemeridesCSS();
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `https://metsuke.com/assets/css/z_ef_${cssFile}`; // Adjust path as needed
    document.head.appendChild(linkElement);

    if (eventData!="") {
        // Selecciona el h2 dentro del header
        const h2Element = document.querySelector('header h2');
        // Asigna el contenido de eventData al texto del h2
        h2Element.textContent = eventData;
    }
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyEfemeridesCSS);
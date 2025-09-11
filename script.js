// Lista de archivos PDF disponibles
const pdfFiles = [
    {
        filename: "1. CONFERENCIA CAMPEONES COLABORADORES 2025 (1).pdf",
        title: "Conferencia Campeones Colaboradores 2025",
        description: "Presentación sobre colaboradores destacados",
        path: "Archivos/1. CONFERENCIA CAMPEONES COLABORADORES 2025 (1).pdf"
    },
    {
        filename: "10. PRESENTACIÓN XYLOSANDRUS MORIGERUS lSEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ.pdf",
        title: "Xylosandrus Morigerus - Seminario de Investigación",
        description: "Investigación y transferencia en café",
        path: "Archivos/10. PRESENTACIÓN XYLOSANDRUS MORIGERUS lSEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ.pdf"
    },
    {
        filename: "11. Experiencia piloto con ofertas de servicio vinculados a ERSDP.pdf",
        title: "Experiencia piloto ERSDP",
        description: "Ofertas de servicio vinculados a ERSDP",
        path: "Archivos/11. Experiencia piloto con ofertas de servicio vinculados a ERSDP.pdf"
    },
    {
        filename: "12. Evaluación de enmiendas calcáreas en diferentes formulaciones.pdf",
        title: "Evaluación de enmiendas calcáreas",
        description: "Diferentes formulaciones de enmiendas",
        path: "Archivos/12. Evaluación de enmiendas calcáreas en diferentes formulaciones.pdf"
    },
    {
        filename: "13. COMPORTAMIENTO DE LA DINÁMICA DE ABSORCIÓN y LA EFICIENCIA DE NUTRIENTES EN LAS ETAPAS FENOLOGICAS DE CAFETALES.pdf",
        title: "Dinámica de absorción y eficiencia de nutrientes",
        description: "Etapas fenológicas de cafetales",
        path: "Archivos/13. COMPORTAMIENTO DE LA DINÁMICA DE ABSORCIÓN y LA EFICIENCIA DE NUTRIENTES EN LAS ETAPAS FENOLOGICAS DE CAFETALES.pdf"
    },
    {
        filename: "14. Evaluación de las Frecuencias y Formas de Aplicación.pdf",
        title: "Frecuencias y formas de aplicación",
        description: "Evaluación de métodos de aplicación",
        path: "Archivos/14. Evaluación de las Frecuencias y Formas de Aplicación.pdf"
    },
    {
        filename: "15. Rendimientos cosecha 24 25.pdf",
        title: "Rendimientos cosecha 2024-2025",
        description: "Análisis de rendimientos de cosecha",
        path: "Archivos/15. Rendimientos cosecha 24 25.pdf"
    },
    {
        filename: "16. EFECTO SOBRE EL CONTENIDO DE COMPUESTOS QUÍMICOS EN TRES VARIEDADES.pdf",
        title: "Efecto en compuestos químicos",
        description: "Tres variedades de café analizadas",
        path: "Archivos/16. EFECTO SOBRE EL CONTENIDO DE COMPUESTOS QUÍMICOS EN TRES VARIEDADES.pdf"
    },
    {
        filename: "17. Dureza del Agua PPT Semunario Nacional sept 2025 PINECO.pdf",
        title: "Dureza del Agua - Seminario Nacional",
        description: "Seminario Nacional PINECO Septiembre 2025",
        path: "Archivos/17. Dureza del Agua PPT Semunario Nacional sept 2025 PINECO.pdf"
    },
    {
        filename: "18. PERSPECTIVAS DEL MERCADO ANTE EUDR - SEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ 09.2025 (2).pdf",
        title: "Perspectivas del mercado ante EUDR",
        description: "Seminario de Investigación y Transferencia en Café",
        path: "Archivos/18. PERSPECTIVAS DEL MERCADO ANTE EUDR - SEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ 09.2025 (2).pdf"
    },
    {
        filename: "2. Avances y perspectiva ERSDP.pdf",
        title: "Avances y perspectiva ERSDP",
        description: "Estado actual y perspectivas futuras",
        path: "Archivos/2. Avances y perspectiva ERSDP.pdf"
    },
    {
        filename: "3. Evaluacion de la cosecha semimecanizada en Honduras. (1).pdf",
        title: "Evaluación de cosecha semimecanizada",
        description: "Análisis en Honduras",
        path: "Archivos/3. Evaluacion de la cosecha semimecanizada en Honduras. (1).pdf"
    },
    {
        filename: "4. DETERMINACIÓN DE LA CALIDAD EN LLENADO DE FRUTO Y DISTURBIOS FISIOLÓGICOS.pdf",
        title: "Calidad en llenado de fruto",
        description: "Disturbios fisiológicos en el desarrollo",
        path: "Archivos/4. DETERMINACIÓN DE LA CALIDAD EN LLENADO DE FRUTO Y DISTURBIOS FISIOLÓGICOS.pdf"
    },
    {
        filename: "5. Evaluacion y Selección de variedades Brasileñas altamente productivas.pdf",
        title: "Variedades brasileñas productivas",
        description: "Evaluación y selección de variedades",
        path: "Archivos/5. Evaluacion y Selección de variedades Brasileñas altamente productivas.pdf"
    },
    {
        filename: "6. Pureza y limpieza genética en lotes semilleros.pdf",
        title: "Pureza y limpieza genética",
        description: "Análisis en lotes semilleros",
        path: "Archivos/6. Pureza y limpieza genética en lotes semilleros.pdf"
    },
    {
        filename: "7. Desarrollo y Selección de Hìbridos F1 altamente productivos y resistentes a roya del café_.pdf",
        title: "Híbridos F1 resistentes a roya",
        description: "Desarrollo y selección de híbridos",
        path: "Archivos/7. Desarrollo y Selección de Hìbridos F1 altamente productivos y resistentes a roya del café_.pdf"
    },
    
    {
        filename: "8. DETERMINACIÓN DE RESISTENCIA GENÉTICA A LA ROYA DEL CAFÉ VARIEDADES PROMISORIAS DE HONDURAS Y LA REGIÓN..pdf",
        title: "Resistencia genética a la roya",
        description: "Variedades promisorias de Honduras y la región",
        path: "Archivos/8. DETERMINACIÓN DE RESISTENCIA GENÉTICA A LA ROYA DEL CAFÉ VARIEDADES PROMISORIAS DE HONDURAS Y LA REGIÓN..pdf"
    },
    {
        filename: "Programa XII Seminario.pdf",
        title: "Programa XII Seminario",
        description: "Programa del XII Seminario",
        path: "Archivos/Programa XII Seminario.pdf"
    }
];

// Elementos del DOM
const pdfGrid = document.getElementById('pdfGrid');
const searchInput = document.getElementById('searchInput');

// Función para verificar si un archivo PDF existe
async function checkPdfExists(path) {
    try {
        const response = await fetch(path, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Función para crear una tarjeta de PDF
function createPdfCard(pdf) {
    const card = document.createElement('div');
    card.className = 'pdf-card';
    card.innerHTML = `
        <div class="pdf-preview">
            <div class="pdf-icon">📄</div>
        </div>
        <h3>${pdf.title}</h3>
        <div class="pdf-info">${pdf.description}</div>
        <button class="view-btn" onclick="openPdf('${pdf.path}', '${pdf.title}')">
            Ver Presentación
        </button>
    `;
    return card;
}

// Función para mostrar todos los PDFs
function displayPdfs(pdfs) {
    pdfGrid.innerHTML = '';
    
    if (pdfs.length === 0) {
        pdfGrid.innerHTML = `
            <div class="no-results">
                <div class="icon">🔍</div>
                <p>No se encontraron presentaciones que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }
    
    pdfs.forEach(pdf => {
        const card = createPdfCard(pdf);
        pdfGrid.appendChild(card);
    });
}

// Función para filtrar PDFs
function filterPdfs(searchTerm) {
    const filtered = pdfFiles.filter(pdf => 
        pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pdf.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pdf.filename.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayPdfs(filtered);
}

// Función para abrir un PDF en el visor
function openPdf(path, title) {
    // Abrir directamente en nueva pestaña - método más confiable
    window.open(path, '_blank');
}



// Event listeners
searchInput.addEventListener('input', (e) => {
    filterPdfs(e.target.value);
});

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    displayPdfs(pdfFiles);
});


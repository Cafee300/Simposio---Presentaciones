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
        title: "Primer Reporte de Xylosandrus morigerus blandford",
        description: "En coffea arabica L en Honduras",
        path: "Archivos/10. PRESENTACIÓN XYLOSANDRUS MORIGERUS lSEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ.pdf"
    },
    {
        filename: "11. Experiencia piloto con ofertas de servicio vinculados a ERSDP.pdf",
        title: "Experiencia piloto con las ofertas de servicios vinculados ERSDP",
        description: "Su incidencia en producción del café",
        path: "Archivos/11. Experiencia piloto con ofertas de servicio vinculados a ERSDP.pdf"
    },
    {
        filename: "12. Evaluación de enmiendas calcáreas en diferentes formulaciones.pdf",
        title: "Evaluación de enmiendas calcáreas en diferentes formulaciones",
        description: "Para la corrección de acidez en suelos cafetaleros",
        path: "Archivos/12. Evaluación de enmiendas calcáreas en diferentes formulaciones.pdf"
    },
    {
        filename: "13. COMPORTAMIENTO DE LA DINÁMICA DE ABSORCIÓN y LA EFICIENCIA DE NUTRIENTES EN LAS ETAPAS FENOLOGICAS DE CAFETALES.pdf",
        title: "Comportamiento de la Dinámica de Absorción y Eficiencia de Nutrientes",
        description: "Nutrientes en las etapas fenologicas de cafetales",
        path: "Archivos/13. COMPORTAMIENTO DE LA DINÁMICA DE ABSORCIÓN y LA EFICIENCIA DE NUTRIENTES EN LAS ETAPAS FENOLOGICAS DE CAFETALES.pdf"
    },
    {
        filename: "14. Evaluación de las Frecuencias y Formas de Aplicación.pdf",
        title: "Evaluación de las frecuencias y formas de aplicación",
        description: "De los fertilizantes y su incidencia sobre la producción",
        path: "Archivos/14. Evaluación de las Frecuencias y Formas de Aplicación.pdf"
    },
    {
        filename: "15. Rendimientos cosecha 24 25.pdf",
        title: "Factores de conversión en la producción y comercialización de Café",
        description: "Cosecha 2024-2025",
        path: "Archivos/15. Rendimientos cosecha 24 25.pdf"
    },
    {
        filename: "16. EFECTO SOBRE EL CONTENIDO DE COMPUESTOS QUÍMICOS EN TRES VARIEDADES.pdf",
        title: "Efecto sobre el contenido de compuestos químicos en 3 variedades del café",
        description: "En 2 procesos de beneficiado y su influencia en la calidad de taza",
        path: "Archivos/16. EFECTO SOBRE EL CONTENIDO DE COMPUESTOS QUÍMICOS EN TRES VARIEDADES.pdf"
    },
    {
        filename: "17. Dureza del Agua PPT Semunario Nacional sept 2025 PINECO.pdf",
        title: "Dureza del Agua para la catación de café",
        description: "Su relación con el perfil obtenido",
        path: "Archivos/17. Dureza del Agua PPT Semunario Nacional sept 2025 PINECO.pdf"
    },
    {
        filename: "18. PERSPECTIVAS DEL MERCADO ANTE EUDR - SEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ 09.2025 (2).pdf",
        title: "Perspectivas del mercado Europeo ante las regulaciones del reglamento y su impacto",
        description: "En las relaciones comerciales",
        path: "Archivos/18. PERSPECTIVAS DEL MERCADO ANTE EUDR - SEMINARIO DE INVESTIGACIÓN Y TRANSFERENCIA EN CAFÉ 09.2025 (2).pdf"
    },
    {
        filename: "2. Avances y perspectiva ERSDP.pdf",
        title: "Renovar sin dejar de producir, avances y perspectivas al 2027",
        description: "Estado actual y perspectivas futuras",
        path: "Archivos/2. Avances y perspectiva ERSDP.pdf"
    },
    {
        filename: "3. Evaluacion de la cosecha semimecanizada en Honduras. (1).pdf",
        title: "Evaluación de cosecha semimecanizada como opción ante la crisis",
        description: "De escases de mano de obra en Honduras",
        path: "Archivos/3. Evaluacion de la cosecha semimecanizada en Honduras. (1).pdf"
    },
    {
        filename: "4. DETERMINACIÓN DE LA CALIDAD EN LLENADO DE FRUTO Y DISTURBIOS FISIOLÓGICOS.pdf",
        title: "Determinación de la calidad en llenado de fruto y disturbios fisiológicos",
        description: "En frutos asociados a la sequía y bronca del café cosecha 2024-2025",
        path: "Archivos/4. DETERMINACIÓN DE LA CALIDAD EN LLENADO DE FRUTO Y DISTURBIOS FISIOLÓGICOS.pdf"
    },
    {
        filename: "5. Evaluacion y Selección de variedades Brasileñas altamente productivas.pdf",
        title: "Selección de Variedades brasileñas tolerantes a sequía",
        description: "Resistentes a roya y altamente productivas en corredor seco",
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
        title: "Desarrollo, Evaluación y Selección de Híbridos F1 seleccionados",
        description: "Por resistencia a roya y productividad",
        path: "Archivos/7. Desarrollo y Selección de Hìbridos F1 altamente productivos y resistentes a roya del café_.pdf"
    },
    
    {
        filename: "8. DETERMINACIÓN DE RESISTENCIA GENÉTICA A LA ROYA DEL CAFÉ VARIEDADES PROMISORIAS DE HONDURAS Y LA REGIÓN..pdf",
        title: "Determinación de resistencia genética a la roya del café",
        description: "Variedades promisorias para Honduras y la región",
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


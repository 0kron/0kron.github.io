// Configuración: nombres de archivos (sin extensión) por categoría
const gameData = {
    personas: ['Diana', 'Marcos', 'Álvaro', 'Sebas', 'Daniel', 'André', 'Rodrigo', 'George', 'Juan', 'Darío', 'Elmer', 'Carlos', 'Valeria', 'Juan Manuel'],
    props: ['Heine-Borel', 'Desigualdad del Triángulo', 'Liouville', 'Lipschitz Continua', 'Cauchy-Schwarz', 'Jordan-medible', 'Ley de los grandes números', 'Ley del palomar', 'Estadístico Inconsiente', 'Cadenas de Markov', 'Separable', 'Suave por partes', 'T 3 1/2', 'Compacto', 'Conexo', 'Hipótesis del Continuo', 'Integral de Riemann', 'Esfera de Riemann', 'Ecua. Cauchy-Riemann', 'Grupos Abelianos', 'Compactación Unipuntual', 'Órbitas', 'Cerradura', 'Densidad', 'Inducción Transfinita', 'Homeomorfismo'],
    class: ['Proba', 'Estadística', 'Análisis', 'Calculo 1', 'Calculo 2', 'Calculo 3', 'Calculo 4', 'Variable', 'Topo', 'Moderna', 'Lineal I', 'Lineal II', 'Conjuntos', 'Grafos', 'Juegos', 'IDO', 'E. Dif']
};
// const gameData = {
//     personas: ['DIANA', 'MARCOS', 'ÁLVARO', 'SEBAS', 'DANIEL', 'ANDRÉ', 'RODRIGO', 'GEORGE', 'JUAN', 'DARÍO', 'ELMER', 'CARLOS', 'VALERIA', 'JUAN MANUEL'],
//     props: ['Heine-Borel', 'Desigualdad $\\triangle$', 'Liouville', 'Lipschitz', 'Cauchy-Schwarz', 'Jordan-Medible', 'Ley Grandes $n$', 'Palomar', 'Est. Inconsciente', 'Markov', 'Separable', 'Suave', '$T_{3.5}$', 'Compacto', 'Conexo', 'Hip. Continuo', 'Riemann', 'Esfera Riemann', 'Cauchy-Riemann', 'Grupos Abelianos', 'Compactación', 'Órbitas', 'Cerradura', 'Densidad', 'Ind. Transfinita', 'Homeomorfismo'],
//     class: ['Proba', 'Estadística', 'Análisis', 'Cálculo 1', 'Cálculo 2', 'Cálculo 3', 'Cálculo 4', 'Variable', 'Topo', 'Moderna', 'Lineal I', 'Lineal II', 'Conjuntos', 'Grafos', 'Juegos', 'IDO', 'Ecuaciones']
// };

let currentSelection = []; // Para que el Random Picker use solo las 15 cartas visibles

function loadBoard() {
    const grid = document.getElementById('gameGrid');
    const category = document.getElementById('categorySelect').value;
    grid.innerHTML = '';

    // 1. Barajar y Limitar a 15
    let items = [...gameData[category]];
    items.sort(() => Math.random() - 0.5);
    currentSelection = items.slice(0, 12); // Guardamos las 15 elegidas

    // 2. Crear Cartas
    currentSelection.forEach(text => {
        const card = document.createElement('div');
        card.className = `card cat-${category} ${category === 'personas' ? 'persona' : ''}`;
        
        const content = document.createElement('div');
        content.className = 'card-content';
        if (text.length > 12) {
            content.style.fontSize = "0.9rem"; 
        } else if (text.length > 20) {
            content.style.fontSize = "0.7rem";
        }

        // Renderizado de texto o LaTeX
        content.innerHTML = text.includes('$') || text.includes('\\') ? text : text;

        card.appendChild(content);
        card.onclick = () => card.classList.toggle('eliminated');
        grid.appendChild(card);
    });

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

// Random Picker actualizado para usar solo las 15 cartas en pantalla
function pickRandom() {
    if (currentSelection.length === 0) return;
    
    const chosen = currentSelection[Math.floor(Math.random() * currentSelection.length)];
    const display = document.getElementById('pickerDisplay');
    const modal = document.getElementById('modalPicker');
    
    display.innerHTML = `<h1 style="font-size: 3rem; color: white;">...</h1>`;
    modal.style.display = "block";

    setTimeout(() => {
        display.innerHTML = `<div class="card-content" style="font-size: 3.5rem; color: white;">${chosen}</div>`;
        if (window.MathJax) MathJax.typesetPromise();
    }, 800);
}

// Función de Confeti
document.getElementById('btnVictory').onclick = () => {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#ffd700', '#2e4d3d', '#ff5555']
    });
};

// Eventos iniciales
document.getElementById('categorySelect').onchange = loadBoard;
document.getElementById('btnReset').onclick = loadBoard;
document.getElementById('btnRandom').onclick = pickRandom;
document.addEventListener('DOMContentLoaded', loadBoard);

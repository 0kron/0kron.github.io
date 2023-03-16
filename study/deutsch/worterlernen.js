let artikel = ["der", "das", "die"];
let artikel_color = ["#1E90FF", "#7FFF00", "#DC143C"]
let w_lernen = [];
let w_gelernt = [];
let past_ind = -1;
let c_artikel = -1;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let k6_worter = [
    ["Tätigkeit", "Actividad/Ocupación", 2, 0],
    ["Termin", "Cita/Plazo", 0, 0],
    ["Ärger", "Enojo", 0, 0],
    ["Bahn", "Tren", 2, 0],
    ["Fahrplan", "Horario/Itinerario", 0, 0],
    ["Zugverbindung", "Enlace de Tren", 2, 0],
    ["Durchsage", "Mensaje", 2, 0],
    ["Wagen", "Vehículo", 0, 0],
    ["Geschäftreise", "Viaje de Negocios", 2, 0],
    ["Hinfahrt", "Viaje de ida", 2, 0],
    ["Rückfahrt", "Viaje de regreso", 2, 0],
    ["Klasse", "Clase", 2, 0],
    ["Fahrkarte", "Pasaje", 2, 0],
    ["Gang", "Pasillo", 0, 0],
    ["Ermäßigung", "Rebaja", 2, 0],
    ["Band", "Banda", 2, 0],
    ["Musiker", "Músico", 0, 0],
    ["Sängerin", "Cantante", 2, 0],
    ["Alben", "Álbum", 1, 0],
    ["Trainer", "Entrenador", 0, 0],
    ["Berufswunsch", "Aspiración Profesional", 0, 0],
    ["Neuanfang", "Reinicio", 0, 0],
    ["Chance", "Oportunidad", 2, 0],
    ["Umwelt", "Entorno", 2, 0],
    ["Plastik", "Plástico", 1, 0],
    ["Gehalt", "Sueldo", 1, 0],
    ["Risiko/Risiken", "Riesgo", 1, 0],
    ["Übersetzerin", "Traductor", 2, 0],
    ["Chirurg", "Cirujano", 0, 0],
    ["Herz", "Corazón", 1, 0],
    ["Oberärztin", "Médico Adjunto", 2, 0],
    ["Leiter", "Gerente/Director", 0, 0],
    ["Lastwagen/Lkw", "Camión", 0, 0],
    ["Freiheit", "Libertad", 2, 0],
    ["Telefonat", "Llamada", 1, 0],
    ["Anrufbeantworter", "Buzón de Voz", 0, 0],
    ["Blatt", "Hoja", 1, 0],
    ["Arbeitstag", "Jornada Laboral", 0, 0],
    ["Betrieb", "Empresa", 0, 0],
    ["Fabrik", "Fábrica", 2, 0],
    ["Maschine", "Máquina", 2, 0],
    ["Roboter", "Robot", 0, 0],
    ["Digitalisierung", "Digitalización", 2, 0],
    ["Austausch", "Intercambio", 0, 0],
    ["Zusammenarbeit", "Cooperación", 2, 0],
    ["Wissen", "Conocimiento", 1, 0],
    ["Kompetenz", "Competencia", 2, 0],
    ["Hausarbeit", "Tareas Domésticas", 2, 0],
    ["Bier", "Cerveza", 1, 0],
    ["Schritt", "Paso", 0, 0],
    ["Freiertag", "Vacaciones", 0, 0],
    ["Jahrhundert", "Siglo", 1, 0],
    ["Verkehrsmittel", "Medio de Transporte", 1, 0],
    ["Fahrer", "Conductor", 0, 0],
];


lernenFilling();
rnWorter();

document.getElementById("der").onclick = function(){
    check(0);
}

document.getElementById("das").onclick = function(){
    check(1);
}

document.getElementById("die").onclick = function(){
    check(2);
}

function lernenFilling(){
    let aux = 10 - w_lernen.length;
    while (aux > 0){
        let temp_wort = k6_worter[Math.floor(Math.random() * k6_worter.length)];
        if (!w_lernen.includes(temp_wort)){
            w_lernen.push(temp_wort);
            aux --;
        }
    }
}


function check(art){
    document.getElementById("der").disabled = true; 
    document.getElementById("das").disabled = true; 
    document.getElementById("die").disabled = true; 

    if (art == c_artikel){
        w_lernen[past_ind][3]++;
        document.getElementById("topBar").style.border = "7px solid #00ff00";
        document.getElementById("botBar").style.border = "7px solid #00ff00";
        document.getElementById("wort").innerHTML = artikel[art]+" "+w_lernen[past_ind][0];
        document.getElementById("wort").style.color = artikel_color[art];
    }
    else{
        w_lernen[past_ind][3] = 0;
        document.getElementById("topBar").style.border = "7px solid #ff0000";
        document.getElementById("botBar").style.border = "7px solid #ff0000";
        document.getElementById("wort").innerHTML = artikel[c_artikel]+" "+w_lernen[past_ind][0];
        document.getElementById("wort").style.color = artikel_color[c_artikel];
    }
    sleep(1750).then(() => {
        document.getElementById("topBar").style.border = "7px solid #ffffff";
        document.getElementById("botBar").style.border = "7px solid #ffffff";
        document.getElementById("wort").style.color = "#ffffff";
        document.getElementById("der").disabled = false; 
        document.getElementById("das").disabled = false; 
        document.getElementById("die").disabled = false;

        rnWorter();
    });

   
};

function rnWorter(){
    let ind = Math.floor(Math.random() * w_lernen.length);
    while (ind != past_ind){
        document.getElementById("wort").innerHTML = w_lernen[ind][0];
        document.getElementById("sig").innerHTML = w_lernen[ind][1];
        past_ind = ind;
    }
    c_artikel = w_lernen[ind][2];
};

function gelernt(){
};

function vergesen(){

};

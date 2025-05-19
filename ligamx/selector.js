import goles from './promedio_por_equipo_liga_mx.json' with {type: 'json'}; 
import performance from './performance_liga_mx.json' with {type: 'json'};

let id_equipo = {
  8:"América", 
  10:"Atlas", 
  6:"Atlético", 
  12:"Juárez", 
  9:"Chivas", 
  1:"Cruz Azul", 
  17:"Gallos", 
  11:"León FC", 
  14:"Mazatlán", 
  13:"Necaxa", 
  16:"Pachuca", 
  4:"Pumas", 
  5:"Rayados", 
  18:"Santos Laguna", 
  3:"Tígres", 
  2:"Toluca", 
  7:"Xolos", 
  15:"Puebla"
};

let refs_id = {
  2: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/17/17.png",
  8: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/1/1.png",
  1: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/12566/12566.png",
  3: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/16/16.png",
  13: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/29/29.png",
  11: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/9/9.png",
  5: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/14/14.png",
  16: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png",
  12: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11790/11790.png",
  4: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/18/18.png",
  9: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/7/7.png",
  17: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/12037/12037.png",
  7: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/5/5.png",
  10: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10445/10445.png",
  6: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11220/11220.png",
  14: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/12043/12043.png",
  15: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11550/11550.png",
  18: "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/15/15.png"
}; 


// Funciones de cambio de logos
document.getElementById("equipo_izquierda").oninput = function(){
  console.log(refs_id[document.getElementById("equipo_izquierda").value])
  document.getElementById("logo-izq").setAttribute("src", refs_id[document.getElementById("equipo_izquierda").value]); 
  document.getElementById("an-performance").innerText = ""; 
  document.getElementById("an-goles1").innerText = ""; 
  document.getElementById("an-goles2").innerText = ""; 
}

document.getElementById("equipo_derecha").oninput = function(){
  document.getElementById("logo-der").setAttribute("src", refs_id[document.getElementById("equipo_derecha").value]); 
  document.getElementById("an-performance").innerText = ""; 
  document.getElementById("an-goles1").innerText = ""; 
  document.getElementById("an-goles2").innerText = ""; 
}

// Función de análisis
document.getElementById("analizar").onclick = function(){
  let id_equipo1 = String(document.getElementById("equipo_izquierda").value); 
  let id_equipo2 = String(document.getElementById("equipo_derecha").value); 
  if (id_equipo1 == id_equipo2){
    console.log("Entrada inválida."); 
    document.getElementById("an-performance").innerText = ">> Partido inválido"; 
    document.getElementById("an-goles1").innerText = ""; 
    document.getElementById("an-goles2").innerText = ""; 
  }
  else {
    let id_ganador, id_perdedor, razon_perf; 

    let performance1 = performance[id_equipo1];
    let performance2 = performance[id_equipo2];
    if (performance1 > performance2){
      id_ganador = id_equipo1; 
      id_perdedor = id_equipo2; 
      razon_perf = String(Number((Math.abs((performance2-performance1)/performance1) * 100)).toFixed(2));
    }
    else{
      id_ganador = id_equipo2; 
      id_perdedor =id_equipo1; 
      razon_perf = Number((Math.abs((performance1-performance2)/performance2) * 100)).toFixed(2);
    }

    let ver_performance = "> "+id_equipo[id_ganador]+" tendra un desempeño "+razon_perf+"% mejor que "+id_equipo[id_perdedor]; 
    let ver_goles1 = "> Goles del "+id_equipo[id_equipo1]+": "+String(Number(goles[id_equipo1][id_equipo2]).toFixed(2));
    let ver_goles2 = "> Goles del "+id_equipo[id_equipo2]+": "+String(Number(goles[id_equipo2][id_equipo1]).toFixed(2));

    document.getElementById("an-performance").innerText = ver_performance; 
    document.getElementById("an-goles1").innerText = ver_goles1; 
    document.getElementById("an-goles2").innerText = ver_goles2; 
    console.log(ver_performance);
    console.log(ver_goles1);
    console.log(ver_goles2) 
  }
}

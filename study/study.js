//COUNTER SECTION
let count = 0; 

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}


// RNG GENERATOR
document.getElementById("rng_generate").onclick = function(){
    let max = Number(document.getElementById("rng_max").value);
    let min = Number(document.getElementById("rng_min").value);
    let rng_output = Math.floor(Math.random() * max) + min;

    document.getElementById("rng_out").innerHTML = rng_output;
}

document.getElementById("rng_clear").onclick = function(){
    let rng_output = ""; 
    document.getElementById("rng_out").innerHTML = rng_output;
}


// Taster checker
document.getElementById("Breset").onclick = function(){
    document.getElementById("veredicto").innerHTML = ""
    document.getElementById("batman").checked = false
    document.getElementById("bat_gusto").checked = false
    document.getElementById("eva").checked = false
    document.getElementById("eva_gusto").checked = false
    document.getElementById("panda").checked = false
    document.getElementById("panda_gusto").checked = false
}
document.getElementById("Bveredicto").onclick = function(){
    let value = 0; 
    if(document.getElementById("batman").checked){
        if(document.getElementById("bat_gusto").checked){
            value += 30; 
        }
        else{
            value -= 30; 
        }
    }
    if(document.getElementById("eva").checked){
        if(document.getElementById("eva_gusto").checked){
            value += 40; 
        }
        else{
            value -= 40; 
        }
    }
    if(document.getElementById("panda").checked){
        if(document.getElementById("panda_gusto").checked){
            value += 50; 
        }
        else{
            value -= 50; 
        }
    }
    switch(true){
        case value == -120: 
            document.getElementById("veredicto").innerHTML = "Sal de aquí por favor."
            break;
        case value <= 0: 
            document.getElementById("veredicto").innerHTML = "Lo siento, no tienes ni gusto."
            break; 
        case value <= 20:
            document.getElementById("veredicto").innerHTML = "Supongo que más bien te falta conocimiento."
            break; 
        case value <= 100: 
            document.getElementById("veredicto").innerHTML = "Vas por buen camino."
            break; 
        default: 
            document.getElementById("veredicto").innerHTML = "Eres una persona de cultura."
    }
}


// C O N V E R T E R --------------------------------------------------------
// Type selecter
document.getElementById("convert_type").oninput = function(){ 
    var temp_options = `<form>
        <select id="convert_unit_left">
        <option value="cel">Celsius (ºC)</option>
        <option value="fahr">Fahrenheit (F)</option>
        <option value="kelvin">Kelvin (K)</option>
        </select>
    </form>`;

    var length_options = `<form>
        <select id="convert_unit_left">
        <option value="m">Meters (m)</option>
        <option value="cm">Centimeter (cm)</option>
        <option value="km">Kilometers (km)</option>
        <option value="ft">Feets (ft)</option>
        <option value="yd">Yards (yd)</option>
        <option value="mi">Mile (mi)</option>
        </select>
    </form>`;

    var speed_options = `<form>
        <select id="convert_unit_left">
        <option value="m_s">Meters per Second (m/s)</option>
        <option value="km_h">Kilometers per Hour (km/h)</option>
        <option value="ft_s">Feet per Second (ft/s)</option>
        <option value="mi_h">Miles per Hour (mi/h)</option>
        </select>
    </form>`;

    var storage_options = `<form>
        <select id="convert_unit_left">
        <option value="bit">Bit</option>
        <option value="byte">Byte (B)</option>
        <option value="kb">Kilobyte (kB)</option>
        <option value="mb">Megabyte (MB)</option>
        <option value="gb">Gigabyte (GB)</option>
        <option value="tb">Terabyte (TB)</option>
        </select>
    </form>`;

    var angle_options = `<form>
        <select id="convert_unit_left">
        <option value="deg">Degrees (º)</option>
        <option value="rad">Radians (rad)</option>
        <option value="gon">Gradians (gon)</option>
        </select>
    </form>`;

    switch(document.getElementById("convert_type").value){
        case "temp":
            document.getElementById("selecter_left").innerHTML = temp_options;
            document.getElementById("selecter_right").innerHTML = temp_options.replace("left", "right");
            break; 
        case "length":
            document.getElementById("selecter_left").innerHTML = length_options;
            document.getElementById("selecter_right").innerHTML = length_options.replace("left", "right");
            break;
        case "speed":
            document.getElementById("selecter_left").innerHTML = speed_options;
            document.getElementById("selecter_right").innerHTML = speed_options.replace("left", "right");
            break; 
        case "storage":
            document.getElementById("selecter_left").innerHTML = storage_options;
            document.getElementById("selecter_right").innerHTML = storage_options.replace("left", "right");
            break; 
        case "angle":
            document.getElementById("selecter_left").innerHTML = angle_options;
            document.getElementById("selecter_right").innerHTML = angle_options.replace("left", "right");
            break; 
    }
    document.getElementById("in_left").value = 0; 
    document.getElementById("in_right").value = 0; 
}

// Utility - Alterner and Operators
function counter(side){
    return side == "left" ? "right" : "left";
}

function fTemp(value_init, side){
    let aux;
    let res;
    //from - to C
    switch(document.getElementById(`convert_unit_${side}`).value){
        case "cel":
            aux = value_init;
            break;
        case "fahr": 
            aux = 5/9 * (value_init - 32);
            break; 
        case "kelvin": 
            aux = value_init - 273.15; 
            break;
    }
    switch(document.getElementById(`convert_unit_${counter(side)}`).value){
        case "cel": 
            res = aux;
            break;
        case "fahr": 
            res = (aux * 9/5) + 32;
            break; 
        case "kelvin": 
            res = aux + 273.15;
            break;
    }
    return res % 1 == 0 ? res : res.toFixed(4);
}

function fLength(value_init, side){
    let aux;
    let res;
    //from - to m
    switch(document.getElementById(`convert_unit_${side}`).value){
        case "m":
            aux = value_init;
            break;
        case "cm": 
            aux = value_init * 100;
            break; 
        case "km": 
            aux = value_init * 1000; 
            break; 
        case "ft": 
            aux = value_init * 0.34048; 
            break;
        case "yd": 
            aux = value_init * 0.9144;
            break; 
        case "mi": 
            aux = value_init * 1609.344;
            break;
    }
    switch(document.getElementById(`convert_unit_${counter(side)}`).value){
        case "m":
            res = aux;
            break;
        case "cm": 
            res = aux / 100;
            break; 
        case "km": 
            res = aux / 1000 ; 
            break; 
        case "ft": 
            res = aux / 0.3048; 
            break;
        case "yd": 
            res = aux / 0.9144;
            break; 
        case "mi": 
            res = aux / 1609.344;
            break;
    }
    return res % 1 == 0 ? res : res.toFixed(4);
}

function fSpeed(value_init, side){
    let aux;
    let res;
    //from - to m_s
    switch(document.getElementById(`convert_unit_${side}`).value){
        case "m_s":
            aux = value_init;
            break;
        case "km_h": 
            aux = value_init / 3.6;
            break; 
        case "ft_s": 
            aux = value_init * 0.3048; 
            break; 
        case "mi_h": 
            aux = value_init * 0.44704; 
            break;
    }
    switch(document.getElementById(`convert_unit_${counter(side)}`).value){
        case "m_s":
            res = aux;
            break;
        case "km_h": 
            res = aux * 3.6;
            break; 
        case "ft_s": 
            res = aux / 0.3048; 
            break; 
        case "mi_h": 
            res = aux / 0.44704; 
            break;
    }
    return res % 1 == 0 ? res : res.toFixed(4);
}

function fStorage(value_init, side){
    let aux;
    let res;
    //from - to m_s
    switch(document.getElementById(`convert_unit_${side}`).value){
        case "bit":
            aux = value_init / 8;
            break;
        case "byte": 
            aux = value_init;
            break; 
        case "kb": 
            aux = value_init * 1000; 
            break; 
        case "mb": 
            aux = value_init * 1000000; 
            break;
        case "gb": 
            aux = value_init * 1000000000; 
        case "tb":
            aux = value_init * 1000000000000;
    }
    switch(document.getElementById(`convert_unit_${counter(side)}`).value){
        case "bit":
            res = aux * 8;
            break;
        case "byte": 
            res = aux;
            break; 
        case "kb": 
            res = aux / 1000; 
            break; 
        case "mb": 
            res = aux / 1000000; 
            break;
        case "gb": 
            res = aux / 1000000000; 
        case "tb":
            res = aux / 1000000000000;
    }
    return res % 1 == 0 ? res : res.toFixed(4);
}

function fAngle(value_init, side){
    let aux;
    let res; 
    //from - to degrees
    switch(document.getElementById(`convert_unit_${side}`).value){
        case "deg":
            aux = value_init; 
            break;
        case "rad":
            aux = value_init * 180 / Math.PI; 
            break; 
        case "gon": 
            aux = value_init * 0.9; 
            break; 
    }
    switch(document.getElementById(`convert_unit_${counter(side)}`).value){
        case "deg":
            res = aux; 
            break;
        case "rad":
            res = aux * Math.PI / 180; 
            break; 
        case "gon": 
            res = aux / 0.9; 
            break;
    }
    return res % 1 == 0 ? res : res.toFixed(4);
}

function converter(side){
    let value_init = Number(document.getElementById(`in_${side}`).value)
    let value_final;

    switch(document.getElementById("convert_type").value){ // Type determiner
        case "temp":
            value_final = fTemp(value_init, side);
            break; 
        case "length":
            value_final = fLength(value_init, side);
            break;
        case "speed":
            value_final = fSpeed(value_init, side);
            break; 
        case "storage":
            value_final = fStorage(value_init, side);
            break; 
        case "angle":
            value_final = fAngle(value_init, side);
            break; 
    }
    document.getElementById(`in_${counter(side)}`).value = value_final;
}

// Input Listeners
document.getElementById("in_left").oninput = function(){
    converter("left");
}
document.getElementById("in_right").oninput = function(){
    converter("right");
}
document.getElementById("selecter_left").onclick = function(){
    converter("right");
}
document.getElementById("selecter_right").onclick = function(){
    converter("left");
}


//------------------------------------------------------------------
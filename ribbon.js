
const DIELECTRIC_CONSTANTS = [2.53, 2.74, 2.96, 3.18, 3.42, 3.67, 3.92, 4.18, 4.45, 4.73, 4.92, 5.17, 5.41, 5.66, 5.90, 6.15, 6.39];
const DC_EXTRAPOLATED = [4.45, 4.73, 4.92, 5.17, 5.41, 5.66, 5.90, 6.15, 6.39];
const VMI_VALUES = [0, 0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225, 0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4];
const VMI_EXTRAPOLATED = [0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4];
let amp_extrapolated = [[-2.655376, -3.11855213306653, -3.38481151175588, -3.25019381790895, -3.73762646423212, -4.40386996598299, -4.6502887953977, -4.2991859929965, -3.739044, -3.68073688544272, -3.7583131835918, -3.83132617008504, -3.80666409004502, -3.95050472036018, -4.20833182891446, -4.34979449024512, -4.23860422511256, -3.935144],
  [-3.089209, -3.64977925312656, -3.99542033866934, -4.0285004042021, -5.12962054427214, -5.58258132916458, -5.73773916708354, -5.57941299149575, -5.29939268084042, -5.35444868784392, -5.41951487793897, -5.44318511855928, -5.36060110805403, -5.28265436718359, -5.32992198149075, -5.18727687243622, -4.7468288164082, -4.498764]];

let extrapolatedAmp = extrapolateAmp();
let dielectricConstant = createDielectricConstantArray(DIELECTRIC_CONSTANTS);
let amp3d = createAmplitudeArray();
let depth3d = createDepthArray();


class Trace {
  x;
  y;
  z;
  name;
  type;
  showscale;
  colorscale;

  constructor(x, y, z, name, colorscale) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.name = name;
      this.type = 'surface';
      this.showscale = false;
      this.colorscale = colorscale;
  }
}

let trace1 = new Trace(
  dielectricConstant,
  depth3d[0],
  amp3d[0],
  DEPTHS[0].toString(),
  [['0', 'rgb(170,110,40)'], ['1.0', 'rgb(170,110,40)']], 
)

let trace2 = new Trace(
  dielectricConstant,
  depth3d[1],
  amp3d[1],
  DEPTHS[1].toString(),
  [['0', 'rgb(230,25,75)'], ['1.0', 'rgb(230,25,75)']], 
)

let trace3 = new Trace(
  dielectricConstant,
  depth3d[2],
  amp3d[2],
  DEPTHS[2].toString(),
  [['0', 'rgb(250,190,212)'], ['1.0', 'rgb(250,190,212)']], 
)

let trace4 = new Trace(
  dielectricConstant,
  depth3d[3],
  amp3d[3],
  DEPTHS[3].toString(),
  [['0', 'rgb(245,130,48)'], ['1.0', 'rgb(245,130,48)']], 
)

let trace5 = new Trace(
  dielectricConstant,
  depth3d[4],
  amp3d[4],
  DEPTHS[4].toString(),
  [['0', 'rgb(255,215,180)'], ['1.0', 'rgb(255,215,180)']], 
)

let trace6 = new Trace(
  dielectricConstant,
  depth3d[5],
  amp3d[5],
  DEPTHS[5].toString(),
  [['0', 'rgb(128,128,0)'], ['1.0', 'rgb(128,128,0)']], 
)

let trace7 = new Trace(
  dielectricConstant,
  depth3d[6],
  amp3d[6],
  DEPTHS[6].toString(),
  [['0', 'rgb(255,225,25)'], ['1.0', 'rgb(255,225,25)']], 
)

let trace8 = new Trace(
  dielectricConstant,
  depth3d[7],
  amp3d[7],
  DEPTHS[7].toString(),
  [['0', 'rgb(255,250,200)'], ['1.0', 'rgb(255,250,200)']], 
)

let trace9 = new Trace(
  dielectricConstant,
  depth3d[8],
  amp3d[8],
  DEPTHS[8].toString(),
  [['0', 'rgb(210,245,60)'], ['1.0', 'rgb(210,245,60)']], 
)

let trace10 = new Trace(
  dielectricConstant,
  depth3d[9],
  amp3d[9],
  DEPTHS[9].toString(),
  [['0', 'rgb(60,180,75)'], ['1.0', 'rgb(60,180,75)']], 
)

let trace11 = new Trace(
  dielectricConstant,
  depth3d[10],
  amp3d[10],
  DEPTHS[10].toString(),
  [['0', 'rgb(170, 255, 195)'], ['1.0', 'rgb(170, 255, 195)']], 
)

let trace12 = new Trace(
  dielectricConstant,
  depth3d[11],
  amp3d[11],
  DEPTHS[11].toString(),
  [['0', 'rgb(0,128,128)'], ['1.0', 'rgb(0,128,128)']], 
)

let trace13 = new Trace(
  dielectricConstant,
  depth3d[12],
  amp3d[12],
  DEPTHS[12].toString(),
  [['0', 'rgb(70,240,240)'], ['1.0', 'rgb(70,240,240)']], 
)

let trace14 = new Trace(
  dielectricConstant,
  depth3d[13],
  amp3d[13],
  DEPTHS[13].toString(),
  [['0', 'rgb(0,0,128)'], ['1.0', 'rgb(0,0,128)']], 
)

let trace15 = new Trace(
  dielectricConstant,
  depth3d[14],
  amp3d[14],
  DEPTHS[14].toString(),
  [['0', 'rgb(0, 130, 200)'], ['1.0', 'rgb(0, 130, 200)']], 
)

let trace16 = new Trace(
  dielectricConstant,
  depth3d[15],
  amp3d[15],
  DEPTHS[15].toString(),
  [['0', 'rgb(145,30,180)'], ['1.0', 'rgb(145,30,180)']], 
)

let trace17 = new Trace(
  dielectricConstant,
  depth3d[16],
  amp3d[16],
  DEPTHS[16].toString(),
  [['0', 'rgb(220,190,255)'], ['1.0', 'rgb(220,190,255)']], 
)

let trace18 = new Trace(
  dielectricConstant,
  depth3d[17],
  amp3d[17],
  DEPTHS[17].toString(),
  [['0', 'rgb(240,50,230)'], ['1.0', 'rgb(240,50,230)']], 
)

var data2 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, 
  trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18];

var layout2 = {
  title: 'Dielectric Plot',
  showscale: false,
  autosize: true,
  // width: 600,
  // height: 600,
  scene: {
    aspectmode: 'manual',
    aspectratio: {
      x: 1.0, y: 1.0, z: 0.7
    },
    xaxis: {
      title: 'Dielectric Constant',  
      range: [2.4, 6.5],
    },
    yaxis: {
      title: 'Depth',
      range: [-0.5, 8.5]
    },
    zaxis: {
      title: 'Amplitude',
      range: [-6.0, 2.0],
      font: {
        family: 'Poppins',
      }
    },
  },
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
};


function createDepthArray() {
  let newDepth = [];
  for (let j = 0; j < DEPTHS.length; j++) {
    let trace = [];
    for (let i = 0; i < DIELECTRIC_CONSTANTS.length; i++) {
      trace.push([DEPTHS[j], DEPTHS[j]]);
    }
    newDepth.push(trace);
  }
  console.log(newDepth);
  return newDepth;
}


function createAmplitudeArray() {
  let newAmp = [];
  let MIN_AMP = -6.0;

  for (let j = 0; j < DEPTHS.length; j++) {
    let trace = [];
    for (let i = 0; i < DIELECTRIC_CONSTANTS.length; i++) {
      trace.push([AMPLITUDES[i][j], MIN_AMP]);
      //console.log(AMPLITUDES[i][index]);
    }
    newAmp.push(trace);
  }
  console.log(newAmp);
  return newAmp;
}


function createDielectricConstantArray(arr) {
  let newArr = [];
  // let minDielectricConstant = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    newArr.push([arr[i], arr[i]/*minDielectricConstant*/]);
  }
  console.log(newArr)
  return newArr;
}


function calcVolMoisture(dielectricConstant) {
  let index = 0;
  for (let i = 0; i < DIELECTRIC_CONSTANTS.length; i++) {
    if (dielectricConstant < DIELECTRIC_CONSTANTS[i]) {
      index = i;
      break;
    }
  }

  console.log(DIELECTRIC_CONSTANTS[index-1], VMI_VALUES[index-1], DIELECTRIC_CONSTANTS[index], VMI_VALUES[index]);
  let vmi = interpolate(dielectricConstant, DIELECTRIC_CONSTANTS[index-1], VMI_VALUES[index-1], DIELECTRIC_CONSTANTS[index], VMI_VALUES[index]);
  return (vmi.toFixed(3));
}


function calcDielectric(depth, amplitude) {
  
  let traceFloor, traceCeiling = [];
  let x00, x01, y00, y01, z00, z01 = 0;
  let x10, x11, y10, y11, z10, z11 = 0;

  //find which two traces to use (using depth value)
  for (let k = 0; k < data2.length; k++) {
    // console.log(data2[k].y[0][0]);
    if (data2[k].y[0][0] > depth) {
      traceFloor = data2[k-1];
      traceCeiling = data2[k];

      // console.log(traceFloor);
      // console.log(traceCeiling);
      break;
    }
  }

  //find which AMPLITUDES to use
  for (let m = 0; m < traceFloor.z.length; m++) {
    // console.log(traceFloor.z[m], amplitude);
    if (traceFloor.z[m][0] < amplitude) {
      x00 = traceFloor.x[m][0];
      y00 = traceFloor.y[m][0];
      z00 = traceFloor.z[m][0];
      x01 = traceFloor.x[m-1][0];
      y01 = traceFloor.y[m-1][0];
      z01 = traceFloor.z[m-1][0];
      console.log(x00, x01);
      break;
    }
  }
  for (let n = 0; n < traceCeiling.z.length; n++) {
    if (traceCeiling.z[n][0] < amplitude) {
      x10 = traceCeiling.x[n][0];
      y10 = traceCeiling.y[n][0];
      z10 = traceCeiling.z[n][0];
      x11 = traceCeiling.x[n-1][0];
      y11 = traceCeiling.y[n-1][0];
      z11 = traceCeiling.z[n-1][0];
      console.log(x10, x11);
      break;
    }
  }

  // console.log(depth, y00, x00, y10, x10, z00, z01, z10, z11);
  let dielectricConstant_floor = interpolate(depth, y00, x00, y10, x10);
  let dielectricConstant_ceil = interpolate(depth, y01, x01, y11, x11);

  let ampFloor = interpolate(depth, y00, z00, y10, z10);
  let ampCeil = interpolate(depth, y01, z01, y11, z11);

  // console.log(dielectricConstant_floor, dielectricConstant_ceil, ampFloor, ampCeil);

  let dielectricConstant = interpolate(amplitude, ampFloor, dielectricConstant_floor, ampCeil, dielectricConstant_ceil);
  // console.log(dielectricConstant);

  //interpolate - fix from using average values
  return dielectricConstant.toFixed(2);
}

//returns y-value
function interpolate(x, x0, y0, x1, y1) {
  return (((y0 * (x1 - x)) + (y1 * (x - x0))) / (x1 - x0))
}


// function extrapolate(x, y) {
//   let xSum = 0, ySum = 0, xxSum = 0, xySum = 0;
//   let count = x.length;
//   for (var i = 0; i < count; i++) {
//     xSum += x[i];
//     ySum += y[i];
//     xxSum += x[i] * x[i];
//     xySum += x[i] * y[i];
//   }
//   var slope = (count * xySum - xSum * ySum) / (count * xxSum - xSum * xSum);
//   var intercept = (ySum / count) - (slope * xSum) / count;

//   var xValues = [];
//   var yValues = [];
//   for (var j = 0.25; j <= 0.425; j+= 0.025) {
//     xValues.push(j.toFixed(3));
//     yValues.push((j*slope + intercept).toFixed(3));
//   }
//   console.log(slope, xValues, yValues);
//   return [xValues, yValues];
// }

function extrapolateAmp() {
  // console.log(extrapolate(DC_EXTRAPOLATED[0], DIELECTRIC_CONSTANTS[DIELECTRIC_CONSTANTS.length-2], amp3d[i][j-2][0], DIELECTRIC_CONSTANTS[DIELECTRIC_CONSTANTS.length-1], amp3d[i][j-2][0]));
  // console.log(extrapolate(DC_EXTRAPOLATED[1], DIELECTRIC_CONSTANTS[DIELECTRIC_CONSTANTS.length-1], amp3d[i][j-2][0], DC_EXTRAPOLATED[0], amp3d[i][j-2][0]));
  for (let i = 0; i < DC_EXTRAPOLATED.length-2; i++) {
    let tmp = []
    for (let j = 0; j < DEPTHS.length; j++) {
      let newAmp = extrapolate(DC_EXTRAPOLATED[i+2], DC_EXTRAPOLATED[i], amp_extrapolated[i][j], DC_EXTRAPOLATED[i+1], amp_extrapolated[i+1][j]);
      tmp.push(newAmp);
      console.log(newAmp, DC_EXTRAPOLATED[i+2], DC_EXTRAPOLATED[i], amp_extrapolated[i+1][j]);
    }
    amp_extrapolated.push(tmp);
  }
}

function extrapolate(x, x1, y1, x2, y2) {
  return (y1 + (((x - x1) / (x2 - x1)) * (y2 - y1)))
}


function Update3dPlot() {
  var graph3dDiv = document.getElementById('dielectricPlot');
  var depth = +document.getElementById('depthInput').value;
  var amplitude = +document.getElementById('amplitudeInput').value;
  let dielectricConstant = calcDielectric(depth, amplitude);
  // console.log(dielectricConstant);
  let new3dInput = {
      x: [dielectricConstant],
      y: [depth],
      z: [amplitude],
      mode: 'markers',
      type: 'scatter3d',
      name: 'Input',
      marker: {
        size: 6,
        color: 'rgb(180, 180, 180)',
        line: {
          color: 'rgb(0,0,0)',
          width: 2,
        }
      },
  };

  let vmi = calcVolMoisture(dielectricConstant);

  setIndicator(indicatorElement, vmi);
  
  new3dData = data2.concat(new3dInput);
//  console.log(new3dInput);
  // console.log(new3dData);
  // console.log(layout2);
  Plotly.react(graph3dDiv, new3dData, layout2);
}

console.log("Creating 3d Plot");
console.log(data2[0]);

Plotly.newPlot('dielectricPlot', data2, layout2);

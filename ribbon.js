const dielectricConstants = [2.53, 2.74, 2.96, 3.18, 3.42, 3.67, 3.92, 4.18, 4.45, 4.73];
const vmiValues = [0, 0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225];

function createDepthArray(index) {
  let newDepth = [];
  for (let i = 0; i < dielectricConstants.length; i++) {
    newDepth.push([depths[index], depths[index]]);
  }
  //console.log(newDepth)
  return newDepth;
}

function createAmplitudeArray(index) {
  let tmp = [];
  for (let i = 0; i < dielectricConstants.length; i++) {
    tmp.push(amplitudes[i][index]);
    //console.log(amplitudes[i][index]);
  }
  let newAmp = [];
  let minAmp = -6.0; //Math.min(...tmp);
  for (let j = 0; j < tmp.length; j++) {
    newAmp.push([tmp[j], minAmp]);
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
  return newArr;
}

function calcVolMoisture(dielectricConstant) {
  let index = 0;
  for (let i = 0; i < dielectricConstants.length; i++) {
    if (dielectricConstant < dielectricConstants[i]) {
      index = i;
      break;
    }
  }

  // console.log(dielectricConstants[index-1], vmiValues[index-1], dielectricConstants[index], vmiValues[index]);
  let vmi = interpolate(dielectricConstant, dielectricConstants[index-1], vmiValues[index-1], dielectricConstants[index], vmiValues[index]);
  return (vmi.toFixed(3));
}

var trace1 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(0),
  z: createAmplitudeArray(0),
  name: depths[0].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(170,110,40)'], ['1.0', 'rgb(170,110,40)']],
}

var trace2 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(1),
  z: createAmplitudeArray(1),
  name: depths[1].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(230,25,75)'], ['1.0', 'rgb(230,25,75)']],
}

var trace3 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(2),
  z: createAmplitudeArray(2),
  name: depths[2].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(250,190,212)'], ['1.0', 'rgb(250,190,212)']],
}

var trace4 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(3),
  z: createAmplitudeArray(3),
  name: depths[3].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(245,130,48)'], ['1.0', 'rgb(245,130,48)']],
}

var trace5 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(4),
  z: createAmplitudeArray(4),
  name: depths[4].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(255,215,180)'], ['1.0', 'rgb(255,215,180)']],
}

var trace6 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(5),
  z: createAmplitudeArray(5),
  name: depths[5].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(128,128,0)'], ['1.0', 'rgb(128,128,0)']],
}

var trace7 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(6),
  z: createAmplitudeArray(6),
  name: depths[6].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(255,225,25)'], ['1.0', 'rgb(255,225,25)']],
}

var trace8 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(7),
  z: createAmplitudeArray(7),
  name: depths[7].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(255,250,200)'], ['1.0', 'rgb(255,250,200)']],
}

var trace9 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(8),
  z: createAmplitudeArray(8),
  name: depths[8].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(210,245,60)'], ['1.0', 'rgb(210,245,60)']],
}

var trace10 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(9),
  z: createAmplitudeArray(9),
  name: depths[9].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(60,180,75)'], ['1.0', 'rgb(60,180,75)']],
}

var trace11 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(10),
  z: createAmplitudeArray(10),
  name: depths[10].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(170, 255, 195)'], ['1.0', 'rgb(170, 255, 195)']],
}

var trace12 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(11),
  z: createAmplitudeArray(11),
  name: depths[11].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(0,128,128)'], ['1.0', 'rgb(0,128,128)']],
}

var trace13 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(12),
  z: createAmplitudeArray(12),
  name: depths[12].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(70,240,240)'], ['1.0', 'rgb(70,240,240)']],
}

var trace14 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(13),
  z: createAmplitudeArray(13),
  name: depths[13].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(0,0,128)'], ['1.0', 'rgb(0,0,128)']],
}

var trace15 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(14),
  z: createAmplitudeArray(14),
  name: depths[14].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(0, 130, 200)'], ['1.0', 'rgb(0, 130, 200)']],
}

var trace16 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(15),
  z: createAmplitudeArray(15),
  name: depths[15].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(145,30,180)'], ['1.0', 'rgb(145,30,180)']],
}

var trace17 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(16),
  z: createAmplitudeArray(16),
  name: depths[16].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(220,190,255)'], ['1.0', 'rgb(220,190,255)']],
}

var trace18 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: createDielectricConstantArray(dielectricConstants),
  y: createDepthArray(17),
  z: createAmplitudeArray(17),
  name: depths[17].toString(),
  type: 'surface',
  showscale: false,
  colorscale: [['0', 'rgb(240,50,230)'], ['1.0', 'rgb(240,50,230)']],
}

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
      range: [2.4, 4.8],
    },
    yaxis: {
      title: 'Depth',
      range: [-0.5, 8.5],
    },
    zaxis: {
      title: 'Amplitude',
      range: [-6.0, 2.0],
    }
  }
};

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

  //find which amplitudes to use
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

function Update3dPlot() {
  var graph3dDiv = document.getElementById('dielectricPlot');
  var depth = +document.getElementById('depthInput').value;
  var amplitude = +document.getElementById('amplitudeInput').value;
  let dielectricConstant =calcDielectric(depth, amplitude);

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

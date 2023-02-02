const dielectricConstants = [2.53, 2.74, 2.96, 3.18, 3.42, 3.67, 3.92, 4.18, 4.45, 4.73];

function createDepthArray(index) {
  let newDepth = [];
  for (let i = 0; i < dielectricConstants.length; i++) {
    newDepth.push(depths[index]);
  }
  //console.log(newDepth)
  return newDepth;
}

function createAmplitudeArray(index) {
  let newAmp = [];
  for (let i = 0; i < dielectricConstants.length; i++) {
    newAmp.push(amplitudes[i][index]);
    //console.log(amplitudes[i][index]);
  }
  return newAmp;
}

var trace1 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(0),
  z: createAmplitudeArray(0),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace2 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(1),
  z: createAmplitudeArray(1),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace3 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(2),
  z: createAmplitudeArray(2),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace4 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(3),
  z: createAmplitudeArray(3),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace5 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(4),
  z: createAmplitudeArray(4),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace6 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(5),
  z: createAmplitudeArray(5),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace7 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(6),
  z: createAmplitudeArray(6),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace8 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(7),
  z: createAmplitudeArray(7),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace9 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(8),
  z: createAmplitudeArray(8),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace10 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(9),
  z: createAmplitudeArray(9),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace11 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(10),
  z: createAmplitudeArray(10),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace12 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(11),
  z: createAmplitudeArray(11),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace13 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(12),
  z: createAmplitudeArray(12),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace14 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(13),
  z: createAmplitudeArray(13),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace15 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(14),
  z: createAmplitudeArray(14),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace16 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(15),
  z: createAmplitudeArray(15),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace17 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(16),
  z: createAmplitudeArray(16),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var trace18 = {
  // x:figure.data[0].x, y:figure.data[0].y, z:figure.data[0].z,
  x: dielectricConstants,
  y: createDepthArray(17),
  z: createAmplitudeArray(17),
  name: '',
  type: 'scatter3d',
  mode: 'lines',
  showscale: false
}

var data2 = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, 
  trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18];

var layout2 = {
  title: 'Ribbon Plot',
  showlegend: false,
  autosize: true,
  width: 600,
  height: 600,
  scene: {
    xaxis: {title: 'Dielectric Constant'},
    yaxis: {title: 'Depth'},
    zaxis: {title: 'Amplitude'}
  }
};

function calcDielectric(depth, amplitude) {
  
  let traceFloor, traceCeiling = [];
  let traceFloor_x0, traceFloor_x1, traceCeiling_x0, traceCeiling_x1 = 0;
  //find which two traces to use
  for (let k = 0; k < data2.length; k++) {
    console.log(data2[k].y[0]);
    if (data2[k].y[0] > depth) {
      traceFloor = data2[k-1];
      traceCeiling = data2[k];
      console.log(traceFloor);
      console.log(traceCeiling);
      break;
    }
  }

  //find which amplitudes to use
  for (let m = 0; m < traceFloor.z.length; m++) {
    console.log(traceFloor.z[m], amplitude);
    if (traceFloor.z[m] < amplitude) {
      traceFloor_x0 = traceFloor.x[m];
      traceFloor_x1 = traceFloor.x[m-1];
      console.log(traceFloor_x0);
      console.log(traceFloor_x1);
      break;
    }
  }
  for (let n = 0; n < traceCeiling.z.length; n++) {
    if (traceCeiling.z[n] < amplitude) {
      traceCeiling_x0 = traceCeiling.x[n];
      traceCeiling_x1 = traceCeiling.x[n-1];
      console.log(traceCeiling_x0);
      break;
    }
  }

  //interpolate - fix from using average values
  return ((traceFloor_x0 + traceFloor_x1 + traceCeiling_x0 + traceCeiling_x1) / 4);
}

function Update3dPlot() {
  var graph3dDiv = document.getElementById('myDiv')
  var depth = +document.getElementById('depthInput').value;
  var amplitude = +document.getElementById('amplitudeInput').value;

  let new3dInput = {
      x: [calcDielectric(depth, amplitude)],
      y: [depth],
      z: [amplitude],
      mode: 'markers',
      type: 'scatter3d',
      name: 'Input Value'
  };

  new3dData = data2.concat(new3dInput);
  console.log(new3dInput);
  // console.log(new3dData);
  // console.log(layout2);
  Plotly.react(graph3dDiv, new3dData, layout2);
}

console.log(data2);
Plotly.newPlot('myDiv', data2, layout2);

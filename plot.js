TESTER = document.getElementById('ampVsTimePlot');

const depths = [0,0.48,0.96,1.44,1.92,2.4,2.88,3.36,3.84,4.32,4.79,5.27,5.75,6.23,6.71,7.19,7.67,8.15];

const amplitudes = [[0.43653,0.48389624152076, 0.285882980590295, 0.100441990195097, -0.0849990002001002, -0.0882841881940968, 
    0.0720122611305655, 0.666052043921961, 1.61211540170085, 1.67251266103051, 1.25134159809905, 0.867887346773387, 
    1.1130989991996, 1.06072344032016, 0.41010844012006, -0.639676149574788, -1.11427936228114, -1.122131],
    [0.353297, 0.190211186093047, -0.0392467613806903, -0.371107429214607, -0.560742096548274, -0.723827910455228, -0.686832835917959,
    -0.529436062031016, -0.332216008004002, -0.188093660830415, -0.376313699849925, -0.674040127563782, -0.890223648324162,
    -0.954555364682341, -0.759104689344672, -1.36972831815908, -1.7584793861931, -1.66196],
    [0.0435421, -0.229938272336168, -0.459375346723362, -0.525096044972486, -0.78363, -1.03170722651326, -1.15574477243622,
    -1.22149961605803, -1.15798, -1.03093814002001, -0.970976703601801, -0.975459988394197, -1.07110339729865, -1.20709636933467,
    -1.6001310028014, -1.78245125102551, -1.99764892106053, -2.30849], 
    [-1.005547, -1.18868904002001, -1.14356549194597, -0.830189112356178, -0.898005435217609, -1.27039424992496, -1.50440907883942, 
    -1.53413572426213, -1.38151735757879, -1.31029545312656, -1.251283018009, -1.237533185993, -1.30468526733367, -1.80730842161081,
    -2.34045524922461, -2.77796123371686, -3.12796602131066, -3.006337], 
    [-1.500341, -1.96511644332166, -2.39855063101551, -2.23538478389195, -2.23134149654827, -2.56756203001501, -2.61996876598299,
    -2.20463751875938, -1.80166732056028, -1.52477982241121, -1.44907391095548, -1.49604589724862, -1.61223975807904,
    -1.98554343861931, -2.57392937218609, -3.03870481550775, -3.24142601950975, -3.007367],
    [-1.594382, -2.11995022411206, -2.60034892946473, -2.53937140070035, -2.76776317358679, -3.287524014007, -3.44793002201101,
    -2.88751749574787, -2.11514, -1.88864750075038, -1.8870428014007, -1.9625387893947, -2.04384216108054, -2.53456608304152,
    -3.21693366683342, -3.53633976988494, -3.51323809104552, -3.118336],
    [-1.710513, -2.29615294317159, -2.77802094687344, -2.6420688172086, -2.92612593066533, -3.46993444932466, -3.65393967633817,
    -3.21470971895948, -2.561127, -2.43306949064532, -2.50627448354177, -2.63176875707854, -2.68928696578289, -3.03701068204102,
    -3.49715635167584, -3.75598829084542, -3.77119589964982, -3.473147], 
    [-2.149558, -2.645414016008, -3.03527442421211, -2.89727675937969, -3.21455947873937, -3.83671844222111, -3.99876230615308,
    -3.58243036818409, -3.042649, -3.03020765182591, -3.12142644722361, -3.20328946873437, -3.22254132266133, -3.52951310255128,
    -3.88737145372686, -4.08384270535268, -4.13267834717359, -3.898784], 
    [-2.655376, -3.11855213306653, -3.38481151175588, -3.25019381790895, -3.73762646423212, -4.40386996598299, -4.6502887953977,
    -4.2991859929965, -3.739044, -3.68073688544272, -3.7583131835918, -3.83132617008504, -3.80666409004502, -3.95050472036018,
    -4.20833182891446, -4.34979449024512, -4.23860422511256, -3.935144], 
    [-3.089209, -3.64977925312656, -3.99542033866934, -4.0285004042021, -5.12962054427214, -5.58258132916458, -5.73773916708354,
    -5.57941299149575, -5.29939268084042, -5.35444868784392, -5.41951487793897, -5.44318511855928, -5.36060110805403,
    -5.28265436718359, -5.32992198149075, -5.18727687243622, -4.7468288164082, -4.498764]
];

// let dataLine = {
//     // waterLevel: 0,
//     // time: 0,
//     depths: depths,
//     // amplitudes: [],
// }

let dataLine1 = {
    x: depths,
    y: amplitudes[0],
    mode: 'lines',
    name: 'Dry',
};

let dataLine2 = {
    x: depths,
    y: amplitudes[1],
    mode: 'lines',
    name: '50 ml',
};

let dataLine3 = {
    x: depths,
    y: amplitudes[2],
    mode: 'lines',
    name: '100 ml',
};

let dataLine4 = {
    x: depths,
    y: amplitudes[3],
    mode: 'lines',
    name: '150 ml',
};

let dataLine5 = {
    x: depths,
    y: amplitudes[4],
    mode: 'lines',
    name: '200 ml',
};

let dataLine6 = {
    x: depths,
    y: amplitudes[5],
    mode: 'lines',
    name: '250 ml',
};

let dataLine7 = {
    x: depths,
    y: amplitudes[6],
    mode: 'lines',
    name: '300 ml',
};

let dataLine8 = {
    x: depths,
    y: amplitudes[7],
    mode: 'lines',
    name: '350 ml',
};

let dataLine9 = {
    x: depths,
    y: amplitudes[8],
    mode: 'lines',
    name: '400 ml',
};

let dataLine10 = {
    x: depths,
    y: amplitudes[9],
    mode: 'lines',
    name: '450 ml',
};

let inputValue = {
    mode: 'markers',
    type: 'scatter',
    name: 'Input Value'
};

var trace2d = [dataLine1, dataLine2, dataLine3, dataLine4, dataLine5, dataLine6, dataLine7, dataLine8, dataLine9, dataLine10, inputValue]

var layout = {
    title: "Time vs. Amplitude at Different Moisture Levels",
    xaxis: {
        title: 'Depth (cm)',
    },
    yaxis: {
        title: 'Amplitude (dB)',
    },
    legend: {
        y: 0.5, 
    }
}


function UpdatePlot() {
    var graphDiv = document.getElementById('ampVsTimePlot')
    var depth = +document.getElementById('depthInput').value;
    var amplitude = +document.getElementById('amplitudeInput').value;

    let newInput = {
        x: [depth],
        y: [amplitude],
        mode: 'markers',
        type: 'scatter',
        name: 'Input Value'
    };

    newData = trace2d[10] = newInput;
    // console.log(graphDiv);
    // console.log(newData);
    // console.log(layout);
    console.log(newData.x);

    Plotly.animate(graphDiv, {
        data: [{x: [depth], y: [amplitude]}],
        traces: [10],
        layout: {}
      }, {
        transition: {
          duration: 500,
          easing: 'cubic-in-out'
        },
        frame: {
          duration: 500
        }
      })
    //Plotly.react(graphDiv, newData, layout);
}

Plotly.newPlot( TESTER, trace2d, layout);
console.log("Creating 2d plot")
let plotIndex = 1;
showPlot(plotIndex);

// Next/previous controls
function changePlot(n) {
  showPlot(plotIndex += n);
}

// Thumbnail image controls
function currentPlot(n) {
  showPlot(plotIndex = n);
}

function showPlot(n) {
    let i;
    let plot = document.getElementsByClassName("plots");
    let dots = document.getElementsByClassName("dot");
    if (n > plot.length) {plotIndex = 1} 
    if (n < 1) {plotIndex = plot.length}
    for (i = 0; i < plot.length; i++) {
      plot[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(plot[plotIndex-1].style)
    plot[plotIndex-1].style.display = "block"; 
    dots[plotIndex-1].className += " active";
}

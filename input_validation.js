
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout", "keypress"].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (event === "keypress" && e.key === "Enter") {
            if (document.activeElement === document.getElementById("amplitudeInput")) {
                console.log(document.activeElement);
                UpdatePlot();
                Update3dPlot();
            } else if (document.activeElement === document.getElementById("depthInput")){
                document.getElementById("amplitudeInput").focus();
                console.log(document.activeElement);
            }
        }
        if (inputFilter(this.value)) {
          // Accepted value
          if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value - restore the previous one
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value - nothing to restore
          this.value = "";
        }
      });
    });
}
  
setInputFilter(document.getElementById("depthInput"), function(value) {
    return /^-?\d*[.,]?\d*$/.test(value) && (value === "" || parseFloat(value) <= 8.15);
}, "Must be a value between 0 and 8.15");
setInputFilter(document.getElementById("amplitudeInput"), function(value) {
    return /^-?\d*[.,]?\d*$/.test(value) && ((value === "" || value === "-") || (parseFloat(value) >= -6.0 && parseFloat(value) <= 2.0));
}, "Must be a value between -6.0 and 2.0");
(function () {
	var numberResult = document.getElementById('fourth-task-result');
 
    var numberInput = document.getElementById('fourth-task-input');
    var previousValue = numberInput.value;
    numberInput.addEventListener('keyup', function (ev) {
        var target = ev.target;
        var value = target.value;
 
        if (isNaN(value)) {
            target.value = previousValue;
            numberResult.style.backgroundColor = 'red';
            numberInput.setAttribute('readonly', 'readonly');
 
            setTimeout(function () {
                numberResult.style.backgroundColor = 'white';
                numberInput.removeAttribute('readonly');
            }, 1000);
        }
        else {
            previousValue = value;
            numberResult.innerText = previousValue;
        }
    });
})();watch
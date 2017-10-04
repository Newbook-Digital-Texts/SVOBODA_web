//(function() {
//    window.onload = function() {
        //var submit = document.getElementById("submit");
        //submit.onclick = validate;
    //};

    function validate() {

        // Get the value of the input field with id="numb"
        var x = document.querySelectorAll(".field");

        var flag = true;

        // If x is Not a Number or less than one or greater than 10
        for (var i = 0; i < x.length; i++) {
            if (x[i].value == "") {

                flag = false;
            }
        }
        if (flag == false) {
            alert("form cannot be submitted, fields left empty");
            return false;
        }
    }


//})();

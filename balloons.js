//RANDOMIZER FUNCTION
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//On startup
document.addEventListener("DOMContentLoaded", function () {
    const animateClass = ['animate__fadeIn', 'animate__flip', 'animate__lightSpeedInRight'];
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });
    var randomClass = getRandomElement(animateClass);
    var greeting = document.getElementById('greeting');
    greeting.classList.add("animate__animated", randomClass);

    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    var boxchecker = true;
    
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";

            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__fadeOutDown");
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__fadeOutDown");
            if (e.target.checked) {
                boxchecker = false;
            }
            else {
                boxchecker = true;
            }
        }
    });

    // Event Listener for Click on Buttons
    document.getElementById("checkbox-card").addEventListener('click', function (e) {
        console.log("clicked me");
        if (e.target.id == "none") {
            document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

        }
        if (e.target.id == "all") {

            document.querySelectorAll('.form-check-input').forEach(c => c.checked = true);
        }
    });
    // Event Listener for Click on Submit
    document.getElementById('submit').addEventListener('click', function (e) {
        if (boxchecker)
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    });

    // Event listener for mouseover
    document.getElementById("checkbox-card").addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            console.log(e.target.dataset['color']);
            greeting.style.color = e.target.dataset['color'];
        }
    });

    // Event listener for mouseout
    document.getElementById("checkbox-card").addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('form-check-label')) {
            greeting.style.color = "black";
        }
    });
});


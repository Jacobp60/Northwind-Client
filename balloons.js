document.addEventListener("DOMContentLoaded", function() {
    console.log("hello world!");
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
      });
  });
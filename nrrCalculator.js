jQuery(function ($) {
  $(document).ready(function () {
    (function () {
      $("#fInngRuns, #sInngRuns, #fInngOvers, #sInngOvers").on(
        "input",
        function () {
          var b1r = $("#fInngRuns").val();
          var b1o = parseFloat($("#fInngOvers").val()); // Parse the input value as a float
          var b2r = $("#sInngRuns").val();
          var b2o = parseFloat($("#sInngOvers").val()); // Parse the input value as a float

          if (!isNaN(b1o) && !isNaN(b2o)) {
            if (b1r != "" && !isNaN(b1o) && b2r != "" && !isNaN(b2o)) {
              var frr = b1r / b1o;
              var srr = b2r / b2o;
              var calc = Number(frr - srr).toFixed(14);
              $("#nrrTBF").val(-(-calc));
            }
          }
        }
      );
    })();
  });
});
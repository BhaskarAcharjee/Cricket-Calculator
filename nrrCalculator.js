//"^[0-9]\d{0,2}$"
jQuery(function ($) {
  $(document).ready(function () {
    (function () {
      $("#fInngRuns, #sInngRuns, #fInngOvers, #sInngOvers").on(
        "input",
        function () {
          var b1r = $("#fInngRuns").val();
          var b1o = $("#fInngOvers").val();
          var b2r = $("#sInngRuns").val();
          var b2o = $("#sInngOvers").val();
          if (b1o.includes(".")) {
            var reo = b1o.split(".");
            if (b2o.includes(".")) {
              var res = b2o.split(".");

              if (b1r != "" && b1o != "" && b2r != "" && b2o != "") {
                var frr = b1r / (Number(reo[0]) + Number(reo[1] / 6));
                var srr = b2r / (Number(res[0]) + Number(res[1] / 6));
                var calc = Number(frr - srr).toFixed(14);
                //       var calc = ((b1r / b1o) - (b2r / (Number(res[0]) + Number((res[1] / 6)))));
                $("#nrrTBF").val(-(-calc));
                //   $("#nrrTBS").val(-calc);
              }
            }
            //     else {
            //     if (b1r != "" && b1o != "" && b2r != "" && b2o != "") {
            //       var frr = b1r / b1o;
            //       var srr = b2r / b2o;
            //       var calc = Number(frr - srr).toFixed(14);
            //       $("#nrrTBF").val(-(-calc));
            //       //   $("#nrrTBS").val(-calc);
            //     }
          }
        }
      );
    })();
  });
});

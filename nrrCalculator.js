jQuery(function ($) {
  $(document).ready(function () {
    // Tab Switching
    $("#calculatorTabs a").on("click", function (e) {
      e.preventDefault();
      $(this).tab("show");
    });

    $("#calculatorTabs a:first").tab("show");


    // NRR Calculator
    $("#fInngRuns, #sInngRuns, #fInngOvers, #sInngOvers").on("input", function () {
      calculateNRR();
    });

    function calculateNRR() {
      var b1r = $("#fInngRuns").val();
      var b1o = parseFloat($("#fInngOvers").val());
      var b2r = $("#sInngRuns").val();
      var b2o = parseFloat($("#sInngOvers").val());

      if (!isNaN(b1o) && !isNaN(b2o)) {
        if (b1r !== "" && !isNaN(b1o) && b2r !== "" && !isNaN(b2o)) {
          var frr = b1r / b1o;
          var srr = b2r / b2o;
          var calc = Number(frr - srr).toFixed(14);
          $("#nrrTBF").val(calc);
        } else {
          $("#nrrTBF").val("");
        }
      } else {
        $("#nrrTBF").val("");
      }
    }

    // DLS Calculator
    $("#teamAScore, #teamAWickets, #teamAExtraOvers, #teamBWickets").on("input", function () {
      calculateDLS();
    });

    function calculateDLS() {
      var teamAScore = $("#teamAScore").val();
      var teamAWickets = parseInt($("#teamAWickets").val());
      var teamAExtraOvers = parseFloat($("#teamAExtraOvers").val());
      var teamBWickets = parseInt($("#teamBWickets").val());

      if (!isNaN(teamAWickets) && !isNaN(teamBWickets)) {
        if (teamAScore !== "" && !isNaN(teamAWickets) && !isNaN(teamAExtraOvers) && !isNaN(teamBWickets)) {
          var target = Math.floor((teamAScore * (50 - teamAExtraOvers)) / 50 + 1);

          if (teamAWickets > teamBWickets) {
            target += Math.floor((teamAWickets - teamBWickets) / 2) + 1;
          }

          $("#dlsResult").val(target);
        } else {
          $("#dlsResult").val("");
        }
      } else {
        $("#dlsResult").val("");
      }
    }

    $("#dlsCalculateBtn").on("click", function () {
      calculateDLS();
    });
  });
});

	var chartData = document.getElementById('chart-data');
    var anos = JSON.parse(chartData.getAttribute('data-anos'));
    var valores = JSON.parse(chartData.getAttribute('data-valores'));
    var chartType = 'bar';
    var ctx = document.getElementById('emissoesChart').getContext('2d');
    var emissoesChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: anos,
        datasets: [{
          label: 'Emissões de CO₂ (toneladas)',
          data: valores,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    function updateChartType(type) {
      chartType = type;
      emissoesChart.destroy();
      emissoesChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: anos,
          datasets: [{
            label: 'Emissões de CO₂ (toneladas)',
            data: valores,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }

    function filterList(inputId, listId) {
      var input = document.getElementById(inputId);
      var filter = input.value.toLowerCase();
      var list = document.getElementById(listId);
      var items = list.getElementsByTagName('li');
      
      for (var i = 0; i < items.length; i++) {
        var empresa = items[i].getAttribute('data-empresa');
        if (empresa.indexOf(filter) > -1) {
          items[i].style.display = "";
        } else {
          items[i].style.display = "none";
        }
      }
    }

    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDetails = document.getElementById("modalDetails");
    var span = document.getElementsByClassName("close")[0];

    function openModal(event) {
      var target = event.currentTarget;
      var empresa = target.querySelector("strong").innerText;
      var detalhes = target.getAttribute("data-detalhes") || "Nenhum detalhe adicional disponível.";
      
      modalTitle.innerText = empresa;
      modalDetails.innerText = detalhes;
      
      modal.style.display = "block";
    }

    var top5Items = document.querySelectorAll("#top5List li");
    top5Items.forEach(function(item) {
      item.addEventListener("click", openModal);
    });

    var energia_empresas = document.querySelectorAll("#consumoList li");
    energia_empresas.forEach(function(item) {
      item.addEventListener("click", openModal);
    });

    span.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
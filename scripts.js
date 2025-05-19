document.addEventListener('DOMContentLoaded', function () {
  // Bar Chart
  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['2010', '2013', '2016', '2019', '2021', '2023'],
      datasets: [{
        label: 'Groundwater Level (in billion cubic meters)',
        data: [600, 570, 540, 500, 470, 430],
        backgroundColor: '#007f5f',
        borderRadius: 5,
      }]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Depletion: ${context.raw} bcm`;
            }
          }
        }
      }
    }
  });

  // Pie Chart
  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Agriculture', 'Household', 'Industry'],
      datasets: [{
        label: 'Water Usage',
        data: [80, 15, 5],
        backgroundColor: ['#94d2bd', '#0a9396', '#005f73'],
      }]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw}%`;
            }
          }
        }
      }
    }
  });

  // Dotted Graph
  const dottedCtx = document.getElementById('dottedChart').getContext('2d');
  new Chart(dottedCtx, {
    type: 'line',
    data: {
      labels: ['Maharashtra', 'Tamil Nadu', 'Punjab', 'Rajasthan', 'Uttar Pradesh'],
      datasets: [{
        label: 'Water Availability (litres/person/day)',
        data: [45, 50, 30, 25, 55],
        borderColor: '#bb3e03',
        borderDash: [5, 5],
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw} L/person/day`;
            }
          }
        }
      }
    }
  });
});

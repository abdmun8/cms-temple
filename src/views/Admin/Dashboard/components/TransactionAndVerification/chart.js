import palette from 'theme/palette';

export const data = {
  labels: ['KFC', 'Solaria', 'Afung', 'Amazon', 'Chatime'],
  datasets: [
    {
      label: 'Transaction',
      backgroundColor: '#BB010A',
      data: [2000, 1000, 800, 700, 600]
    },
    {
      label: 'Verification',
      backgroundColor: '#5A7CAA',
      data: [1800, 900, 750, 650, 550]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: true, position: 'bottom' },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 15,
        maxBarThickness: 14,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
        ticks: {
          fontColor: palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: palette.divider
        }
      }
    ]
  }
};

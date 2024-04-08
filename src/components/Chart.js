import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ labels, data, mej }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destruir el gráfico anterior si existe
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Crear un nuevo gráfico
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Datos',
          data: data,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.4,
          fill: false
        },
        {
            label: 'Mejor Metodo',
            data: mej,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.4,
            fill: false
        
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Guardar la instancia del gráfico en la referencia
    chartRef.current.chart = chartInstance;
  }, [labels, data]);

  return <canvas ref={chartRef} />;
}

export default ChartComponent;

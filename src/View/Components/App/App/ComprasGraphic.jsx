import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Registre os componentes necessários do Chart.js
Chart.register(...registerables);

const App = () => {
  const labels = Array.from({ length: 30 }, (_, i) => `${i + 1}`); // Dias do mês

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Compras do Mês Anterior',
        data: [12, 15, 20, 22, 25, 30, 18, 20, 35, 40, 32, 28, 15, 12, 10, 20, 25, 30, 20, 18, 15, 10, 5, 8, 15, 20, 22, 30, 40, 35], // Exemplo de dados para o mês anterior
        borderColor: 'rgba(255, 165, 0, 1)', // Nova cor da linha para o mês anterior (laranja)
        backgroundColor: 'rgba(255, 165, 0, 0.2)', // Nova cor de fundo para a área do mês anterior (laranja claro)
        fill: true,
      },
      {
        label: 'Compras neste Mês',
        data: [15, 18, 25, 30, 28, 35, 22, 30, 40, 45, 38, 34, 20, 15, 12, 22, 28, 35, 25, 22, 18, 12, 8, 10, 18, 22, 25, 35, 45, 40], // Exemplo de dados para o mês atual
        borderColor: 'rgba(0, 128, 0, 1)', // Nova cor da linha para o mês atual (verde)
        backgroundColor: 'rgba(0, 128, 0, 0.2)', // Nova cor de fundo para a área do mês atual (verde claro)
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Dia do Mês',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Número de Compras do Site',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex">
      <div className="w-full max-w-xl">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default App;

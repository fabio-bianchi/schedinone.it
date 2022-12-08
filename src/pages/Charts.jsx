import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import makeData from '../makeData';
import _ from 'lodash';
import { memo } from 'react';
import { Colors } from 'chart.js';
import partial from '../results.json'

ChartJS.defaults.font.size = 14;
ChartJS.defaults.font.weight = 'bold';
ChartJS.defaults.color = '#000000';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);
ChartJS.register(Colors);

const Charts = memo(function Charts() {
  const all = makeData();

  const winners = _.groupBy(all, 'Vincitore');
  const data = {
    labels: _.keys(winners),
    datasets: [
      {
        label: 'Vincitore',
        data: _.map(winners, 'length'),
        borderWidth: 1,
        backgroundColor: ["#1077C3", "#FEC310","#56042C","#49bce3","#4911e3", "#49112c", "#cc11e3", "#4ff1e3", "#56049D"]
      },
    ],
  };

  const keepers = _.groupBy(all, 'Miglior portiere');
  const goalkeeper = {
    labels: _.keys(keepers),
    datasets: [
      {
        label: 'Miglior portiere',
        data: _.map(keepers, 'length'),
        borderWidth: 1,
        backgroundColor: ["#1077C3", "#FEC310","#56042C","#49bce3","#4911e3", "#49112c", "#cc11e3", "#4ff1e3", "#56049D"]
      },
    ],
  };

  const labels = _.map(_.orderBy(partial,["Totale"], ["desc"]), "Nome")
  const partialData = {
    labels: labels,
    datasets: [
      {
        label: 'Punteggi parziali',
        data: _.map(labels, (name)=> {
          return _.find(partial, {Nome:name}).Totale
        }),
        borderWidth: 1,
        backgroundColor: ["#1077C3", "#FEC310","#56042C","#49bce3"]
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Punteggi parziali',
      },
    },
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 1,
      }
    },
  };

  return (
    <>
      
      <div className='statsContainer' style={{textAlign: 'center' }}>
        <Bar options={options} data={partialData} />
      </div>
      <h2 style={{ textAlign: 'center', color: "#56042C"}}>Vincitore</h2>
      <div className='statsContainerSmall' style={{maxHeight:750, textAlign: 'center' }}>
        <Pie data={data} />
      </div> 
      <h2 style={{ textAlign: 'center', color: "#56042C"}}>Miglior portiere</h2>
      <div className='statsContainerSmall' style={{maxHeight:750, textAlign: 'center' }}>
        <Pie data={goalkeeper} />
      </div> 
    </>
  );
});

export default Charts;

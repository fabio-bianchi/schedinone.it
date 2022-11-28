import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import makeData from '../makeData';
import _ from 'lodash';
import { memo } from 'react';
import { Colors } from 'chart.js';
import partial from '../partial.json'

ChartJS.defaults.font.size = 14;
ChartJS.defaults.font.weight = 'bold';
ChartJS.defaults.color = '#ffffff';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
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
        backgroundColor: ["#1077C3", "#FEC310","#56042C"]
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 1,
      }
    },
  };

  return (
    <>
      {/* <div style={{ width: '600px', textAlign: 'center' }}>
        <Pie label="Vincitore" data={data} />
      </div> */}
      <div className='statsContainer' style={{textAlign: 'center' }}>
        <Bar options={options} data={partialData} />
      </div>
    </>
  );
});

export default Charts;

import { ChartInterface } from '../../interfaces/chart.interface';

export const chartData: ChartInterface[] = [
  {
    name: 'Germany',
    value: 8940000,
  },
  {
    name: 'USA',
    value: 5000000,
  },
  {
    name: 'France',
    value: 7200000,
  },
  {
    name: 'mexico',
    value: 3200000,
  },
];

export const multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        value: 7300000,
      },
      {
        name: '2011',
        value: 8940000,
      },
    ],
  },

  {
    name: 'USA',
    series: [
      {
        name: '2010',
        value: 7870000,
      },
      {
        name: '2011',
        value: 8270000,
      },
    ],
  },

  {
    name: 'France',
    series: [
      {
        name: '2010',
        value: 5000002,
      },
      {
        name: '2011',
        value: 5800000,
      },
    ],
  },
];

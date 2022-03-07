import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  RadialLinearScale,
  ArcElement
} from 'chart.js'
import { Bar, Line, Pie } from 'react-chartjs-2'
import faker from 'faker'
import { Card, CardContent, Grid } from '@mui/material'
import { colors } from '../../theme/colors/colors'
import { CustomTypography } from '../../components/ui-kit/atoms/Typography/CustomTypography'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

// ---------Line Chart Data------------
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end'
    },
    title: {
      display: false,
      text: 'NGR'
    }
  }
}
const lineChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: colors.mountainMeadow,
      backgroundColor: colors.lineChartTransparency,
      fill: true
    }
  ]
}

// --------- Bar Chart Data------------
const barChartOptions = {
  plugins: {
    legend: {
      position: 'top',
      align: 'end'
    },
    title: {
      display: false,
      text: 'All & Unique Visitors'
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true
    }
  }
}
const barChartData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: colors.frenchGray
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: colors.majorelleBlue
    }
  ]
}

// Pie Area Chart
const PieChartData = {
  labels: ['Roulette', 'Baccarat', 'Black Jack'],
  datasets: [
    {
      label: '# of Votes',
      data: [77, 32, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)'
      ],
      borderWidth: 1
    }
  ]
}

// Card Data
const cardData = [
  {
    title: 'TOTAL BET',
    value: '8,000.00',
    text: 'USD'
  },
  {
    title: 'TOTAL WIN',
    value: '6,442.78',
    text: 'USD'
  },
  {
    title: 'NGR',
    value: '1,355.25',
    text: 'USD'
  },
  {
    title: 'HOUSE HOLD',
    value: '77%',
    text: 'PERCENTAGE'
  }
]

export const Dashboard = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ marginBottom: 5 }}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Grid container spacing={4}>
            {
                cardData.map((item, index) => {
                  let bgColor
                  if (index === 0) {
                    bgColor = colors.dodgerBlue
                  } else if (index === 1) {
                    bgColor = colors.flamingo
                  } else if (index === 2) {
                    bgColor = colors.mountainMeadow
                  } else if (index === 3) {
                    bgColor = colors.butterCup
                  }
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={item.title}>
                      <Card elevation={5}>
                        <CardContent>
                          <CustomTypography
                            color={colors.mirage}
                            value={item.title}
                            sx={{
                              fontWeight: 600,
                              fontSize: '20px'
                            }}
                            align='center'
                          />
                          <hr style={{ width: '100px' }} />
                          <br />
                          <CustomTypography
                            color={bgColor}
                            value={item.value}
                            sx={{
                              fontWeight: 700,
                              fontSize: '46px'
                            }}
                          />
                          <br />
                          <CustomTypography
                            value={item.text}
                            sx={{
                              fontWeight: 500,
                              fontSize: '22px'
                            }}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                })
              }
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Card elevation={5}>
            <div style={{ display: 'block', height: '460px', width: '460px', padding: '20px', margin: 'auto' }}>
              <Pie data={PieChartData} />
            </div>
          </Card>
        </Grid>
      </Grid>
      <Card elevation={5} sx={{ marginBottom: 5 }}>
        <CardContent>
          <CustomTypography variant='h6' value='All & Unique Visitors' sx={{ fontWeight: 600 }} />
          <Bar options={barChartOptions} data={barChartData} height={70} />
        </CardContent>
      </Card>
      <Card elevation={5}>
        <CardContent>
          <CustomTypography variant='h6' value='NGR' sx={{ fontWeight: 600 }} />
          <Line options={lineChartOptions} data={lineChartData} height={70} />
        </CardContent>
      </Card>
    </>
  )
}

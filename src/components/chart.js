import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import moment from 'moment';

const Chart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="attributes.timestamp" tickFormatter={(tick) => moment(tick).utc().format('DD/MM/YYYY-HH:mm')} label={{ value: "Time", position: "insideBottomRight", dy: 10 }} />
          <YAxis label={{ value: "Temperature", position: "insideLeft", angle: -90, dy: -10 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="attributes.temp_number" stroke="#8884d8"
            name="Temperature" />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
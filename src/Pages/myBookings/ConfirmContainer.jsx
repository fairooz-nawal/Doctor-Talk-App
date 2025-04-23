import React from 'react';
import ConfirmBooking from './ConfirmBooking';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const ConfirmContainer = ({ bookedDoctor }) => {
    const chartData = bookedDoctor.map((doc,) => ({
        name: doc.name,
        uv: parseInt(doc.fee),
    }
    ));
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
    
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='max-w-full lg:max-w-5xl mx-auto space-y-4 text-center py-[100px]'>
            <BarChart
                width={1000}
                height={300}
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            <div className="text-center">
                <h1 className="text-3xl lg:text-5xl font-bold">My Today Appointments</h1>
                <p className="py-6">
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                </p>
            </div>
            {
                bookedDoctor.map(singleDoc => <ConfirmBooking key={singleDoc.id} booking={singleDoc}></ConfirmBooking>)
            }
        </div>
    );
};

export default ConfirmContainer;
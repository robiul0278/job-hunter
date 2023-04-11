import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const marks = [
    { id: 1, name: "Assignment 1", mark: 60 },
    { id: 2, name: "Assignment 2", mark: 55 },
    { id: 3, name: "Assignment 3", mark: 55 },
    { id: 4, name: "Assignment 4", mark: 36 },
    { id: 5, name: "Assignment 5", mark: 55 },
    { id: 6, name: "Assignment 6", mark: 54 },
    { id: 7, name: "Assignment 7", mark: 60 },
    { id: 8, name: "Assignment 8", mark: 59 },
  ];
  return (
    <div>
        <div>
        <div className="detailsArea grid grid-cols-12">
        <div className=" col-span-3 bottom-0 left-0"><img className="w-80" src="/public/Image/Vector.png" alt="" /></div>
        <div className=" col-span-6 flex justify-center items-center"><h1 className="text-center font-bold">SimpleAreaChart</h1></div>
        <div className=" col-span-3 absolute top-0 right-0"><img src="/public/Image/Vector-1.png" alt="" /></div>
      </div>
        </div>
        <div className="container mx-auto flex justify-center my-12">
        <AreaChart
          width={800}
          height={400}
          data={marks}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
    </div>
    </div>
  );
};

export default Statistics;

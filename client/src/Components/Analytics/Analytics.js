import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'; // Import necessary components from recharts
import projectsData from '../projects.json'; // Assuming your JSON data is in Projects.json

const Analytics = () => {
  const [technologyData, setTechnologyData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Process projectsData to get technology distribution
    const technologyCounts = {};
    projectsData.forEach((project) => {
      const tech = project.technology;
      if (tech in technologyCounts) {
        technologyCounts[tech]++;
      } else {
        technologyCounts[tech] = 1;
      }
    });

    // Convert technologyCounts object to an array of objects for recharts PieChart
    const technologyChartData = Object.keys(technologyCounts).map((key) => ({
      name: key,
      value: technologyCounts[key],
      projects: projectsData.filter((project) => project.technology === key),
    }));

    setTechnologyData(technologyChartData);
  }, []);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h2>Technology Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={technologyData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text x={x} y={y} fill={activeIndex === index ? '#fff' : '#000'} textAnchor="middle" dominantBaseline="central">
                  {`${value} Projects`}
                </text>
              );
            }}
            onMouseEnter={onPieEnter}
          >
            {technologyData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      {activeIndex !== null && (
        <div>
          <h3>{technologyData[activeIndex].name}</h3>
          <ul>
            {technologyData[activeIndex].projects.map((project, index) => (
              <li key={index}>{project.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Analytics;
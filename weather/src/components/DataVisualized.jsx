import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';


const DataVisualized = ({ forecast }) => {
    const svgRef = useRef();
  
    useEffect(() => {
      if (!forecast) return;
  
      const margin = { top: 20, right: 30, bottom: 30, left: 60 };
      const width = 600 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;
  
      const svg = d3
        .select(svgRef.current)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      const x = d3.scaleTime().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);
  
      x.domain(d3.extent(forecast.forecastday, (d) => new Date(d.date)));
      y.domain([0, d3.max(forecast.forecastday, (d) => d.day.maxtemp_c)]);
  
      const line = d3
        .line()
        .x((d) => x(new Date(d.date)))
        .y((d) => y(d.day.maxtemp_c));
  
      svg
        .append('path')
        .datum(forecast.forecastday)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 2)
        .attr('d', line);
  
      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));
  
      svg.append('g').call(d3.axisLeft(y));
    }, [forecast]);
  
    return (
      <svg ref={svgRef} width={600} height={400}>
        <g></g>
      </svg>
    );
  };
  
  export default DataVisualized;
  
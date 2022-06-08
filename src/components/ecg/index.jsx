import React from "react";
import CanvasJSReact from "./canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PatientEcgComponent = ({ dataPoints, id }) => {
  const addDataPointsAndStripLines = () => {
    const xAxisStripLinesArray = [];
    const yAxisStripLinesArray = [];
    const dps = [];

    //dataPoints
    for (let i = 0; i < dataPoints.length; i++) {
      dps.push({ y: dataPoints[i] });
    }

    //StripLines
    for (let i = 0; i < 3000; i = i + 100) {
      if (i % 1000 !== 0)
        yAxisStripLinesArray.push({
          value: i,
          thickness: 0.7,
          color: "#DC74A5",
        });
    }
    for (let i = 0; i < 1400; i = i + 20) {
      if (i % 200 !== 0)
        xAxisStripLinesArray.push({
          value: i,
          thickness: 0.7,
          color: "#DC74A5",
        });
    }

    return {
      title: {},
      subtitles: [],
      animationEnabled: true,
      zoomEnabled: true,
      axisY: {
        stripLines: yAxisStripLinesArray,
        gridThickness: 2,
        gridColor: "#DC74A5",
        lineColor: "#DC74A5",
        tickColor: "#DC74A5",
        labelFontColor: "#DC74A5",
      },
      axisX: {
        stripLines: xAxisStripLinesArray,
        gridThickness: 2,
        gridColor: "#DC74A5",
        lineColor: "#DC74A5",
        tickColor: "#DC74A5",
        labelFontColor: "#DC74A5",
      },
      data: [
        {
          type: "spline",
          color: "black",
          dataPoints: dps,
        },
      ],
    };
  };

  return <CanvasJSChart key={id} options={addDataPointsAndStripLines()} />;
};

export default PatientEcgComponent;

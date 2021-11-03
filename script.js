(function () {
	var d3 = Plotly.d3;

	var WIDTH_IN_PERCENT_OF_PARENT = 60,
		HEIGHT_IN_PERCENT_OF_PARENT = 80;

	var gd3 = d3
		.select("body")
		.append("div")
		.style({
			width: WIDTH_IN_PERCENT_OF_PARENT + "%",
			"margin-left": (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + "%",

			height: HEIGHT_IN_PERCENT_OF_PARENT + "vh",
			"margin-top": (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + "vh"
		});

	var gd = gd3.node();

	var volData = {
		x: [
			"2021-10-15"
		],
		y: [
			"0"
		],
		type: "bar",
		name: "",
		marker: {
			color: "#00DE8D"
		},
		showlegend: false
	};
	var priceData = {
		x: [
			"2021-10-15"
		],
		y: [
			"1.25"

		],
		yaxis: "y2",
		type: "scatter",
		name: "",
		//mode: 'lines+markers',
		line: {
			color: "#00DE8D"
		},
		fill: "tozeroy",
		fillcolor: "rgba(0,222,141,0.1)", // this just needs to be the line color @ 10% opacity
		showlegend: false
	};
	var data = [priceData];

	var layout = {
		height: 420,
		spikedistance: 420, // should match height
		margin: {
			t: 30,
			b: 42,
			l: 54,
			r: 30
		},
		font: {
			family: "Roboto Mono, Droid Sans Mono, monospace",
			size: 12,
			color: "#93979E"
		},
		hoverlabel: {
			bgcolor: "rgba(24,25,26,0.8)",
			bordercolor: "transparent",
			font: {
				family: "roboto mono",
				size: 12,
				color: "#fff"
			}
		},
		xaxis: {
			showline: true,
			linecolor: "#E6E8EC",
			type: "date",
			showgrid: false,
			ticks: "outside",
			tickcolor: "#E6E8EC",
			ticklen: 9,
			showspikes: true,
			spikecolor: "#93979E",
			spikethickness: 1,
			spikedash: "3px,3px",
			spikemode: "across",
			spikesnap: "cursor"
		},
		yaxis: {
			// Volume Chart
			domain: [0, 0.15],
			fixedrange: true,
			zeroline: true,
			zerolinecolor: "#E6E8EC",
			nticks: 3
		},
		yaxis2: {
			// Price Chart
			domain: [0.225, 1],
			fixedrange: true,
			showline: false,
			zeroline: true,
			zerolinecolor: "#E6E8EC",
			showspikes: false,
			spikecolor: "#93979E",
			spikethickness: 1,
			spikedash: "3px,3px",
			spikemode: "across",
			tickprefix: "$"
		},
		images: [
			{
				x: 0.975,
				y: 0.375,
				sizex: 0.15,
				sizey: 0.15,
				source: "https://welnance.finance/mocks/wel.png",
				xanchor: "right",
				xref: "paper",
				yanchor: "top",
				yref: "paper",
				opacity: 0.175
			}
		]
	};

	var hideOptions = { displayModeBar: false };

	Plotly.newPlot("myDiv", data, layout, hideOptions);

	window.onresize = function () {
		Plotly.Plots.resize("myDiv", gd, data, layout, hideOptions);
	};
})();

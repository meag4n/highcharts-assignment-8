// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'Strawberries']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Laura and Kelly\'s house'
      }
    },
    series: [{
      name: 'Laura',
      data: [1, 0, 4, 6]
    }, {
      name: 'Kelly',
      data: [5, 7, 3, 6]
    }]
  });

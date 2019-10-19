Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Projected Long-Term Growth for Communications Jobs in Florida'
    },
    subtitle: {
        text: 'Source: ProjectionsCentral.com'
    },
    xAxis: {
        categories: [
            'Advertising and Promotion Managers',
            'Editors',
            'Marketing Managers',
            'Public Relations Specialists',
            'Reporters and Correspondents',
            'Other Media and Communications Workers'
        ],
        crosshair: true
    },
    yAxis: {
        tickPositions: [0, 4000, 8000, 12000, 16000],
        title: {
            text: 'Job Openings Available'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} openings</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Base (2016)',
        data: [860, 5550, 8080, 12980, 2450, 2980]

    }, {
        name: 'Projected (2026)',
        data: [1000, 5370, 9960, 15010, 2190, 3420]
    }]
});
Highcharts.chart('container2', {

    title: {
        text: 'States with the Largest Projected Job Growth for Public Relations Specialists'
    },

    subtitle: {
        text: 'Source: ProjectionsCentral.com'
    },

    yAxis: {
        title: {
            text: 'Job Openings Available'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2016
        }
    },

    series: [{
        name: 'Texas',
        data: [30090, 30624, 31158, 31692, 32226, 32760, 33294, 33828, 34362, 34896, 35430]
    },{
        name: 'New York',
        data: [28400, 28821, 29242,29663, 30084, 30505, 30926, 31347, 31768, 32189, 32610]
    },{
        name: 'California',
        data: [26500, 26800, 27100, 27400, 27700, 28000, 28300, 28600, 28900, 29200, 29500]
    },{
        name: 'District of Columbia',
        data: [17540, 17675, 17810, 17945, 18080, 18215, 18350, 18485, 18620, 18755, 18890]
    },{
        name: 'Florida',
        data: [12980, 13183, 13386, 13589, 13792, 13995, 14198, 14401, 14604, 14807, 15010]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

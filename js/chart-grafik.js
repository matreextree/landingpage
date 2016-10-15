<script type="text/javascript">
$(function () {

    $('#highChart').highcharts({

        chart: {
        	backgroundColor: '#222a35',
            type: 'columnrange',
            inverted: true
        },

        title: {
        	style:{
        		color: '#ffffff'	
        	},
            text: 'AVG. HOURLY RATES FOR MGMT CONSULTANTS BY LEVEL'
        },

        subtitle: {
        	style:{
        		color: '#ffffff'	
        	},
            text: 'Source: Consultancy.uk Analysis, based on data from Gartner'
        },

        xAxis: {
        	labels: {
        		style: {
            		color: 'white'
        		}
    		},
            categories: ['Partner', 'Manager', 'Post-MBA-Consultant', 'Pre-MBA Consultant']
        },

        yAxis: {
        	labels: {
        		style: {
            		color: 'white'
        		}
    		},
            title: {
          		style: {
            		color: 'white'
        		},
                text: 'US $'
            }
        },

        tooltip: {
            valuePrefix: 'US $ '
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return 'US$ '+this.y;
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Salary',
            color: '#ed7d31',
            data: [
                [800, 1200],
                [600, 900],
                [400, 600],
                [250, 400]
            ]
        }]

    });

});
		</script>
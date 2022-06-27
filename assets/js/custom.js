jQuery(function($) {
    'use strict';

    /*============================================
     Checkbox
     ==============================================*/
    var this_var = $(this);
    $('.payment-inner-box input:checkbox').change(function() {
        if (this_var.is(":checked")) {
            this_var.closest("a").addClass("active");
        } else {
            this_var.closest("a").removeClass("active");
        }
    });


    /*============================================
      line chart
      ==============================================*/
    if ("#order-chart".length) {
        var options = {
            chart: {
                height: 215,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },

            legend: {
                show: true,
                offsetY: 180,
            },

            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#order-chart"),
            options
        );

        chart.render();
    }

    /*============================================
       Main Chart
       ==============================================*/
    if ("#chart".length) {
        var options = {
            chart: {
                height: 380,
                type: 'area',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                    name: 'Trial',
                    data: [31, 40, 28, 60, 42]
                },
                {
                    name: 'Live',
                    data: [20, 8, 50, 32, 34]
                }
            ],

            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
            legend: {
                show: true,
                offsetY: 340,
            },

            grid: {
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },

        }

        var chart = new ApexCharts(
            document.querySelector("#chart"),
            options
        );

        chart.render();
    }

    /*============================================
      Donut chart
      ==============================================*/
    if ("#donut-chart".length) {

        var options = {
            chart: {
                width: 250,
                type: 'donut',
                height: 230,
            },
            dataLabels: {
                enabled: false
            },
            series: [44, 55, 13, 33],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                show: false,
                position: 'left',
                offsetY: 230,
                height: 230,
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#donut-chart"),
            options
        );

        chart.render()

        function appendData() {
            var arr = chart.w.globals.series.slice()
            arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
            return arr;
        }

        function removeData() {
            var arr = chart.w.globals.series.slice()
            arr.pop()
            return arr;
        }

        function randomize() {
            return chart.w.globals.series.map(() => {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
        }

        function reset() {
            return options.series
        }

    }

    /*============================================
      Pie chart
      ==============================================*/
    if ("#pie-chart".length) {
        var options = {
            chart: {
                width: 250,
                type: 'pie',
                height: 230,
            },
            dataLabels: {
                enabled: false
            },
            series: [44, 68, 28, 40],
            colors: ['#7285ee', '#5d71e4', '#4055d0', '#314adb'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                show: false,
                position: 'left',
                offsetY: 230,
                height: 230,
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#pie-chart"),
            options
        );

        chart.render()

        function appendData() {
            var arr = chart.w.globals.series.slice()
            arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
            return arr;
        }

        function removeData() {
            var arr = chart.w.globals.series.slice()
            arr.pop()
            return arr;
        }

        function randomize() {
            return chart.w.globals.series.map(() => {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
        }

        function reset() {
            return options.series
        }

    }



    /*============================================
      Data chart
      ==============================================*/
    if ("#data-chart".length) {
        var options = {
            chart: {
                height: 250,
                type: 'area',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42]
            }],

            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00"],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#data-chart"),
            options
        );

        chart.render();
    }
    /*============================================
      Data table
      ==============================================*/
    var mytable = $('#myTable');
    if (mytable.length) {
        mytable.DataTable();
    }

    /*============================================
      Scrollbar
      ==============================================*/
    var scroll_table = $('.scroll-table');
    if (scroll_table.length) {
      scroll_table.mCustomScrollbar();
    }

    /*============================================
      Search
      ==============================================*/
      var togglebuilder = $('.search-btn-offset, .close-btn-sm');
      var search_wrapper = $(".search-wrapper-side");
      if (togglebuilder.length) {
          togglebuilder.on('click',function(){
            search_wrapper.toggleClass("offset-pull");
          });
      }
});
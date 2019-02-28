import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
    selector: 'app-estadisticas',
    templateUrl: './estadisticas.component.html',
    styleUrls: ['./estadisticas.component.scss']
})
export class GestionEstadisticasComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        const myChart = echarts.init(document.getElementById('main'));
        const myChart2 = echarts.init(document.getElementById('main2'));

        // specify chart configuration item and data
        const option = {
            title: {
                text: 'Notificaciones'
            },
            tooltip: {},
            legend: {
                data: ['Nº de notificaciones']
            },
            xAxis: {
                data: ['Leídas', 'Firmadas', 'rechazadas', 'Devueltas']
            },
            yAxis: {},
            series: [{
                name: 'Nº de notificaciones',
                type: 'bar',
                data: [5, 20, 36, 10]
            }],
            color: '#ba283b'
        };
        const option2 = {
            title: {
                text: 'Comunicaciones',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Leídas', 'Firmadas', 'rechazadas', 'Devueltas']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            series: [
                {
                    name: 'Comunicaciones',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Leídas' },
                        { value: 310, name: 'Firmadas' },
                        { value: 234, name: 'rechazadas' },
                        { value: 135, name: 'Devueltas' }
                    ]
                }
            ],
            color : [ '#ba283b', '#cccccc', '#333333', '#666666', '#e3eeee', '#f6f6f6']
        };
        // use configuration item and data specified to show chart
        myChart.setOption(option);
        myChart2.setOption(option2);
    }

}

const ctx = document.getElementById('fraudChart');

new Chart(ctx, {

    type: 'line',

    data: {

        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],

        datasets: [{

            label: 'Fraud Transactions',

            data: [12, 19, 8, 15, 7, 11],

            borderColor: '#38bdf8',

            tension: 0.4,

            fill: false

        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                labels: {
                    color: 'white'
                }
            }
        },

        scales: {

            x: {
                ticks: {
                    color: 'white'
                }
            },

            y: {
                ticks: {
                    color: 'white'
                }
            }
        }
    }
});
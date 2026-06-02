// Dashboard Chart logic using Chart.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('fraudChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Fraudulent Transactions',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: '#ef4444',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Legitimate Transactions',
                    data: [120, 190, 300, 500, 200, 300],
                    borderColor: '#3b82f6',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#f8fafc'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: '#334155' }
                    },
                    y: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: '#334155' }
                    }
                }
            }
        });
    }
});

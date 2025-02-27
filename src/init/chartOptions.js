export const dashboardChart = {
    doughNut: {
        type: "doughnut",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
                text: "Containers",
                color: "#FFFFFF",
                font: {
                    size: 18,
                    weight: "bold",
                },
                padding: {
                    top: 10,
                    bottom: 10,
                },
            },
            legend: {
                position: "right",
                labels: {
                    color: "#FFFFFF",
                },
            },
            tooltip: {
                bodyColor: "#FFFFFF",
                titleColor: "#FFFFFF",
            },
        },
        elements: {
            arc: {
                borderWidth: 2,
                borderColor: "#FFFFFF",
            },
        },
    },

    barOptions: {
        type: "bar",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
                text: "Dashboard",
                color: "#FFFFFF",
                font: {
                    size: 18,
                    weight: "bold",
                },
                padding: {
                    top: 10,
                    bottom: 10,
                },
            },
            legend: {
                display: false,
                position: "top",
                labels: {
                    color: "#FFFFFF",
                },
            },
            tooltip: {
                position: "average",
                yAlign: "top",
                xAlign: "center",
                bodyColor: "#FFFFFF",
                titleColor: "#FFFFFF",
            },
        },
        elements: {
            arc: {
                borderWidth: 2,
                borderColor: "#FFFFFF",
            },
        },
        scales: {
            x: {
                grid: {
                    // color: "#525252",
                },
                border: {
                    color: "#525252",
                },
                ticks: {
                    color: "#FFFFFF",
                },
            },
            y: {
                grid: {
                    color: "#525252",
                },
                border: {
                    color: "#525252",
                },
                ticks: {
                    color: "#FFFFFF",
                },
            },
        },
    }
}
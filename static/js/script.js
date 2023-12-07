// Function to display a confirmation dialog
const displayConfirmation = () => {
    const confirmed = window.confirm("مبرووووك للحصول علي الجائزه يرجي الانضمام الينا !!");

    // If the user clicks "OK," proceed with the asynchronous request
    if (confirmed) {
        // Assuming an asynchronous action, you may want to make an AJAX request or perform other tasks here

        // Redirect to the home page after the animation is complete
        setTimeout(() => {
            window.location.href = '/home/';
        }, 5000);  // Adjust the delay (in milliseconds) based on your animation duration
    }
};


const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
const confirmationDialog = document.getElementById("confirmation-dialog");
const confirmBtn = document.getElementById("confirm-btn");

// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
    { minDegree: 0, maxDegree: 30, value: 5 },
    { minDegree: 31, maxDegree: 90, value: 2.5 },
    { minDegree: 91, maxDegree: 150, value: 100 },
    { minDegree: 151, maxDegree: 210, value: 15 },
    { minDegree: 211, maxDegree: 270, value: 13.5 },
    { minDegree: 271, maxDegree: 330, value: 9 },
    { minDegree: 331, maxDegree: 360, value: 5 },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16];

// Background color for each piece
var pieColors = ["#8b35bc", "#b163da", "#8b35bc", "#b163da", "#8b35bc", "#b163da"];

// Create chart
let myChart = new Chart(wheel, {
    // Plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    // Chart Type Pie
    type: "pie",
    data: {
        // Labels (values which are to be displayed on the chart)
        labels: [2.5, 5, 9, 13.5, 15, 100],
        // Settings for dataset/pie
        datasets: [
            {
                backgroundColor: pieColors,
                data: data,
            },
        ],
    },
    options: {
        // Responsive chart
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            // Hide tooltip and legend
            tooltip: false,
            legend: {
                display: false,
            },
            // Display labels inside pie chart
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) =>
                    context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
            },
        },
    },
});

// Display value based on the randomAngle
const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
        // If the angleValue is between min and max, then display it
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
            spinBtn.disabled = false;
            break;
        }
    }
};

// Spinner count
let count = 0;

// 100 rotations for animation and last rotation for result
let resultValue = 101;

// Start spinning
spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    // Empty final value
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    // Generate random degrees to stop at
    let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
    // Interval for rotation animation
    let rotationInterval = window.setInterval(() => {
        // Set rotation for pie chart
        /*
        Initially to make the pie chart rotate faster, we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually, on the last rotation, we rotate by 1 degree at a time.
        */
        myChart.options.rotation = myChart.options.rotation + resultValue;
        // Update chart with new value
        myChart.update();
        // If rotation > 360, reset it back to 0
        if (myChart.options.rotation >= 360) {
            count += 1;
            resultValue -= 5;
            myChart.options.rotation = 0;
        } else if (
            count > 15 &&
            myChart.options.rotation === randomDegree
        ) {
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count = 0;
            resultValue = 101;

            // Call the function to display the confirmation dialog
            displayConfirmation();
        }
    }, 10);
});

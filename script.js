// Your data
const subscriptions = [
  { id: 24, title: "Admin", amount: 16756875 },
  { id: 25, title: "Branding", amount: 15082251 },
  { id: 26, title: "HR", amount: 11898895 },
  { id: 27, title: "Legal", amount: 13677771 },
  { id: 28, title: "Marketing", amount: 13778876 },
  { id: 29, title: "Sales", amount: 18898975 },
];

// Create charts
let lineChart, barChart, pieChart, areaChart;

function renderCharts(selectedCategories) {
  const filteredData = subscriptions.filter((sub) =>
    selectedCategories.includes(sub.title)
  );
  const categories = filteredData.map((sub) => sub.title);
  const seriesData = filteredData.map((sub) => sub.amount);

  if (!lineChart) {
    lineChart = new ApexCharts(document.querySelector("#lineChart"), {
      chart: { type: "line", height: 150 },
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories, title: { text: "Departments" } },
      yaxis: { title: { text: "Amount (₹)" } },
    });

    barChart = new ApexCharts(document.querySelector("#barChart"), {
      chart: { type: "bar", height: 300 },
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories, title: { text: "Departments" } },
      yaxis: { title: { text: "Amount (₹)" } },
      plotOptions: {
        bar: {
          dataLabels: { position: "top" },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        formatter: function (val) {
          return `₹${val.toLocaleString()}`;
        },
        style: { fontSize: "12px", colors: ["grey"] },
      },
      colors: ["#666cff"],
    });

    pieChart = new ApexCharts(document.querySelector("#pieChart"), {
      chart: { type: "pie", height: 300 },
      series: seriesData,
      labels: categories,
    });

    areaChart = new ApexCharts(document.querySelector("#areaChart"), {
      chart: { type: "area", height: 200 },
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories, title: { text: "Departments" } },
      yaxis: { title: { text: "Amount (₹)" } },
    });

    lineChart.render();
    barChart.render();
    pieChart.render();
    areaChart.render();
    // Add event listener for the button
    document
      .getElementById("totalSpendButton")
      .addEventListener("click", function () {
        const totalSpendDisplay = document.getElementById("totalSpendDisplay");
        const totalSpend = seriesData.reduce((acc, curr) => acc + curr, 0);
        const formattedTotalSpend = `₹${totalSpend.toLocaleString()}`;

        // Toggle the display of total spend
        if (totalSpendDisplay.innerText === formattedTotalSpend) {
          totalSpendDisplay.innerText = ""; // Hide the total spend
        } else {
          totalSpendDisplay.innerText = formattedTotalSpend; // Show the total spend
        }
      });
  } else {
    lineChart.updateOptions({
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories },
    });

    barChart.updateOptions({
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories },
    });

    pieChart.updateOptions({
      series: seriesData,
      labels: categories,
    });

    areaChart.updateOptions({
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories },
    });
  }
}

// Event listener for dropdown toggle
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.parentElement.classList.toggle("open");
});

// Event listener for checkbox change
dropdownMenu.addEventListener("change", function () {
  const selectedOptions = Array.from(
    this.querySelectorAll("input:checked")
  ).map((input) => input.value);
  renderCharts(selectedOptions);
});

// Initial render with all departments selected
renderCharts(subscriptions.map((sub) => sub.title));

// Your data for cities
const cityData = [
  { id: 1, title: "Chennai", amount: 16756875 },
  { id: 2, title: "Delhi", amount: 13677771 },
  { id: 3, title: "Goa", amount: 15082251 },
  { id: 4, title: "Kochi", amount: 11898895 },
  { id: 5, title: "Mumbai", amount: 13778876 },
  { id: 6, title: "Pune", amount: 18898975 },
];

// Create city charts
let cityLineChart, cityBarChart, cityPieChart, cityAreaChart;

function renderCityCharts(selectedCities) {
  const filteredCityData = cityData.filter((city) =>
    selectedCities.includes(city.title)
  );
  const cityCategories = filteredCityData.map((city) => city.title);
  const citySeriesData = filteredCityData.map((city) => city.amount);

  if (!cityLineChart) {
    cityLineChart = new ApexCharts(document.querySelector("#cityLineChart"), {
      chart: { type: "line", height: 200 },
      series: [{ name: "Spend", data: citySeriesData }],
      xaxis: { categories: cityCategories, title: { text: "Cities" } },
      yaxis: { title: { text: "Amount (₹)" } },
    });

    cityBarChart = new ApexCharts(document.querySelector("#cityBarChart"), {
      chart: { type: "bar", height: 300 },
      series: [{ name: "Spend", data: citySeriesData }],
      xaxis: { categories: cityCategories, title: { text: "Cities" } },
      yaxis: { title: { text: "Amount (₹)" } },
      plotOptions: {
        bar: {
          dataLabels: { position: "top" },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        formatter: function (val) {
          return `₹${val.toLocaleString()}`;
        },
        style: { fontSize: "12px", colors: ["grey"] },
      },
      colors: ["#666cff"],
    });

    cityPieChart = new ApexCharts(document.querySelector("#cityPieChart"), {
      chart: { type: "pie", height: 300 },
      series: citySeriesData,
      labels: cityCategories,
    });

    cityAreaChart = new ApexCharts(document.querySelector("#cityAreaChart"), {
      chart: { type: "area", height: 200 },
      series: [{ name: "Spend", data: citySeriesData }],
      xaxis: { categories: cityCategories, title: { text: "Cities" } },
      yaxis: { title: { text: "Amount (₹)" } },
    });

    cityLineChart.render();
    cityBarChart.render();
    cityPieChart.render();
    cityAreaChart.render();
  } else {
    cityLineChart.updateOptions({
      series: [{ name: "Spend", data: citySeriesData }],
      xaxis: { categories: cityCategories },
    });

    cityBarChart.updateOptions({
      series: [{ name: "Spend", data: citySeriesData }],
      xaxis: { categories: cityCategories },
    });

    cityPieChart.updateOptions({
      series: citySeriesData,
      labels: cityCategories,
    });

    cityAreaChart.updateOptions({
      series: [{ name: "Spend", data: citySeriesData }],
      xaxis: { categories: cityCategories },
    });
  }
}

// Event listener for city dropdown toggle
const dropdownToggleCity = document.getElementById("dropdownToggleCity");
const dropdownMenuCity = document.getElementById("dropdownMenuCity");

dropdownToggleCity.addEventListener("click", function () {
  dropdownMenuCity.parentElement.classList.toggle("open");
});

// Event listener for city checkbox change
dropdownMenuCity.addEventListener("change", function () {
  const selectedCityOptions = Array.from(
    this.querySelectorAll("input:checked")
  ).map((input) => input.value);
  renderCityCharts(selectedCityOptions);
});

// Initial render with all cities selected
renderCityCharts(cityData.map((city) => city.title));

// Your combined data for cities and departments
const combinedData = [
  { id: 1, city: "Chennai", department: "Admin", amount: 16756875 },
  { id: 2, city: "Delhi", department: "Legal", amount: 13677771 },
  { id: 3, city: "Goa", department: "Branding", amount: 15082251 },
  { id: 4, city: "Kochi", department: "Sales", amount: 12666642 },
  { id: 5, city: "Mumbai", department: "HR", amount: 11898895 },
  { id: 6, city: "Pune", department: "Marketing", amount: 13778876 },
];

// Create combined charts
let combinedLineChart, combinedBarChart, combinedPieChart, combinedAreaChart;

// Function to render combined charts based on selected options
function renderCombinedCharts(selectedCities, selectedDepartments) {
  const filteredData = combinedData.filter(
    (item) =>
      selectedCities.includes(item.city) &&
      selectedDepartments.includes(item.department)
  );

  const categories = filteredData.map(
    (item) => `${item.city} - ${item.department}`
  );
  const seriesData = filteredData.map((item) => item.amount);

  if (!combinedLineChart) {
    combinedLineChart = new ApexCharts(
      document.querySelector("#combinedLineChart"),
      {
        chart: { type: "line", height: 200 },
        series: [{ name: "Spend", data: seriesData }],
        xaxis: { categories, title: { text: "City - Department" } },
        yaxis: { title: { text: "Amount (₹)" } },
      }
    );

    combinedBarChart = new ApexCharts(
      document.querySelector("#combinedBarChart"),
      {
        chart: { type: "bar", height: 300 },
        series: [{ name: "Spend", data: seriesData }],
        xaxis: { categories, title: { text: "City - Department" } },
        yaxis: { title: { text: "Amount (₹)" } },
        plotOptions: {
          bar: {
            dataLabels: { position: "top" },
          },
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          formatter: function (val) {
            return `₹${val.toLocaleString()}`;
          },
          style: { fontSize: "12px", colors: ["grey"] },
        },
        colors: ["#666cff"],
      }
    );

    combinedPieChart = new ApexCharts(
      document.querySelector("#combinedPieChart"),
      {
        chart: { type: "pie", height: 300 },
        series: seriesData,
        labels: categories,
      }
    );

    combinedAreaChart = new ApexCharts(
      document.querySelector("#combinedAreaChart"),
      {
        chart: { type: "area", height: 200 },
        series: [{ name: "Spend", data: seriesData }],
        xaxis: { categories, title: { text: "City - Department" } },
        yaxis: { title: { text: "Amount (₹)" } },
      }
    );

    combinedLineChart.render();
    combinedBarChart.render();
    combinedPieChart.render();
    combinedAreaChart.render();
  } else {
    combinedLineChart.updateOptions({
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories },
    });

    combinedBarChart.updateOptions({
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories },
    });

    combinedPieChart.updateOptions({
      series: seriesData,
      labels: categories,
    });

    combinedAreaChart.updateOptions({
      series: [{ name: "Spend", data: seriesData }],
      xaxis: { categories },
    });
  }
}

// Event listeners for combined dropdowns
const dropdownToggleCombined = document.getElementById(
  "dropdownToggleCombined"
);
const dropdownMenuCombined = document.getElementById("dropdownMenuCombined");
const dropdownToggleCityCombined = document.getElementById(
  "dropdownToggleCityCombined"
);
const dropdownMenuCityCombined = document.getElementById(
  "dropdownMenuCityCombined"
);

// Toggle department dropdown
dropdownToggleCombined.addEventListener("click", function () {
  dropdownMenuCombined.parentElement.classList.toggle("open");
});

// Toggle city dropdown
dropdownToggleCityCombined.addEventListener("click", function () {
  dropdownMenuCityCombined.parentElement.classList.toggle("open");
});

// Event listener for combined department checkbox change
dropdownMenuCombined.addEventListener("change", function () {
  const selectedDepartments = Array.from(
    this.querySelectorAll("input:checked")
  ).map((input) => input.value);
  const selectedCities = Array.from(
    dropdownMenuCityCombined.querySelectorAll("input:checked")
  ).map((input) => input.value);
  renderCombinedCharts(selectedCities, selectedDepartments);
});

// Event listener for combined city checkbox change
dropdownMenuCityCombined.addEventListener("change", function () {
  const selectedDepartments = Array.from(
    dropdownMenuCombined.querySelectorAll("input:checked")
  ).map((input) => input.value);
  const selectedCities = Array.from(this.querySelectorAll("input:checked")).map(
    (input) => input.value
  );
  renderCombinedCharts(selectedCities, selectedDepartments);
});

// Initial render with all options selected
const allCities = [...new Set(combinedData.map((item) => item.city))];
const allDepartments = [
  ...new Set(combinedData.map((item) => item.department)),
];
renderCombinedCharts(allCities, allDepartments);

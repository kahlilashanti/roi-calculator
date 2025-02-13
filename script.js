function toggleCalculator() {
    const type = document.getElementById("calculatorType").value;
    document.getElementById("roiCalculator").style.display = type === "roi" ? "block" : "none";
    document.getElementById("salesCalculator").style.display = type === "sales" ? "block" : "none";
}

function calculateROI() {
    const salary = parseFloat(document.getElementById("salary").value) || 0;
    const revenue = parseFloat(document.getElementById("revenue").value) || 0;
    const savings = parseFloat(document.getElementById("savings").value) || 0;
    const timeValue = parseFloat(document.getElementById("timeValue").value) || 0;

    const totalValue = revenue + savings + timeValue;
    const roi = salary > 0 ? ((totalValue - salary) / salary) * 100 : 0;

    document.getElementById("roiResult").innerText = `Total Value: $${totalValue.toFixed(2)} | ROI: ${roi.toFixed(2)}%`;
}

function calculateSalesImpact() {
    const dealValue = parseFloat(document.getElementById("dealValue").value) || 0;
    const numDeals = parseFloat(document.getElementById("numDeals").value) || 0;
    const salaryCost = parseFloat(document.getElementById("salaryCost").value) || 0;

    const totalRevenue = dealValue * numDeals;
    const netImpact = totalRevenue - salaryCost;

    document.getElementById("salesResult").innerText = `Total Revenue: $${totalRevenue.toFixed(2)} | Net Impact: $${netImpact.toFixed(2)}`;
}

// Ensure everything loads when the page is ready
document.addEventListener("DOMContentLoaded", () => {
    toggleCalculator();
});

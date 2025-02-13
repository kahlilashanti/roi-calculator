function calculateROI() {
    const salary = parseFloat(document.getElementById("salary").value) || 0;
    const revenue = parseFloat(document.getElementById("revenue").value) || 0;
    const savings = parseFloat(document.getElementById("savings").value) || 0;
    const timeValue = parseFloat(document.getElementById("timeValue").value) || 0;

    const totalValue = revenue + savings + timeValue;
    const roi = ((totalValue - salary) / salary) * 100;

    document.getElementById("roiResult").innerText = `Total Value: $${totalValue.toFixed(2)} | ROI: ${roi.toFixed(2)}%`;
}

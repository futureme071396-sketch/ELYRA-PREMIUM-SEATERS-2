function calculateSavings() {
    // Get input values
    const dieselCost = parseFloat(document.getElementById('currentDiesel').value) || 0;
    const monthlyKm = parseFloat(document.getElementById('monthlyKm').value) || 0;
    const vehicleCount = parseFloat(document.getElementById('vehicleCount').value) || 1;
    const ppaModel = document.getElementById('ppaModel').value;
    
    // Calculate costs based on PPA model (Premium pricing)
    let newMonthlyCost = 0;
    
    switch(ppaModel) {
        case 'exchange':
            // EV Exchange PPA: KES 120,000 per vehicle (premium)
            newMonthlyCost = 120000 * vehicleCount;
            break;
        case 'traditional':
            // Traditional PPA: KES 95,000 fixed + KES 14/km (premium)
            newMonthlyCost = (95000 * vehicleCount) + (14 * monthlyKm * vehicleCount);
            break;
        case 'lease':
            // Lease-to-Own: KES 175,000 per vehicle (premium)
            newMonthlyCost = 175000 * vehicleCount;
            break;
    }
    
    // Calculate savings
    const currentTotalCost = dieselCost * vehicleCount;
    const monthlySavings = currentTotalCost - newMonthlyCost;
    const savingsPercent = ((monthlySavings / currentTotalCost) * 100).toFixed(0);
    const annualSavings = monthlySavings * 12;
    
    // Update display
    document.getElementById('currentCost').textContent = formatCurrency(currentTotalCost);
    document.getElementById('newCost').textContent = formatCurrency(newMonthlyCost);
    document.getElementById('savings').textContent = formatCurrency(monthlySavings);
    document.getElementById('savingsPercent').textContent = savingsPercent + '%';
    document.getElementById('annualSavings').textContent = formatCurrency(annualSavings);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-KE').format(Math.round(amount));
}

// Initialize calculator on page load
document.addEventListener('DOMContentLoaded', function() {
    calculateSavings();
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        businessType: document.getElementById('businessType').value,
        vehicleCount: document.getElementById('vehicleCountForm').value,
        message: document.getElementById('message').value
    };
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Here you would typically send the data to your server
    // For now, we'll just show a success message
    alert('Thank you for your premium inquiry! We will contact you within 24 hours to discuss your luxury transport needs.');
    this.reset();
});

// Select form and elements
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Validate form fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('message').value.trim();

  if (name && email && phone && message) {
    // Display success message (you can replace this with an actual submission)
    alert(`ข้อมูลที่กรอก:\n\nชื่อ: ${name}\nอีเมล: ${email}\nเบอร์โทรศัพท์: ${phone}\nหัวข้อ: ${topic}\nข้อความ: ${message}`);
    
    // Clear form after successful submission (optional)
    form.reset();
  } else {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
  }
});

// Optional: Handle Reset button functionality with confirmation
resetBtn.addEventListener('click', (event) => {
  if (!confirm('คุณแน่ใจหรือไม่ว่าจะรีเซ็ตข้อมูลทั้งหมด?')) {
    event.preventDefault(); // Prevent reset if user cancels
  }
});

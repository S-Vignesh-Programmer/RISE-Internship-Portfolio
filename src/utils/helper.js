// Smooth scroll to section utility
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Get active section based on scroll position
export const getActiveSection = (sections = []) => {
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        return section;
      }
    }
  }
  return sections[0] || "home";
};

// Format phone number
export const formatPhoneNumber = (phone) => {
  return phone.replace(
    /(\+\d{1})(\s)(\(\d{3}\))(\s)(\d{3})-(\d{4})/,
    "$1$2$3$4$5-$6"
  );
};

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Download resume functionality
export const downloadResume = () => {
  // In a real application, this would download an actual PDF file
  alert("Resume download started! (Demo functionality)");
};

// Contact form submission
export const submitContactForm = (formData) => {
  // In a real application, this would submit to a backend API
  console.log("Form submitted:", formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
};

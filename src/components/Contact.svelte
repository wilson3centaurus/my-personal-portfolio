<!--
<script src="https://smtpjs.com/v3/smtp.js" lang="ts">

  // Define the types for the form elements
  interface FormElements {
    name: HTMLInputElement;
    email: HTMLInputElement;
    subject: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  const isEmailValid = (email: string): boolean => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleClick() {
    // Get the form elements
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Construct the mailto link
    const mailtoLink = `mailto:tafadzwawilsonsedze@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}%0A%0DSubject: ${subject}%0A%0DMessage: ${message}`)}`;

    // Open the mailto link in a new tab
    window.open(mailtoLink, "_blank");
  }

  const handlesClick = () => {
    // Use `as` keyword to assert the type of the elements
    const { name, email, subject, message }: FormElements = {
      name: document.getElementById("name") as HTMLInputElement,
      email: document.getElementById("email") as HTMLInputElement,
      subject: document.getElementById("subject") as HTMLInputElement,
      message: document.getElementById("message") as HTMLTextAreaElement,
    };

    // Check if email is invalid
    if (!isEmailValid(email.value.trim())) {
      showErrorBanner();
      return;
    }

    // Check if all fields have values
    if (name.value.trim() && subject.value.trim() && message.value.trim()) {
      // Show success banner
      
      showSuccessBanner();
      clearFormFields();
      // Automatically close success banner after 3 seconds
      setTimeout(() => {
        closeSuccessBanner();
      }, 3000);
    } else {
      showErrorBanner();
      // Automatically close success banner after 3 seconds
      setTimeout(() => {
        closeErrorBanner();
      }, 3000);
    }
  };

  // Function to show the success banner
  function showSuccessBanner() {
    const banner = document.getElementById("successBanner");
    banner.style.display = "block";
  }

  // Function to show the error banner
  function showErrorBanner() {
    const banner = document.getElementById("closeBanner");
    banner.style.display = "block"; 
    setTimeout(() => {
      closeErrorBanner();
    }, 3000);
  }

  // Function to close the banner
  function closeErrorBanner() {
    const banner = document.getElementById("closeBanner");
    banner.style.display = "none";
  }

  // Function to close the success banner
  function closeSuccessBanner() {
    const banner = document.getElementById("successBanner");
    banner.style.display = "none"; 
  }
  // Function to clear form fields
  function clearFormFields() {
    const { name, email, subject, message }: FormElements = {
      name: document.getElementById("name") as HTMLInputElement,
      email: document.getElementById("email") as HTMLInputElement,
      subject: document.getElementById("subject") as HTMLInputElement,
      message: document.getElementById("message") as HTMLTextAreaElement,
    };

    // Clear form fields
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
</script>
-->


<div class="text-center py-8 container">
  <div
    class=" mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
    style="opacity: 1"
  >
    <div class="w-full lg:w-1/2">
      <div class="leading-loose">
        <form
          class="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left contact-form"
        >
          <p
            class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
          >
            Contact Form
          </p>
          <div class="font-general-regular mb-4">
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-1"
              for="name">Full Name</label
            >
            <input
              class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>
          <div class="font-general-regular mb-4">
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-1"
              for="email">Email</label
            >
            <input
              class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              aria-label="Email"
            />
          </div>
          <div class="font-general-regular mb-4">
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-1"
              for="subject">Subject</label
            ><input
              class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
            />
          </div>
          <div class="mt-6">
            <label
              class="block text-lg text-primary-dark dark:text-primary-light mb-2"
              for="message">Message</label
            ><textarea
              class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>
          <div
            class="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500 flex"
          >
            <a href="mailto:tafadzwawilsonsedze@gmail.com" target="_blank">
              Send Message
            </a>

          </div>
        </form>
      </div>
    </div>
    <div class="w-full lg:w-1/2 contact-details">
      <div class="text-left max-w-xl px-6">
        <h2
          class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"
        >
          Contact details
        </h2>
        <ul class="font-general-regular">
          <li class="flex">
            <a
              href="mailto:tafadzwawilsonsedze@gmail.com"
              target="_blank"
              class="contact-icon bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon"
              ><span class="bi bi-envelope-fill"></span></a
            >
            <span class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
              >tafadzwawilsonsedze@gmail.com</span
            >
          </li>
          <li class="flex">
            <a
              href="tel:+263772668496"
              target="_blank"
              class="contact-icon bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon"
              ><span class="bi bi-telephone-fill"></span></a
            >
            <span class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
              >+263772668496 | +263787209882</span
            >
          </li>
          <li class="flex">
            <a
              href="https://github.com/wilson3centaurus"
              target="_blank"
              class="contact-icon bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon"
              ><span class="bi bi-github"></span></a
            >
            <span class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
              >https://github.com/wilson3centaurus</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


<!-- HTML for the success message banner 
<div id="successBanner" class="success-banner hidden">
  <p class="success-message">Success: Your message has been sent!</p>
  <button class="close-button" on:click={closeSuccessBanner}>Close</button>
</div>

<div id="closeBanner" class="error-banner hidden">
  <p class="error-message">Error: Please fill in all fields correctly</p>
  <button class="close-button" on:click={closeErrorBanner}>Close</button>
</div>
-->
<style>
  .container {
    background-color: lightblue;
    max-width: 100%;
  }
  .contact-form {
    background-color: #83c1ff;
    margin-top: -60px;
  }
  .contact-details {
    margin-top: -90px;
  }
  li {
    align-items: center;
  }
  .contact-icon {
    background-color: transparent;
  }
  .contact-icon:hover {
    color: rgba(255, 255, 255, 0.562) fff;
  }
  span {
    padding-top: 15px;
  }

  .success-message,
  .error-message {
    margin: 0;
  }

  .error-banner,
  .success-banner {
    background-color: #f44336;
    color: white;
    font-size: 19px;
    padding: 10px 20px;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    z-index: 999;
    text-align: center;
    border-radius: 10px;
    display: none;
  }
  .success-banner {
    background-color: #4caf50;
  }
  .close-button {
    color: white;
    border: none;
    font-size: 15px;
    cursor: pointer;
    float: right;
    background-color: black;
    border-radius: 5px;
    padding: 2px;
  }
</style>

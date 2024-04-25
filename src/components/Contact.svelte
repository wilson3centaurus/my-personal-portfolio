<style>
  .container {
    background-color: lightblue;
    max-width: 100%;
    }
    .contact-form {
      background-color: rgb(131, 193, 255);
      margin-top: -60px;
    }
    .contact-details {
      margin-top: -90px;
    }
</style>
<div class="text-center py-8 container">
    <div
      class=" mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
      style="opacity: 1"
    >
      <div class="w-full lg:w-1/2 ">
        <div class="leading-loose ">
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
                for="name"
                >Full Name</label
              >
              <input
                class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                aria-label="Name"
                required=""
              />
            </div>
            <div class="font-general-regular mb-4">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-1"
                for="email"
                >Email</label
              >
              <input
                class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                aria-label="Email"
                required=""
              />
            </div>
            <div class="font-general-regular mb-4">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-1"
                for="subject"
                >Subject</label
              ><input
                class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                required=""
              />
            </div>
            <div class="mt-6">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                for="message"
                >Message</label
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
              class="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
            >
              <button>Send Message</button>
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
              <i class="text-2xl text-gray-500 dark:text-gray-400 mr-4"
                ><svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline></svg></i
              ><span
                class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                >tafadzwawilsonsedze@gmail.com</span
              >
            </li>
            <li class="flex">
              <i class="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path></svg
              ></i>
              <span class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
                >+263772668496  | +263787209882 </span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
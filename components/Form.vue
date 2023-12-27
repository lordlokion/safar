<template>
    <div class="w-full lg:w-1/2">
                <div
                  class="flex flex-col justify-center max-w-md mx-auto h-full py-12"
                >
                  <form action="">
                    <h1 class="text-3xl font-bold font-heading mb-4">Login</h1>
                    <a
                      class="inline-block text-gray-500 hover: transition duration-200 mb-8"
                      href="#"
                    >
                      <span>New to Solstice?</span>
                      <span></span>
                      <span class="font-bold font-heading"
                        >Create new account</span
                      >
                    </a>
                    <label
                      class="block text-sm font-medium mb-2"
                      for="textInput1"
                      >Name</label
                    >
                    <input
                      class="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200 mb-4"
                      id="textInput1"
                      type="text"
                      placeholder="Your Name"
                    />
                    <label
                      class="block text-sm font-medium mb-2"
                      for="textInput1"
                      >Email</label
                    >
                    <input
                      class="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200 mb-4"
                      id="textInput1"
                      type="text"
                      placeholder="john@email.com"
                    />
                    <label
                      class="block text-sm font-medium mb-2"
                      for="textInput1"
                      >Contact No.</label
                    >
                    <input
                      class="w-full rounded-full p-4 outline-none border border-gray-100 shadow placeholder-gray-500 focus:ring focus:ring-orange-200 transition duration-200 mb-4"
                      id="textInput1"
                      type="text"
                      placeholder="+91 55555-55555"
                    />
                  
                    <button
                      class="h-14 inline-flex items-center bg-indigo-500 justify-center py-4 px-8 text-white font-bold font-heading rounded-full bg-indigo-500 w-full text-center border border-indigo-600 shadow hover:bg-indigo-600 focus:ring focus:ring-indigo-200 transition duration-200 mb-8"
                      type="submit"
                    >
                      Submit
                    </button>
                  
                  </form>
              </div>
            </div>
</template>
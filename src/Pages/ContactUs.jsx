import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Input } from '../Components';
import ConfEmail from '../Conf/ConfEmail';

function ContactUs() {
  const form = useRef();


  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(ConfEmail.serviceId, ConfEmail.templateId, form.current, ConfEmail.publicKey)
      .then((result) => {
        setTimeout(() => {
          alert(
            `Thank you! for reaching out to Blog-Zone`
          )
        }, 1);

      }, (error) => {
        alert(error.text);
      });
  };


  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">


        <div className="mx-auto max-w-7xl py-12 md:py-12">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <Input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        name='first_name'
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <Input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        name='last_name'
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="email"
                      id="email"
                      name="from_email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <Input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      required
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700  dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      name="message"
                      placeholder="Leave us a message"
                      cols={3}
                      required
                    />
                  </div>


                  <Button
                    type="submit" value="Send"

                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            <div>
              <div className="max-h-full w-full rounded-lg object-cover lg:block">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7205.717325938257!2d73.664188391229!3d20.207227843481935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdde4bb0e405e5f%3A0xc0d6a4a1a35371c5!2sDhaur%2C%20Maharashtra%20422003!5e1!3m2!1sen!2sin!4v1698561677550!5m2!1sen!2sin"
                  width="800"
                  height="550"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  
                ></iframe>
               
                

              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  )
}

export default ContactUs

import { useForm } from 'react-hook-form'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Box, Container } from '@mui/material'
import ContactBanner from './ContactBanner'
import Footer from '../../Shared/Footer/Footer'
import authCheck from '../../../HOC/withAuthCheck'

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  let time = new Date()
  const date = new Date().toLocaleDateString()
  const currentTime = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  const submitHandler = (data) => {
    let newData = { ...data, sentTime: currentTime, sentDate: date }
    fetch('https://polar-hamlet-38117.herokuapp.com/emails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert('Your message has been sent.')
        }
      })
  }

  return (
    <>
      <ContactBanner />
      <div className="bg-slate-100  py-16 dark:bg-Docy-AlmostBlack">
        <Container className="bg-white p-8 shadow  dark:bg-Docy-Dark dark:text-white">
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 p-3 lg:col-span-6">
              <h2>Let’s get in touch</h2>
              <p className="my-6">
                I have world-class, flexible support via live chat, email &
                phone. I guar antee that you’ll be able to have any issue
                resolved within 24/7
              </p>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="grid grid-cols-12 gap-4">
                  <label className="col-span-12 mt-2 lg:col-span-6">
                    <span className="mb-3 block">First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      {...register('firstName', {
                        required: {
                          value: true,
                          message: 'You must enter first name',
                        },
                      })}
                      className={`${
                        errors.firstName ? 'ring-2 ring-red-700' : null
                      } "block " w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-500 focus:outline-none `}
                      placeholder="Enter Your first name"
                    />
                    <span className="py-2 text-sm text-red-700">
                      {errors?.firstName?.message}
                    </span>
                  </label>
                  <label className="col-span-12 mt-2 lg:col-span-6">
                    <span className="mb-3 block">Last Name</span>
                    <input
                      type="text"
                      name="lastName"
                      {...register('lastName', {
                        required: {
                          value: true,
                          message: 'You must enter last name',
                        },
                      })}
                      className={`${
                        errors.lastName ? 'ring-2 ring-red-700' : null
                      } "block " w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-500 focus:outline-none  `}
                      placeholder="Enter Your last name"
                    />
                    <span className="py-2 text-sm text-red-700">
                      {errors?.lastName?.message}
                    </span>
                  </label>
                  <label className="col-span-12 mt-2 lg:col-span-6">
                    <span className="mb-3 block">Email</span>
                    <input
                      type="email"
                      name="Email"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'You must enter email address',
                        },
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: 'invalid email address',
                        },
                      })}
                      className={`${
                        errors.email ? 'ring-2 ring-red-700' : null
                      } "block " w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-500 `}
                      placeholder="Enter Your Email"
                    />
                    <span className="py-2 text-sm text-red-700">
                      {errors?.email?.message}
                    </span>
                  </label>
                  <label className="col-span-12 mt-2 lg:col-span-6">
                    <span className="mb-3 block ">Subject</span>
                    <input
                      type="text"
                      name="subject"
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'You must write a subject',
                        },
                      })}
                      className={`${
                        errors.subject ? 'ring-2 ring-red-700' : null
                      } "block " w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-500 focus:outline-none `}
                      placeholder="Add a subject"
                    />
                    <span className="py-2 text-sm text-red-700">
                      {errors?.subject?.message}
                    </span>
                  </label>
                </div>
                <label className="col-span-12 lg:col-span-6">
                  <span className="mt-4 mb-3 block ">Your Message</span>
                  <textarea
                    type="text"
                    name="message"
                    {...register('message', {
                      required: {
                        value: true,
                        message: 'You must write something',
                      },
                    })}
                    className={`${
                      errors.message ? 'ring-2 ring-red-700' : null
                    } "block " w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-500 focus:outline-none `}
                    placeholder="Add a subject"
                  />
                  <span className="py-2 text-sm text-red-700">
                    {errors?.message?.message}
                  </span>
                </label>
                <span className="">
                  <input
                    type="submit"
                    className="c-btn btn-brand mt-5 rounded px-6 py-3 font-bold  text-gray-900 hover:bg-white hover:text-black"
                    value="Send Message"
                  />
                </span>
              </form>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="iconHover mb-6  rounded-sm p-5 hover:shadow-lg">
                <PhoneOutlinedIcon className="contactIcon" />
                <h3>Phone</h3>
                <p className="pb-3">
                  Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm
                </p>
                <a href="tel:0000">
                  <span className="text-lg font-bold">+880 122 4333 444</span>
                </a>
              </div>
              <div className="iconHover mb-6 p-5  hover:shadow-lg">
                <MailOutlineIcon className="contactIcon" />
                <h3>Email</h3>
                <p className="pb-3">
                  Our support team will be reply in 48-h during your Question.
                </p>
                <a href="mailto:abcd@gmail.com">
                  <span className="text-lg font-bold">
                    programmingfolks@gmail.com
                  </span>
                </a>
              </div>
              <div className="iconHover  mb-4 p-5  hover:shadow-lg">
                <LocationOnOutlinedIcon className="contactIcon" />
                <h3 className="pb-3">Location</h3>
                <span className="text-lg font-bold">
                  168/170, Ave 01, Dhanmondi, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default authCheck(Contact)

import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-6 rounded shadow-md md:min-w-[600px] lg:min-w-[900px]'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Contact Us</h1>
        <form
          name='contact'
          method='POST'
          netlify
          className='max-w-md mx-auto p-6 bg-white rounded shadow-lg'
        >
          <input type='hidden' name='form-name' value='contact' />
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full border rounded py-2 px-3'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full border rounded py-2 px-3'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full border rounded py-2 px-3'
              rows='4'
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

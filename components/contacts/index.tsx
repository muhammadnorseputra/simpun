import { HomeIcon, InboxIcon, PhoneIcon } from '@heroicons/react/outline'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast';

interface MyFormValues  {
  fullName: string,
  email: string,
  message: string
}

const initialValues: MyFormValues = {
  fullName: '',
  email: '',
  message: ''
}

const validationSchema = Yup.object({
  fullName: Yup.string().min(3).required('Field is required'),
  email: Yup.string().email('Invalid email format').required('Field is required'),
  message: Yup.string().required('Field is required')
})

function Contacts() {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      fetch('https://sheet.best/api/sheets/36853fc8-b6cd-4484-b1fb-c47626b5ff4e', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
        resetForm()
        toast.success('Successfully, your message save!', {
          position: 'bottom-center',
          duration: 3000,
        });
      });
    }
  })

  return (
    <section className="overflow-hidden">
    <div className="relative px-6 py-8 overflow-hidden bg-green-50 z-10">
      <h2 className="inline text-2xl font-bold text-slate-800 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-400 before:animate-pulse">
        #Contact Me
      </h2>
      <div className="text-sm text-gray-600 mt-4 pb-4">
          <div className="flex items-center justify-start gap-5">
            <HomeIcon className='w-6 h-6 text-black' />
            <div>
              <p className="font-bold text-black">Address</p>
              Desa. Banua Hanyar, RT. 02 No. 74 Kec. Batumandi Kab. Balangan.
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <InboxIcon className='w-6 h-6 text-black' />
            <div>
              <p className="font-bold text-black mt-2">Email</p>
              muhammadnorseputra@gmail.com
              <a href='mailto:muhammadnorseputra@gmail.com?subject=Send by%20portofolio&body=Halo%20Putra' target='_blank' className='py-0.5 px-2 ml-2 bg-green-400 text-black rounded-full text-sm hover:bg-green-500 hover:text-white'>Send</a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <PhoneIcon className='w-6 h-6 text-black' />
            <div>
              <p className="font-bold text-black mt-2">WhatsApp</p>
              +62 82151815132
              <a href="https://wa.me/6282151815132?text=Halo%20Putra" target='_blank' className='py-0.5 px-2 ml-2 bg-green-400 text-black rounded-full text-sm hover:bg-green-500 hover:text-white'>Chat</a>
            </div>
          </div>
      </div>
      <div className="text-sm font-bold bg-green-600 text-green-100 p-3 rounded-t-xl">Fill this form for contact me</div>
      <form onSubmit={formik.handleSubmit} noValidate className="p-4 border border-green-600 rounded-b-xl">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="fullName"
            id="floating_first_name"
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${!formik.errors.fullName && formik.touched.fullName ? `border-green-700 dark:border-green-300` : 'border-gray-600'} appearance-none dark:text-whit dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            placeholder=" "
            required
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Full Name <span className="text-red-400">*</span>
          </label>
          {formik.errors.fullName && formik.touched.fullName ? (<span className='text-red-400 text-sm'>{formik.errors.fullName}</span>) : null}
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            autoComplete='off'
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${!formik.errors.email && formik.touched.email ? `border-green-700 dark:border-green-300` : 'border-gray-600'} appearance-none dark:text-whit dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email address <span className="text-red-400">*</span>
          </label>
          {formik.errors.email && formik.touched.email ? (<span className='text-red-400 text-sm'>{formik.errors.email}</span>) : null}
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <textarea 
            id="message" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            name="message" 
            rows={4} 
            className={`resize-none block p-2.5 w-full text-md text-white bg-gray-50 border ${!formik.errors.message && formik.touched.message ? `border-green-700 dark:border-green-300` : 'border-white'} focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`} placeholder="Type Your message here..." value={formik.values.message} />
            {formik.errors.message && formik.touched.message ? (<span className='text-red-400 text-sm'>{formik.errors.message}</span>) : null}
        </div>
        <button type="submit" disabled={!formik.isValid || !formik.dirty || formik.isSubmitting} data-aos="fade-up" data-aos-delay="250" role="submit" className="inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-400 text-green-800 font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded disabled:bg-green-300 disabled:border-green-100 disabled:text-green/30 disabled:cursor-not-allowed">
            { formik.isSubmitting ? <LoadingSpinner/> : 'Send' } 
        </button>
      </form>
    </div>
    <Toaster />
    </section>
  );
}

function LoadingSpinner() {
  return (
  <>
    <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
      <path className="fill-green-800" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
      <path className="fill-green-100" d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z" />
    </svg>
    <span>Loading...</span>
  </>
  )
}

export default Contacts;

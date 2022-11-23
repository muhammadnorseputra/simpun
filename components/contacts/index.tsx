import { HomeIcon, InboxIcon, PhoneIcon } from '@heroicons/react/outline'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <section className="overflow-hidden">
    <div className="relative px-6 py-8 overflow-hidden bg-slate-700 z-10" data-aos="fade-down">
      <h2 className="inline text-2xl font-bold text-slate-400 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-400 before:animate-pulse">
        Contact Me
      </h2>
      <div className="text-sm text-gray-400 mt-4 border-b border-slate-600 pb-4">
          <div className="flex items-center justify-start gap-5">
            <HomeIcon className='w-6 h-6 text-white' />
            <div>
              <p className="font-bold text-white">Address</p>
              Desa. Banua Hanyar, RT. 02 No. 74 Kec. Batumandi Kab. Balangan.
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <InboxIcon className='w-6 h-6 text-white' />
            <div>
              <p className="font-bold text-white mt-2">Email</p>
              muhammadnorseputra@gmail.com
              <a href='mailto:muhammadnorseputra@gmail.com?subject=Send by%20portofolio&body=Halo%20Putra' target='_blank' className='py-0.5 px-2 ml-2 bg-green-400 text-black rounded-full text-sm hover:bg-green-500 hover:text-white'>Send Message</a>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <PhoneIcon className='w-6 h-6 text-white' />
            <div>
              <p className="font-bold text-white mt-2">WhatsApp</p>
              +62 82151815132
              <a href="https://wa.me/6282151815132?text=Halo%20Putra" target='_blank' className='py-0.5 px-2 ml-2 bg-green-400 text-black rounded-full text-sm hover:bg-green-500 hover:text-white'>Chat</a>
            </div>
          </div>
      </div>
      <div className="text-sm font-bold text-white mt-2">Fill this form for contact me</div>
      <form onSubmit={formik.handleSubmit} noValidate className="mt-2">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="fullName"
            id="floating_first_name"
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${!formik.errors.fullName && formik.touched.fullName ? `border-green-700 dark:border-green-300` : 'border-gray-600'} appearance-none dark:text-whit dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            required
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 ${!formik.errors.email && formik.touched.email ? `border-green-700 dark:border-green-300` : 'border-gray-600'} appearance-none dark:text-whit dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            className={`resize-none block p-2.5 w-full text-md text-white bg-gray-700 border ${!formik.errors.message && formik.touched.message ? `border-green-700 dark:border-green-300` : 'border-gray-600'} focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Type Your message here..." defaultValue={formik.values.message} />
            {formik.errors.message && formik.touched.message ? (<span className='text-red-400 text-sm'>{formik.errors.message}</span>) : null}
        </div>
        <button type="submit" disabled={!formik.isValid || !formik.dirty} data-aos="fade-up" data-aos-delay="250" role="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:bg-blue-300 disabled:border-blue-300 disabled:text-white/50 disabled:cursor-not-allowed">
            Send
        </button>
      </form>
    </div>
    </section>
  );
}

export default Contacts;

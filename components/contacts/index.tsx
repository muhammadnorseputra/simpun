function Contacts() {
  return (
    <section className="overflow-hidden">
    <div className="relative px-6 py-8 overflow-hidden bg-slate-700 z-10" data-aos="fade-down">
        <h2 className="inline text-2xl font-bold text-slate-400 relative before:absolute before:w-1 before:h-full before:top-0 before:-left-6 before:rounded-r-3xl before:bg-slate-400 before:animate-pulse">
          Contact Me
        </h2>
        <p className="text-sm text-gray-400 mt-4 border-b border-slate-600 pb-4">
            <p className="font-bold text-white">Address</p>
            Desa. Banua Hanyar, RT. 02 No. 74 Kec. Batumandi Kab. Balangan.
            <p className="font-bold text-white mt-2">Email</p>
            muhammadnorseputra@gmail.com
        </p>
      <p className="text-sm font-bold text-white mt-2">Fill this form for contact me</p>
      <form action="#" className="mt-2">
      <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Full Name <span className="text-red-400">*</span>
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email address <span className="text-red-400">*</span>
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <textarea id="message" rows={4} className="resize-none block p-2.5 w-full text-md text-white bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Your message here..." defaultValue={""} />
        </div>
        <button type="submit" data-aos="fade-up" data-aos-delay="250" role="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Send
        </button>
      </form>
    </div>
    </section>
  );
}

export default Contacts;

import Button from "@components/ui/button";
import Icon from "@components/ui/icon";

export default function Home() {
  return (
    <>
      <section className='relative h-dvh overflow-hidden bg-viking-dark'>
        <svg className="absolute inset-x-0 z-20 -bottom-1 w-full h-auto" width="1916" height="157" viewBox="0 0 1915 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1914 1.00006C928 284.5 1 1.00006 1 1.00006V156.5L1914 145V1.00006Z" fill="white" stroke="white" />
        </svg>
        <div className="absolute inset-0 h-full">
          <img className="w-full h-full object-none object-bottom" src="/public/header.png" alt="" />
        </div>
        <div className='relative z-10 pt-[72px] h-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 lg:px-10 py-2 space-x-10'>
          <div className="h-full flex flex-wrap xl:gap-6 space-y-6">
            <div className="flex w-full py-10 space-y-6 lg:flex-1 flex-col justify-center 2xl:space-y-12">
              <h1 className='font-bold text-2xl leading-snug text-white xl:text-4xl xl:leading-snug 2xl:text-6xl 2xl:leading-snug'><span className='text-[#F48C06]'>Studying</span> Online is now much easier</h1>
              <p className="text-white text-md lg:w-[70%] xl:w-[65%] xl:text-lg">TOTC is an interesting platform that will teach you in more an interactive way</p>
              <div className="inline-flex flex-wrap gap-6 items-center h-16">
                <Button type='link' to='/'>Join for free</Button>
                <Icon type="player" className="h-12" />
                <p>Watch how it works</p>
              </div>
            </div>
            <div className="lg:flex-1 flex flex-col justify-end">
              <img src="/public/banner-img.png" className="-mb-6 lg:self-end lg:h-5/6 aspect-square" alt="banner image" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 lg:px-10 space-y-32 p-6 lg:p-14 [&_h2]:text-4xl [&_h2]:font-bold">
        <div className="text-center space-y-6 [&_p]:text-lg [&_p]:text-gray-500 ">
          <h2>Our Success</h2>
          <p className="text-md">Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec<br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
          <div className="flex gap-20 flex-wrap justify-center pt-10">
            <div className="flex flex-col items-center">
              <span className="text-7xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">15K+</span>
              <span className="text-black/80 font-semibold text-lg">Students</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">75%</span>
              <span className="text-black/80 font-semibold text-lg">Total success</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">35</span>
              <span className="text-black/80 font-semibold text-lg">Main questions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">26</span>
              <span className="text-black/80 font-semibold text-lg">Chief experts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">16</span>
              <span className="text-black/80 font-semibold text-lg">Years of experience</span>
            </div>
          </div>
        </div>
        <div className="text-center space-y-6 [&_p]:text-lg [&_p]:text-gray-500 ">
          <h2 className="text-blue-960">All-In-One <span className="text-teal-500" >Cloud Software.</span ></h2>
          <p>TOTC is one powerful online software suite that combines all the tools<br /> needed to run a successful school or office.</p>
          <div className="pt-16 flex justify-center flex-wrap gap-10 2xl:gap-14 [&_h3]:text-blue-960 [&_h3]:text-2xl [&_p]:text-lg">
            <div className="relative flex flex-col justify-between mt-8 rounded-3xl shadow-[rgba(38,45,118,0.08)_0px_10px_60px] shadow-gray-200/60 w-[22rem] px-6 py-14 space-y-7">
              <Icon type="paper" className="w-20 absolute -top-12 bottom-0 left-0 right-0 mx-auto" />
              <h3 className="font-semibold">Online Billing, <br />Invoicing, & Contracts</h3>
              <p>Simple and secure control of your organization&rsquo;s financial and legal transactions. Send customized invoices and contracts</p>
            </div>
            <div className="relative flex flex-col justify-between mt-8 rounded-3xl shadow-[rgba(38,45,118,0.08)_0px_10px_60px] shadow-gray-200/60 w-[22rem] px-6 py-14 space-y-7">
              <Icon type="calender" className="w-20 absolute -top-12 bottom-0 left-0 right-0 mx-auto" />
              <h3 className="font-semibold">Easy Scheduling & <br />Attendance Tracking</h3>
              <p>Simple and secure control of your organization&rsquo;s financial and legal transactions. Send customized invoices and contracts</p>
            </div>
            <div className="relative flex flex-col justify-between mt-8 rounded-3xl shadow-[rgba(38,45,118,0.08)_0px_10px_60px] shadow-gray-200/60 w-[22rem] px-6 py-14 space-y-7">
              <Icon type="people" className="w-20 absolute -top-12 bottom-0 left-0 right-0 mx-auto" />
              <h3 className="font-semibold">Customer Tracking</h3>
              <p>Simple and secure control of your organization&rsquo;s financial and legal transactions. Send customized invoices and contracts</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6 [&_p]:text-lg [&_p]:text-gray-500 ">
          <h2 className="text-blue-960">What is <span className="text-teal-500">TOTC?</span></h2>
          <p className="w-3/5 mx-auto text-center">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
          <div className="flex justify-center gap-16 pt-10 font-semibold text-white">
            <div className="relative w-1/3 overflow-hidden">
              <img src="/public/instructors.png" alt="" />
              <div className="absolute flex flex-col justify-center items-center gap-4 top-0 bottom-0 left-0 right-0 h-full bg-black/30 rounded-lg">
                <h3 className="text-xl">FOR INSTRUCTORS</h3>
                <button className="border active:bg-black/20 hover:bg-black/10 py-3 px-6 rounded-full">Start a class today</button>
              </div>
            </div>
            <div className="relative w-1/3 overflow-hidden">
              <img src="/public/students.png" alt="" />
              <div className="absolute flex flex-col justify-center items-center gap-4 top-0 bottom-0 left-0 right-0 h-full bg-black/30 rounded-lg">
                <h3 className="text-xl">FOR STUDENTS</h3>
                <button className="bg-sky-500/80 border border-sky-500/80 active:bg-sky-500/90 hover:shadow-inner shadow-black/40 py-3 px-6 rounded-full">Enter access code</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:px-20">
          <div className="w-full relative space-y-6 lg:flex-1">
            <p className="text-blue-960 font-semibold text-xl 2xl:text-4xl 2xl:leading-snug">
              <div className="absolute -top-2 -left-5 -z-50 w-16 h-16 rounded-full bg-turquoise-500"></div>
              Everything you can do in a physical classroom, <span className="text-teal-500">you can do with TOTC</span>
            </p>
            <p className="text-lg text-gray-500 pr-4 2xl:text-2xl">
              TOTC&rsquo;s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </p>
          </div>
          <div className="relative lg:flex-1 p-3">
            <img className="w-auto object-cover" src="/public/classroom.png" alt="" />
            <div className="absolute top-0 left-0 w-20 -z-50 h-20 rounded-2xl bg-sky-400"></div>
            <div className="absolute bottom-0 right-0 -z-50 w-36 h-36 rounded-2xl bg-turquoise-500"></div>
            <div></div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 lg:px-10 space-y-32 p-6 lg:p-14 [&_h2]:text-4xl [&_h2]:font-bold">
        <div className="text-center space-y-6">
          <h2 className="text-blue-960">Our <span className="text-teal-500">Features</span></h2>
          <p className="text-gray-500 text-lg">This very extraordinary feature, can make learning activities more efficient</p>
        </div>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className="relative lg:w-1/2">
            <img src="/public/feature1.png" alt="feature image 1" className="object-cover drop-shadow-sm backdrop-filter" />
            <div className="absolute -top-12 left-32 lg:left-36 -z-50 w-5 h-5 rounded-2xl bg-sky-400"></div>
            <div className="absolute -top-12 left-6 lg:-top-14 lg:left-10 shadow-inner -z-50 h-20 w-20 lg:h-24 lg:w-24 rounded-full bg-turquoise-500"></div>
            <div className="absolute -bottom-2 right-10 lg:right-16 shadow-inner -z-50 h-28 w-28 lg:h-40 lg:w-40 2xl:w-52 2xl:h-52 rounded-full bg-blue-500"></div>
            <div className="absolute bottom-0 right-44 lg:bottom-5 lg:right-60 2xl:right-72 -z-50 w-5 h-5 rounded-2xl bg-red-400"></div>
          </div>
          <div className="sm:flex-1 lg:w-2/6">
            <p className="text-blue-960 pb-8 font-semibold text-3xl leading-normal 2xl:text-4xl 2xl:leading-snug">
              A <span className="text-teal-500">user interface</span> designed for the classroom
            </p>
            <ul className="*:text-gray-500 [&_span]:text-lg space-y-6">
              <li className="flex items-center justify-center gap-8">
                <svg className="w-20 drop-shadow-md" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z" fill="#FBFBFB" />
                  <path d="M17 19C17 17.8954 17.8954 17 19 17H26.8182C27.9227 17 28.8182 17.8954 28.8182 19V26.8182C28.8182 27.9227 27.9228 28.8182 26.8182 28.8182H19C17.8954 28.8182 17 27.9228 17 26.8182V19Z" fill="#2F327D" />
                  <path d="M17 33.1818C17 32.0772 17.8954 31.1818 19 31.1818H26.8182C27.9227 31.1818 28.8182 32.0772 28.8182 33.1818V41C28.8182 42.1046 27.9228 43 26.8182 43H19C17.8954 43 17 42.1046 17 41V33.1818Z" fill="#2F327D" />
                  <path d="M31.7727 19C31.7727 17.8954 32.6682 17 33.7727 17H41.5909C42.6955 17 43.5909 17.8954 43.5909 19V26.8182C43.5909 27.9227 42.6955 28.8182 41.5909 28.8182H33.7727C32.6682 28.8182 31.7727 27.9228 31.7727 26.8182V19Z" fill="#2F327D" />
                  <path d="M31.7727 33.1818C31.7727 32.0772 32.6682 31.1818 33.7727 31.1818H41.5909C42.6955 31.1818 43.5909 32.0772 43.5909 33.1818V41C43.5909 42.1046 42.6955 43 41.5909 43H33.7727C32.6682 43 31.7727 42.1046 31.7727 41V33.1818Z" fill="#F48C06" />
                </svg>
                <span>Teachers don&rsquo;t get lost in the grid view and have a dedicated Podium space.</span>
              </li>
              <li className="flex items-center justify-center gap-8">
                <svg className="w-16 drop-shadow-md" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z" fill="#FBFBFB" />
                  <path d="M24 25C24 23.8954 24.8954 23 26 23H42C43.1046 23 44 23.8954 44 25V41C44 42.1046 43.1046 43 42 43H26C24.8954 43 24 42.1046 24 41V25Z" fill="#2F327D" />
                  <path d="M16 19C16 17.8954 16.8954 17 18 17H35.2245C36.3291 17 37.2245 17.8954 37.2245 19V36.2245C37.2245 37.3291 36.3291 38.2245 35.2245 38.2245H18C16.8954 38.2245 16 37.3291 16 36.2245V19Z" fill="#F48C06" />
                </svg>
                <span>TA&rsquo;s and presenters can be moved to the front of the class.</span>
              </li>
              <li className="flex items-center justify-center gap-8">
                <svg className="w-16 drop-shadow-md" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z" fill="#FBFBFB" />
                  <path d="M19.5 28.375C21.1547 28.375 22.5 26.9176 22.5 25.125C22.5 23.3324 21.1547 21.875 19.5 21.875C17.8453 21.875 16.5 23.3324 16.5 25.125C16.5 26.9176 17.8453 28.375 19.5 28.375ZM40.5 28.375C42.1547 28.375 43.5 26.9176 43.5 25.125C43.5 23.3324 42.1547 21.875 40.5 21.875C38.8453 21.875 37.5 23.3324 37.5 25.125C37.5 26.9176 38.8453 28.375 40.5 28.375ZM42 30H39C38.175 30 37.4297 30.3605 36.8859 30.9445C38.775 32.0668 40.1156 34.093 40.4062 36.5H43.5C44.3297 36.5 45 35.7738 45 34.875V33.25C45 31.4574 43.6547 30 42 30ZM30 30C32.9016 30 35.25 27.4559 35.25 24.3125C35.25 21.1691 32.9016 18.625 30 18.625C27.0984 18.625 24.75 21.1691 24.75 24.3125C24.75 27.4559 27.0984 30 30 30ZM33.6 31.625H33.2109C32.2359 32.1328 31.1531 32.4375 30 32.4375C28.8469 32.4375 27.7688 32.1328 26.7891 31.625H26.4C23.4187 31.625 21 34.2453 21 37.475V38.9375C21 40.2832 22.0078 41.375 23.25 41.375H36.75C37.9922 41.375 39 40.2832 39 38.9375V37.475C39 34.2453 36.5812 31.625 33.6 31.625ZM23.1141 30.9445C22.5703 30.3605 21.825 30 21 30H18C16.3453 30 15 31.4574 15 33.25V34.875C15 35.7738 15.6703 36.5 16.5 36.5H19.5891C19.8844 34.093 21.225 32.0668 23.1141 30.9445Z" fill="#2F327D" />
                </svg>
                <span>Teachers can easily see all students and class data at one time.</span>
              </li>
            </ul>
          </div>
        </div>
      </section >

    </>
  );
}

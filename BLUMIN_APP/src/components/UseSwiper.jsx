import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import logo1 from '../assets/team.jpeg'

const SwiperComponent = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            grabCursor={true}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            loop={true}
            slidesPerView={1}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: true,
            }}
            className="mySwiper lg:rounded-2xl"
        >
            <SwiperSlide >
                <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between items-stretch md:justify-start md:items-center font-mont bg-[#39a9f1] h-72">
                    <div className="left space-y-4 bg-[#39a9f1] flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                        <h1 className="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%] text-white">
                            Who we are ?
                        </h1>
                        <p className="w-3/4 text-justify text-xs  md:text-lg font-medium text-white">
                            BLUMIN is a pioneering initiative aimed at bridging the gap between industry and academia. Our platform connects forward-thinking companies with top-tier universities and colleges to facilitate meaningful collaborations and address the evolving needs of the technology ecosystem.
                        </p>
                        <Link to="/contact-us">
                            <button className="duration-300 ease-in-out bg-[#064c66] px-5 md:px-10 py-2 md:py-4 rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#064c66ed] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                Know More
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between items-stretch md:justify-start md:items-center font-mont bg-[#38b6ff]  h-72">
                    <div className="left space-y-4 bg-[#38b6ff]  flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                        <h1 className="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%] text-white">
                            What we offer ?
                        </h1>
                        <p className="w-3/4 text-md md:text-lg text-justify  font-medium text-white">
                            With years of experience in facilitating successful collaborations, BLUMIN brings unparalleled expertise to every partnership.
                        </p>
                        <Link to="/contact-us">
                            <button className="duration-300 ease-in-out bg-[#064c66] px-5 md:px-10 py-2 md:py-4 hover:bg-[#064c66ed] rounded-full text-white text-sm md:text-md font-semibold mt-2  hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                Know More
                            </button>
                        </Link>
                    </div>
                    {/* <div className="right min-h-max md:hidden rounded-md overflow-hidden">
                        <img class="object-fill min-h-max md:w-auto lg:h-auto" src={logo1} alt="" />
                    </div>
                    <div className="right hidden md:block rounded-xl overflow-hidden">
                        <img class="h-96" src={logo1} alt="" />
                    </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between items-stretch md:justify-start md:items-center font-mont bg-[#38b6ff] h-72">
                    <div className="left space-y-4 bg-[#38b6ff]  flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                        <h1 className="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%] text-white">
                            Why Choose BLUMIN ?
                        </h1>
                        <p className="w-3/4 text-justify text-xs  md:text-lg font-medium text-white">
                            At BLUMIN, we understand the dynamic landscape of innovation and the importance of forging meaningful partnerships. Here’s why we stand out:
                        </p>
                        <Link to="/contact-us">
                            <button className="duration-300 ease-in-out bg-[#064c66] px-5 md:px-10 py-2 md:py-4 rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#064c66ed] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                Know More
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;
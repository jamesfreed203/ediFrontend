import Image from "next/image";

const HeroBanner = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="relative overflow-hidden bg-white pt-[7.65rem] pb-[5.5rem] md:pt-[8.5rem] md:pb-[5rem] lg:pt-[10.625rem] lg:pb-[6.25rem]">
      <div className="grid-container max-w-[75.625rem] mx-auto px-4 sm:px-6">
        <div className="content-wrapper flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="hero-unit-content w-full lg:w-1/2 relative z-15">
            {/* Gradient Text */}
            <h1 className="headline text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] pb-5 mb-0 bg-gradient-to-r from-[#ED8721] via-[#e89736] to-[#573089] bg-clip-text text-transparent">
              {title}
            </h1>

            {/* Subtitle */}
            <h2 className="hero-unit-text text-[#1b3e51] text-xl md:text-2xl lg:text-[1.5rem] font-light leading-normal mt-2.5">
              {subtitle}
            </h2>

            {/* Buttons */}
            <div className="hero-unit-buttons flex flex-wrap gap-2.5 mt-5">
              {primaryButtonText && (
                <a
                  className="inline-flex items-center justify-center bg-[#f44414] text-white text-center no-underline cursor-pointer transition-all duration-300 text-sm md:text-base font-semibold py-3 px-7 rounded-[3.125rem] h-10 md:h-12 hover:bg-[#CB333A] group"
                  href={primaryButtonLink}
                  target="_self"
                >
                  {primaryButtonText}
                  <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="white"/>
                    </svg>
                  </span>
                </a>
              )}

              {secondaryButtonText && (
                <a
                  className="inline-flex items-center justify-center bg-none text-[#f44414] text-center no-underline cursor-pointer transition-all duration-300 text-sm md:text-base font-semibold py-3 px-7 rounded-[3.125rem] hover:text-[#CB333A] group"
                  href={secondaryButtonLink}
                  target="_self"
                >
                  {secondaryButtonText}
                  <span className="ml-2 transition-all duration-300 group-hover:ml-4">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z" fill="#f44414"/>
                    </svg>
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Image Section with Shadow Effect */}
          <div className="hero-unit-images w-full lg:w-1/2">
            <div className="image relative">
              {/* Main Image */}
              <div className="relative z-20">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={700}
                  height={559}
                  priority
                  className="inner-hero-unit-img w-full h-auto rounded-lg"
                />
              </div>

              {/* Shadow Effect */}
              <div className="shadow absolute bottom-0 left-0 right-0 w-full h-full pointer-events-none">
                <div className="shadow-inner relative w-full h-full">
                  <span className="absolute bottom-0 left-[6%] w-[22%] h-10 bg-[#c562a3] rounded-full blur-[15px] opacity-60"></span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-[68%] w-[100px] h-10 bg-[#c562a3] rounded-full blur-[16px] opacity-60"></span>
                  <span className="absolute right-0 bottom-0 w-[39%] h-10">
                    <span className="absolute left-0 top-0 w-[50%] h-full bg-[#aa2565] blur-[20px]"></span>
                    <span className="absolute right-[10%] top-0 w-[42%] h-full bg-[#6a133d] blur-[20px]"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
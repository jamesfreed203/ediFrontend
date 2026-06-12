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
    <section className="hero-unit centered-content hero-image-resize gradient">
      <div className="grid-container">
        <div className="content-wrapper">
          <div className="hero-unit-content">
            <h1 className="headline">{title}</h1>

            <h2 className="hero-unit-text">{subtitle}</h2>

            <div className="hero-unit-buttons">
              {primaryButtonText && (
                <a
                  className="button"
                  href={primaryButtonLink}
                  target="_self"
                >
                  {primaryButtonText}
                </a>
              )}

              {secondaryButtonText && (
                <a
                  className="button simple"
                  href={secondaryButtonLink}
                  target="_self"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          <div className="hero-unit-images">
            <div className="image">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={700}
                height={559}
                priority
                className="inner-hero-unit-img"
              />

              <div className="shadow">
                <div className="shadow-inner">
                  <span></span>
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
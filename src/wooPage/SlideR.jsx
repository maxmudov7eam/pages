
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src2: '/asset/image/dots.png',
    altText: 'Slide 1',
    caption: "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!"
  },
  {
    src2: '/asset/image/dots.png',
    altText: 'Slide 1',
    caption: "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!"
  },
  {
    src2: '/asset/image/dots.png',
    altText: 'Slide 1',
    caption: "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!"
  },

];

const SlideR = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* <img src={item.src} alt={item.altText} className='w-100' /> */}
        <img src={item.src2} className='secondary ' />
        <CarouselCaption  captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div className="slideR ">

          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2>Trusted by Agencies & Store Owners</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="col-7 offset-3">

                      <div className="myCard position-relative">
                        <div className="first position-absolute"></div>
                        <div className="second position-absolute"></div>
      
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}>
                            <span><img src="/assets/icons/next.svg" alt=""/></span>
                        </CarouselControl>
                        
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>

                    </div>

                </div>
              </div>
          </div>

    </div>
  );
}

export default SlideR;

import React, {useState, useEffect} from 'react';
import Aos from 'aos';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: '/assets2/image/header1.png',
    src2: '/assets2/image/header2.png',
    src3: '/assets2/image/header3.png',
    src4: '/assets2/image/header4.png',
    altText: 'Slide 1',
    text: 'OUT ZONE'
  },
  {
    src: '/assets2/image/header1.png',
    src2: '/assets2/image/header2.png',
    src3: '/assets2/image/header3.png',
    src4: '/assets2/image/header4.png',
    altText: 'Slide 2',
    text: 'OUT ZONE'
  },
  {
    src: '/assets2/image/header1.png',
    src2: '/assets2/image/header2.png',
    src3: '/assets2/image/header3.png',
    src4: '/assets2/image/header4.png',
    altText: 'Slide 3',
    text: 'OUT ZONE'
  }
];

const SliderSection = (props) => {

    const [dots, setDots] = useState(false)

    const dotClick = () => {
        setDots(true)
    }

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
            <div className="container">
                <div className="row">
                    <div data-aos='fade-right' className="col-6 mb-4">
                        <div>
                            <img src={item.src} alt={item.altText} className='w-100' /> 
                        </div>
                        <p className='regular'>{item.text}</p>
                    </div>
                    <div data-aos='fade-left' className="col-6 mb-4">
                        <div>
                            <img src={item.src2} alt={item.altText} className='w-100' /> 
                        </div>
                        <p className='regular'>{item.text}</p>
                    </div>
                    <div data-aos='fade-right' className="col-6 ">
                        <div>
                            <img src={item.src3} alt={item.altText} className='w-100' /> 
                        </div>
                        <p className='regular'>{item.text}</p>
                    </div>
                    <div data-aos='fade-left' className="col-6">
                        <div>
                            <img src={item.src4} alt={item.altText} className='w-100' /> 
                        </div>
                        <p className='regular'>{item.text}</p>
                    </div>
                </div>
            </div>
          {/* <img src={item.src} alt={item.altText} className='w' /> */}
          {/* <img src={item.src2} className='secondary' /> */}
          {/* <CarouselCaption  captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })





    return (
        <div className='sliderSection position-relative' id="second">
            <div className="text bold position-absolute">PORTFOLIO</div>
            <p className="light d-lg-none d-block position-absolute minitext">Here you can see our works and maybe they will be inspiring for you</p>

            <div className="position-fixed zed dots">
                <div><a className='red' href="#"></a></div>
                <div><a   href="#third"></a></div>
                <div><a   href="#four"></a></div>
                <div><a   href="#"></a></div>
                <div><a   href="#"></a></div>
                <div><a   href="#"></a></div>
            </div>

                
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

            {/* <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div><img src="/assets2/image/header1.png" className='w-100' alt=""/></div>
                    </div>
                    <div className="col-6">
                        <div><img src="/assets2/image/header2.png" className='w-100' alt=""/></div>
                    </div>
                    <div className="col-6">
                        <div><img src="/assets2/image/header3.png" className='w-100' alt=""/></div>
                    </div>
                    <div className="col-6">
                        <div><img src="/assets2/image/header4.png" className='w-100' alt=""/></div>
                    </div>
                </div>
            </div> */}
        </div> 
    )
}

export default SliderSection

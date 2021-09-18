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
    src: '/assets2/image/sec1.png',
    src2: '/assets2/image/sec2.png',
    src3: '/assets2/image/sec1.png',
    src4: '/assets2/image/sec4.png',
    src5: '/assets2/image/sec5.png',
    src6: '/assets2/image/sec6.png',
    src7: '/assets2/image/sec6.png',
    src8: '/assets2/image/sec8.png',
    src9: '/assets2/image/sec4.png',
    altText: 'Slide 1',
    text: 'OUT ZONE'
  },
  {
    src: '/assets2/image/sec1.png',
    src2: '/assets2/image/sec2.png',
    src3: '/assets2/image/sec1.png',
    src4: '/assets2/image/sec4.png',
    src5: '/assets2/image/sec5.png',
    src6: '/assets2/image/sec6.png',
    src7: '/assets2/image/sec6.png',
    src8: '/assets2/image/sec8.png',
    src9: '/assets2/image/sec4.png',
    altText: 'Slide 2',
    text: 'OUT ZONE'
  },
  {
    src: '/assets2/image/sec1.png',
    src2: '/assets2/image/sec2.png',
    src3: '/assets2/image/sec1.png',
    src4: '/assets2/image/sec4.png',
    src5: '/assets2/image/sec5.png',
    src6: '/assets2/image/sec6.png',
    src7: '/assets2/image/sec6.png',
    src8: '/assets2/image/sec8.png',
    src9: '/assets2/image/sec4.png',
    altText: 'Slide 3',
    text: 'OUT ZONE'
  }
];

const SliderSecond = (props) => {

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
                <div className="row align-items-center">
                    <div data-aos='fade-right' className="col-4 ">
                        <div>
                            <img src={item.src} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-4 ">
                        <div>
                            <img src={item.src2} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-4  ">
                        <div>
                            <img src={item.src3} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div data-aos='fade-right' className="col-4 mb-4">
                        <div>
                            <img src={item.src4} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-4 mb-4">
                        <div>
                            <img src={item.src5} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-4  mb-4">
                        <div>
                            <img src={item.src6} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div data-aos='fade-right' className="col-4 mb-4">
                        <div>
                            <img src={item.src7} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-4 mb-4">
                        <div>
                            <img src={item.src8} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-4  mb-4">
                        <div>
                            <img src={item.src9} alt={item.altText} className='w-100' /> 
                        </div>
                    </div>
                </div>
            </div>
        </CarouselItem>
      );
    });

     
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1900,
            easing: 'ease-in-out'
        })
    })



    return (
        <div id="third" className='mb-5'>
        <div className="container" >
            <div className="row">
                <div className="col-lg-12 ">
                    <h2 data-aos='fade-up' className="regular d-none d-lg-block d-md-block">We have collaborated with brands such as</h2>
                </div>
            </div>
        </div>
        <div className='sliderSection position-relative second'>
            <div className="text bold position-absolute">Our customers</div>
            <h6 className="light bold position-absolute d-block d-lg-none d-md-none">Here you can see our works and maybe they will be inspiring for you</h6>

                
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
    )
}

export default SliderSecond

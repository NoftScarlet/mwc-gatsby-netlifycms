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
        src: "https://piano.uottawa.ca/mwc/img/cover.jpg",
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: "http://piano.uottawa.ca/wp-content/uploads/2019/04/labinterview.jpg",
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: "https://piano.uottawa.ca/wp-content/uploads/2019/04/thekey.jpg",
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const HomeCarousel = (props) => {
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
                <div className={"carousel-img-wrapper"} style={{
                    backgroundImage:`url(${item.src})`,
                    backgroundClip: 'border-box',
                    backgroundColor: 'transparent',
                    backgroundOrigin: 'padding-box',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 'auto !important',
                    margin: '0 auto',
                    minHeight: '600px',
                    width: '100%',
                    paddingTop: '0',
                    position: 'relative',
                }}>
                </div>


                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default HomeCarousel
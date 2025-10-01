import { useEffect, useState, useRef } from 'react'
import { Review } from './Review'
import './review.css'
const reviewsData = [
    {
        id: 1,
        name: 'Adebisi oluwasayofunmi',
        date: 'May 15, 2023',
        rating: 5,
        text: "She has a very good work rate, i loved the website.",
    },
    {
        id: 2,
        name: 'Jide Hakeem',
        date: 'April 3, 2023',
        rating: 4,
        text: "The quality of work exceeded my expectations. There were a few minor details that could be improved, but I'm very satisfied with the results.",
    },
    {
        id: 3,
        name: 'Ronke',
        date: 'June 22, 2023',
        rating: 5,
        text: 'I liked the website, it was just the way i wanted it.',
    },
    {
        id: 4,
        name: 'Aduragbemi Iserel',
        date: 'March 18, 2023',
        rating: 5,
        text: "She's a very talented person, I loved working with her.",
    },
    // {
    //     id: 5,
    //     name: 'Opeoluwa Saka',
    //     date: 'July 7, 2023',
    //     rating: 4,
    //     text: 'The Website was beautiful.',
    // },
    // {
    //     id: 6,
    //     name: 'Robert Kim',
    //     date: 'May 29, 2023',
    //     rating: 5,
    //     text: 'Exceptional quality and service. They really understood what I was looking for and delivered exactly that. Highly recommend!',
    // },
]
export const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const slideshowRef = useRef(null)
    // Function to scroll to a specific review
    const scrollToReview = (index) => {
        if (slideshowRef.current) {
            const slideWidth = slideshowRef.current.clientWidth
            slideshowRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth',
            })
        }
    }
    // Handle manual navigation
    const handlePrevious = () => {
        const newIndex =
            currentIndex === 0 ? reviewsData.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        scrollToReview(newIndex)
    }
    const handleNext = () => {
        const newIndex =
            currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        scrollToReview(newIndex)
    }
    // Handle scroll event to update the current index
    const handleScroll = () => {
        if (slideshowRef.current) {
            const scrollPosition = slideshowRef.current.scrollLeft
            const slideWidth = slideshowRef.current.clientWidth
            const newIndex = Math.round(scrollPosition / slideWidth)
            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex)
            }
        }
    }
    // Auto-sliding functionality
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                const newIndex =
                    currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1
                setCurrentIndex(newIndex)
                scrollToReview(newIndex)
            }, 5000) // Change slide every 5 seconds
            return () => clearInterval(interval)
        }
    }, [currentIndex, isPaused])
    return (
        <div className="reviews-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="project-head">TESTIMONIALS</h2>
                    <div className="section-divider"></div>
                    <p className="section-description">
                        Here's what clients have to say about their experiences working with
                        me.
                    </p>
                </div>
                <div className="slideshow-container">
                    <div
                        className="reviews-slideshow"
                        ref={slideshowRef}
                        onScroll={handleScroll}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {reviewsData.map((review) => (
                            <div key={review.id} className="slideshow-slide">
                                <Review
                                    name={review.name}
                                    rating={review.rating}
                                    text={review.text}
                                    avatarUrl={review.avatarUrl}
                                />
                            </div>
                        ))}
                    </div>
                    {/* <button
                        className="slideshow-nav slideshow-prev"
                        onClick={handlePrevious}
                    >
                        <BiChevronLeft size={24} />
                    </button>
                    <button className="slideshow-nav slideshow-next" onClick={handleNext}>
                        <BiChevronRight size={24} />
                    </button> */}
                </div>
                <div className="slideshow-indicators">
                    {reviewsData.map((_, index) => (
                        <button
                            key={index}
                            className={`slideshow-indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentIndex(index)
                                scrollToReview(index)
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

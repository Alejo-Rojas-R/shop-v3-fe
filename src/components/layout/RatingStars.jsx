const items = [1, 2, 3, 4, 5];

export const RatingStars = ({ rating, showScore = true, readonly = true, onRatingChange }) => {

    const handleHover = (newRating) => {
        onRatingChange(newRating);
    };

    return (
        <>
            {readonly ?
                <>
                    {items.map((item, index) => (
                        <i key={index} className={`bi bi-star-fill me-1 ${(index < Math.round(rating)) ? 'text-info' : 'text-muted opacity-25'}`}></i>
                    ))}
                    {(showScore) && <div className='opacity-75'>({rating})</div>}
                </>
                :
                <>
                    {items.map((item, index) => (
                        <i key={index} onMouseEnter={() => handleHover(item)} className={`bi bi-star-fill me-1 ${(index < Math.round(rating)) ? 'text-info' : 'text-muted opacity-25'}`}></i>
                    ))}
                </>
            }
        </>
    );
}
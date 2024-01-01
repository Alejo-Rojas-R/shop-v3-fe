const items = [1, 2, 3, 4, 5];

export const RatingStars = ({ rating, showRating = true }) => {

    return (
        <>
            {
                items.map((item, index) => (
                    <i key={index} className={`bi bi-star-fill me-1 ${(index < Math.round(rating)) ? 'text-info' : 'text-muted opacity-25'}`}></i>
                ))
            }
            {showRating && <div className='opacity-75'>({rating})</div>}
        </>
    );
}
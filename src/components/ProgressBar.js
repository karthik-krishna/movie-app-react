import React from 'react';

function ProgressBar(rating) {
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: rating.userRating * 10 + '%', backgroundColor: (rating.userRating * 10) <= 40 ? '#d23030' : (rating.userRating * 10) <= 75 && (rating.userRating * 10) > 40 ? '#f1c036' : '#29c158' }}>
                </div>
            </div>
        );
}

export default ProgressBar;
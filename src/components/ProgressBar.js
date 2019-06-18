import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: this.props.userRating * 10 + '%', backgroundColor: (this.props.userRating * 10) <= 40 ? '#d23030' : (this.props.userRating * 10) <= 75 && (this.props.userRating * 10) > 40 ? '#f1c036' : '#29c158' }}>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
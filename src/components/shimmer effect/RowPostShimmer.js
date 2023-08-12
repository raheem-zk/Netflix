import React from 'react';
import './RowPostShimmer.css';

function RowPostShimmer() {
    return (
        <div className="row">
            <h1>&nbsp;</h1>
            <div className="posters">
                <div className="poster-shimmer shimmer"></div>
                <div className="poster-shimmer shimmer"></div>
                <div className="poster-shimmer shimmer"></div>
                {/* Add as many posters as you need */}
            </div>
        </div>
    );
}

export default RowPostShimmer;

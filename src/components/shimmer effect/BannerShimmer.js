import React from 'react';
import './BannerShimmer.css';

function BannerShimmer() {
    return (
        <div className="banner-shimmer">
            <div className="content-shimmer">
                <div className="title-shimmer"></div>
                <div className="button-shimmer"></div>
                <div className="description-shimmer"></div>
            </div>
        </div>
    );
}

export default BannerShimmer;

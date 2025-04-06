import React, { Suspense } from 'react';

// Simulate delay in lazy loading
const LazyMapItem = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./map-item'));
        }, 2000); // 2-second delay to show fallback
    });
});

export const LazyLoadingExample = () => {
    return (
        <Suspense fallback={<p>Loading the map item...</p>}>
            <LazyMapItem />
        </Suspense>
    )
}

export default LazyLoadingExample;
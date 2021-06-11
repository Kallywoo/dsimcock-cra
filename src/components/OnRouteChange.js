import { useEffect, useRef } from 'react';
import { Location } from '@reach/router';

// prevents awkward scroll without breaking accessibility:
// https://stackoverflow.com/a/56996986 & https://github.com/DarkSmile92/reach-router-scroll-top

const OnRouteChangeWorker = ({location, action}) => {
    const locationRef = useRef("");

    useEffect(() => {
        if(location.pathname !== locationRef.current) {
            locationRef.current = location.pathname;
            action();
        };
    });

    return null;
};

const defaultAction = () => {
    window.scrollTo(0, 0);
};

export const OnRouteChange = ({ action = defaultAction }) => (
    <Location>
        {({ location }) => <OnRouteChangeWorker location={location} action={action} />}
    </Location>
);
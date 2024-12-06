import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <section>
                <Banner></Banner>
            </section>
            {/* Services */}
            <section>
                <Services></Services>
            </section>
        </div>
    );
};

export default Home;
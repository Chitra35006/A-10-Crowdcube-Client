import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Unity1 from './Unity1';
import RunningCampaign from '../Pages/RunningCampaign';



const Home = () => {
    return (
        <div>
            {/* Banner */}
            <section>
                <Banner></Banner>
            </section>
            {/* Running Campaign */}
            <section>
                <RunningCampaign></RunningCampaign>
            </section>
            {/* Unity */}
            <section>
                <Unity1></Unity1>
            </section>
            {/* Services */}
            <section>
                <Services></Services>
            </section>
        
            
        </div>
    );
};

export default Home;
import React from 'react';
import { HomeButton } from '../components/Button';

const About = ()  => {
    return (
        <div className='about-us'>
            <h1>What is Neutrix Hub</h1>
            <p>Neutrix is a tech education hub centre aimed at bridging the gap between talents and professionalism. We transform talents and motive into excellence. We are building digital skills that catalyse technological growth and achievements. We offer a targeted skill empowerment journey through 1:1 live mentorship sessions. Our lessons are continually refined and updated to meet the dynamic needs of our users.</p>

            <h3>Benefits</h3>
            <ul>
                <li>Get unlimited access to targeted courses from leading professionals.</li>
                <li>Learn and build your skills at your own pace.</li>
                <li>Get a customised curriculum for your personalised development.</li>
                <li>Explore and build your business data, trending topics and transform your skills.</li>
            </ul>
            
            <HomeButton path='/resources'>Go to Neu Resources</HomeButton>
        </div>
    )
}

export default About;
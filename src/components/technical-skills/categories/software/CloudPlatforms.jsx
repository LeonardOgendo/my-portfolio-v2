import { FaAws } from 'react-icons/fa';
import { SiGithubpages, SiVercel, SiNetlify, SiRender, SiRailway } from 'react-icons/si';

const CloudPlatforms = () => {
    const cloudPlatforms = [
        { name: 'GitHub Pages', icon: <SiGithubpages /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Netlify', icon: <SiNetlify /> },
        { name: 'Render', icon: <SiRender /> },
        { name: 'Railway', icon: <SiRailway /> },
        { name: 'AWS', icon: <FaAws /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Cloud Platforms</h2>
                <span>Cloud</span>
            </div>

            <p>Platforms for deploying full-stack apps and exploring modern cloud services.</p>

            <p className='cards-hls'>
                <span>GitHub Pages</span> <span>Vercel</span> <span>Netlify</span> <span>Render</span> <span>Railway</span> <span>AWS</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                These platforms power my deployments for personal projects, production apps, and ongoing cloud learning.
            </p>

            <div className="stack-grid">
                {cloudPlatforms.map((platform, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{platform.icon}</div>
                        <div className="stack-name">{platform.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloudPlatforms;

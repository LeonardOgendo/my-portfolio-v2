import { FaWordpress } from 'react-icons/fa';
import { SiSanity } from 'react-icons/si';

const Cms = () => {
    const tools = [
        { name: 'WordPress', icon: <FaWordpress /> },
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">CMS & Others</h2>
                <span>CMS</span>
            </div>

            <p>Content management tools I’ve worked with or am currently exploring for modern development.</p>

            <p className='cards-hls'>
                <span>WordPress</span> <span>Sanity</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                WordPress for traditional site building, and Sanity (headless CMS) for modern content-driven web applications.
            </p>

            <div className="stack-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{tool.icon}</div>
                        <div className="stack-name">{tool.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cms;

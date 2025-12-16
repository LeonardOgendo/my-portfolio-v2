import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiAngular, SiExpress, SiDjango, SiFastapi, SiTailwindcss } from 'react-icons/si';


const Frameworks = () => {
    const frameworks = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Django (DRF)', icon: <SiDjango /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap5', icon: <FaBootstrap /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Frameworks & Libraries</h2>
                <span>Frameworks & Libraries</span>
            </div>

            <p>Tools that streamline application development and styling.</p>

            <p className='cards-hls'>
                <span>React</span> <span>Angular</span> <span>Node.js</span> <span>Express.js</span> <span>Django (DRF)</span> <span>FastAPI</span> <span>Tailwind CSS</span> <span>Bootstrap</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>These libraries and frameworks enable me to build scalable APIs, dynamic UIs, and modern web apps efficiently.</p>

            <div className="stack-grid">
                {frameworks.map((framework, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{framework.icon}</div>
                        <div className="stack-name">{framework.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frameworks;

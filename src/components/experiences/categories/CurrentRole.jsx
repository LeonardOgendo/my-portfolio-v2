import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { calculateMonths } from '../../../shared/utils/dateUtils';

const CurrentRole = () => {

    const role = {
        jobTitle : 'Software Engineer',
        company: 'Afristec Ltd.',
        location: `Nairobi, Kenya · Hybrid`,
        startDate: '2025-09-01',
        dateLabel: 'September 2025 - Present',
        activities: [
            {
                title: 'Owned Full-Stack Development of a School Management Information System (MIS)',
                description:
                    'Assumed end-to-end ownership of a School MIS, delivering full-stack enhancements and maintaining core features using React for the frontend and Spring Boot (Java) for backend services.',
            },
            {
                title: 'Developed and Enhanced Modern Frontend Interfaces',
                description:
                    'Built and enhanced responsive, user-focused interfaces using React.js and Angular, focusing on usability, performance, and maintainable component-driven design.',
            },
            {
                title: 'Implemented Scalable Frontend–Backend API Integrations',
                description:
                    'Designed and integrated RESTful APIs to enable reliable communication between frontend applications and Spring Boot backends, supporting stable, scalable, and maintainable product functionality.',
            },

        ]
    }
    
    const months = calculateMonths(role.startDate);

    return (
        <div className="current-role">
            <div className="role-header">
                <div className="role-info">
                    <h3 className="job-title">{role.jobTitle}</h3>
                    <div className="company-location">
                        <span><FaBuilding /> {role.company}</span>
                        <span><FaMapMarkerAlt /> {role.location}</span>
                    </div>
                </div>

                <div className="role-duration">
                    <span><FaCalendarAlt /> {role.dateLabel}</span>
                    <span className="role-months">
                        {months} {months === 1 ? 'month' : 'months'}
                    </span>
                </div>
            </div>

            <div className="role-timeline">
                <div className="timeline-marker"></div>
                <div className="timeline-activities">
                    {role.activities.map((activity, index) => (
                        <div className="activity-item" key={index}>
                            <h4>{activity.title}</h4>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentRole;

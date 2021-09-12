import './experience.css';

const listRoles = (roles) => {
    return roles.map((role) => {
        return <li>{role}</li>
    })
}
const rolesElement = (roles) => {
    if(!Array.isArray(roles)){
        return <div>{roles}</div>
    }
    return (
        <div>
            <p>{roles[0]}</p>
            <ol>
                {listRoles(roles.slice(1, roles.length-2))}
            </ol>
            <p>
                <b>{roles[roles.length-1]}</b>
            </p>
        </div>
    )
}
const Experience = ({experienceNumber, year, jobPosition, companyName, jobLocation, roles}) => 
(
    <div className={`experience-${experienceNumber} relative-position experience-container `}>
        <div className="vertical-bar">
            
        </div>
        <div className="year relative-position">
            <h2>{year}</h2>
        </div>
        <div className="job-position relative-position">
            <h3>{jobPosition}</h3>
        </div>
        <div className="company-name relative-position">
            {companyName}
        </div>
        <div className="company-location relative-position">
            {jobLocation}
        </div>
        <div className="roles relative-position">
            {rolesElement(roles)}
        </div>
    </div>
)

export default Experience;
import './projects.css';

const ProjectList = ({projectNumber, name, jobPosition, description, image}) => {
    return(
    <div className={`experience-${projectNumber} relative experience-container `}>
        <div className="vertical-bar">

        </div>
        <div className="project-name relative align-start">
            <h2>{name}</h2>
        </div>
        <div className="job-position relative align-start">
            <h3>{jobPosition}</h3>
        </div>
        <div className="project-description relative align-start">
            {description}
        </div>
        <div className="project-image relative align-start">
            <div className="img-container"></div>
        </div>
    </div>
    )
}

export default ProjectList;
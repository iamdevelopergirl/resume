import Layout from '../Common/layout.js';
import ProjectList from './projectList.js';

const Projects = () => (
    <div>
        <Layout title="Projects">
            <ProjectList
            projectNumber={1}
            name="IE Unsupported page"
            jobPosition="Senior Software Engineer"
            description="This is a UI that will come for the user who tries to come to norton e-commerce portal in IE"
            image=""/>
        </Layout>
    </div>
)

export default Projects;
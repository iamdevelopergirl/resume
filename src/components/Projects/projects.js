import Layout from '../Common/layout.js';
import ProjectList from './projectList.js';
import IE_page from '../../assets/IE_Unsupported_Page1.png';
import QR_page from '../../assets/QR_Code_Page.png';
import PWD_page from '../../assets/Password_gen_Page.png';
import YEMEK_page from '../../assets/Yemeksepeti.png';
import PEDIDOSYA_page from '../../assets/Pedidosya.png';
import FOODPANDA_page from '../../assets/Foodpanda.png';

const Projects = () => (
    <div>
        <Layout title="Projects">
            <ProjectList
            projectNumber={1}
            name="Pedidosya Vendor Portal"
            jobPosition="Senior Software Engineer"
            description="UI/Self sign up form to successfully onboard South America region restaurant/vendors into delivery product"
            image={PEDIDOSYA_page}/>
            <ProjectList
            projectNumber={2}
            name="Yemesepeti Vendor Portal"
            jobPosition="Senior Software Engineer"
            description="UI/Self sign up form to successfully onboard Turkey region restaurant/vendors into delivery product"
            image={YEMEK_page}/>
            <ProjectList
            projectNumber={3}
            name="Foodpanda Vendor Portal"
            jobPosition="Senior Software Engineer"
            description="UI/Self sign up form to successfully onboard Asia region restaurant/vendors into a delivery product"
            image={FOODPANDA_page}/>
            <ProjectList
            projectNumber={4}
            name="IE Unsupported page"
            jobPosition="Senior Software Engineer"
            description="This is a UI that will come for the user who tries to access norton e-commerce portal in IE"
            image={IE_page}/>
            <ProjectList
            projectNumber={5}
            name="QR Code Onboarding page"
            jobPosition="Senior Software Engineer"
            description="Initial UI of Norton Password Manager for setting up the product either using email id or using qr code scan. In qr code scan, there is no need to remember the norton account or the master vault password."
            image={QR_page}/>
            <ProjectList
            projectNumber={6}
            name="Password generator page"
            jobPosition="Software Engineer"
            description="This page is been added as a feature addition to the password manager product. This will help in getting a secure passwod with user's needs accomplished"
            image={PWD_page}/>
        </Layout>
    </div>
)

export default Projects;
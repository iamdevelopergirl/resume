import './layout.css';

const Layout = ({children, title}) => (
    <div>
        <div className="fixed-background">
            <div className="scroll-container">
                <div className="grid-container">
                    <div className="title">
                        <h1> {title} </h1>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </div>
)
export default Layout;

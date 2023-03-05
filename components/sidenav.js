import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../images/lpu-mainlogo.png'

function Sidenav() {
    return (
        <>
            <section id="sidebar">
                <a href="#" className="brand">
                    <i className='bx bxs-clinic' ></i>
                    <span className="text">Health Monitoring</span>
                </a>
                <ul className="side-menu top">
                    <li className="active">
                        <Link href="/">
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/health-records">
                            <i className='bx bxs-folder'></i>
                            <span className="text">Health Records</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/analytics">
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/user-management">
                            <i className='bx bxs-doughnut-chart' ></i>
                            <span className="text">User Management</span>
                        </Link>
                    </li>
                </ul>
                <br/>
                <Image alt="" src={logoImage} width="100" height="auto"/>
                <ul className="side-menu">
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bxs-log-out-circle'></i>
                            <span className="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}
  
export default Sidenav
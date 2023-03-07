import { React } from 'react'
import { Layout as LayoutAnt } from 'antd'

import Sidenav from '@/components/sidenav'
import Footer from '@/components/footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

function Layout({ children }) {

    const { Content } = LayoutAnt

    const router = useRouter()

    return (
        <>
            <Head>
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
            </Head>
            <Sidenav/>
            <Content id="content">
                <nav>
                    <i className='bx bx-menu'></i>
                    <a href="#" className="nav-link">Categories</a>
                </nav>
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li><a href="#">Dashboard</a></li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li><a className="active" href="#">Home</a></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        {children}
                    </div>
                </main>
            </Content>
            <Footer/>
        </>
    )
}

export default Layout
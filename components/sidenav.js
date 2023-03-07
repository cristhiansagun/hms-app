import { React, useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import logoImage from '../images/lpu-mainlogo.png'
import { SIDENAV_MENU } from '@/utilities/constants'

function Sidenav() {

    const [currentRoute, setCurrentRoute] = useState('/')

    const router = useRouter()

    useEffect(() => {
        setCurrentRoute(router.pathname)
    }, [router])

    return (
        <>
            <section id="sidebar">
                <a href="#" className="brand">
                    <i className='bx bxs-clinic' ></i>
                    <span className="text">Health Monitoring</span>
                </a>
                <ul className="side-menu top">
                    {
                        SIDENAV_MENU.map((menu) => {
                            return (
                                <li className={currentRoute === menu.link ? 'active' : ''} key={menu.key}>
                                    <Link href={menu.link}>
                                        <i className={menu.icon}></i>
                                        <span className="text">{menu.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
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
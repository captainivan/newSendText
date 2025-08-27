"use client"
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styles from "@/app/styles/Sended.module.css"

const Page = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const storedArray = JSON.parse(localStorage.getItem("sendData")) || [];
        setData(storedArray)
    }, [])

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.cardGridWrapper}> 
                    {data.map((e, i) => (
                        <div key={i} className={styles.card}>
                            <h3>Text ID : <span>{e.textId}</span></h3>
                            <p>{e.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page
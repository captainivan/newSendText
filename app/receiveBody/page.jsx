"use client"
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import WhatSendText from '../components/WhatSendText'
import Footer from '../components/Footer'
import styles from "@/app/styles/ReceiveBody.module.css"
import { Button } from '@/components/ui/button'
import Loading from '../components/Loading'

const page = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [id, setId] = useState(0);
    const handleChange = (val) => {
        setId(val)
    }
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const api = await fetch(`/api/message?id=${id}`)
            const data = await api.json()
            if (data.message === "success") {
                const storedArray = JSON.parse(localStorage.getItem("receiveData")) || [];
                const storeData = {
                    textId: id,
                    text: data.text
                }
                storedArray.push(storeData);
                localStorage.setItem("receiveData", JSON.stringify(storedArray));

                setData(data.text)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.upperDiv}>
                        <input
                            placeholder='Enter Code'
                            type="number"
                            onChange={(e) => { handleChange(e.target.value) }}
                        />
                        <Button onClick={handleSubmit} >{loading ? <><Loading /></> : <>SEARCH</>}</Button>
                    </div>
                    <textarea
                        readOnly
                        value={data || "Error"}
                        placeholder='Text Will Appear Here...'
                    ></textarea>
                </div>
            </div>

            <WhatSendText />
            <Footer />
        </>

    )
}

export default page
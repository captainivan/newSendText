"use client"
import styles from "@/app/styles/SendBody.module.css";
import { useState } from "react";
import Loading from "./Loading";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";
import Script from "next/script";

const SendBody = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucess, setsucess] = useState(false);
  const [newData, setData] = useState([])
  const handleChange = (val) => {
    setText(val);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!text) return;
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (data.message === "success") {
        const storedArray = JSON.parse(localStorage.getItem("sendData")) || [];
        const storeData = {
          textId: data.textId,
          text: text
        }
        storedArray.push(storeData);
        localStorage.setItem("sendData", JSON.stringify(storedArray));
        setsucess(true)
        setData(data.textId)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className={styles.bosscontainer}>
        <div
          className={styles.adContainerThree}
          style={{ width: 320, height: 50, background: "#f4f4f4" }}
        >
          <Script id="ad-config-3" strategy="afterInteractive">
            {`
          window.atOptions = {
            'key': '4d5e23906d85a4ddbe15371377f86fe8',
            'format': 'iframe',
            'height': 50,
            'width': 320,
            'params': {}
          };
        `}
          </Script>

          <Script
            id="ad-script-3"
            strategy="afterInteractive"
            src="https://www.highperformanceformat.com/4d5e23906d85a4ddbe15371377f86fe8/invoke.js"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.adContainer} style={{ width: 160, height: 600, background: "#f4f4f4" }}>
            <Script id="ad-config" strategy="afterInteractive">
              {`
      window.atOptions = {
        'key': '32a58e62c8219d1e90827b441a788809',
        'format': 'iframe',
        'height': 600,
        'width': 160,
        'params': {}
      };
    `}
            </Script>
            <Script
              id="ad-script"
              strategy="afterInteractive"
              src="https://www.highperformanceformat.com/32a58e62c8219d1e90827b441a788809/invoke.js"
            />
          </div>

          <div className={styles.sendBody}>
            {sucess ?
              <>
                <div className={styles.sucessDiv}>
                  <p>
                    Here is your six digit secret key. Share it with your friends  it will remain valid for <span>20:00</span> minutes.
                  </p>
                  <h1>{newData || "ERROR"}</h1>
                  <Button onClick={() => { setsucess(false) }} className={styles.backButton}  ><StepBack className={styles.backLogo} />  GET BACK</Button>
                </div>

              </>
              :
              <>
                <form onSubmit={handleSubmit} >
                  <textarea
                    placeholder="Write your text here..."
                    name="text"
                    onChange={(e) => { handleChange(e.target.value) }}
                    className={styles.textArea}
                    required
                  />
                  <button className={styles.sendButton} type="submit" >{loading ? <><Loading /></> : <>SEND</>}</button>
                </form>


              </>
            }
          </div>
          <div
            className={styles.adContainerTwo}
            style={{ width: 160, height: 300, background: "#f4f4f4" }}
          >
            <Script id="ad-config-2" strategy="afterInteractive">
              {`
          window.atOptions = {
            'key': 'f813472f46df8a7da99a9f27b94898b7',
            'format': 'iframe',
            'height': 300,
            'width': 160,
            'params': {}
          };
        `}
            </Script>

            <Script
              id="ad-script-2"
              strategy="afterInteractive"
              src="https://www.highperformanceformat.com/f813472f46df8a7da99a9f27b94898b7/invoke.js"
            />
          </div>
        </div>
        <div
          className={styles.adContainerFour}
          style={{
            maxWidth: 468,
            width: "100%",
            height: 60,
            overflow: "hidden",
            background: "#f4f4f4",
          }}
        >
          {/* Config must load before the ad script */}
          <Script id="ad-config-4" strategy="afterInteractive">
            {`
          window.atOptions = {
            'key': 'a97d584cb9f3e4def618033e723eea75',
            'format': 'iframe',
            'height': 60,
            'width': 468,
            'params': {}
          };
        `}
          </Script>

          <Script
            id="ad-script-4"
            strategy="afterInteractive"
            src="https://www.highperformanceformat.com/a97d584cb9f3e4def618033e723eea75/invoke.js"
          />
        </div>
      </div>
    </>
  );
};

export default SendBody;

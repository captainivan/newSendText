"use client"
import styles from "@/app/styles/SendBody.module.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";

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
    <div className={styles.sendBody}>
      {sucess ?
        <>
          <div className={styles.sucessDiv}>
            <p>
              Here is your six digit secret key. Share it with your friends  it will remain valid for <span>20:00</span> minutes.
            </p>
            <h1>{newData || "ERROR"}</h1>
            <Button onClick={()=>{setsucess(false)}} className={styles.backButton}  ><StepBack className={styles.backLogo} />  GET BACK</Button>
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
  );
};

export default SendBody;

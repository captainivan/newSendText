const data = async()=>{
    const api = await fetch(`https://3000-firebase-sendtext-1756216568751.cluster-sumfw3zmzzhzkx4mpvz3ogth4y.cloudworkstations.dev/api/message`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            text:"hello"
        })
    })
    const res = await api.json();
    console.log(res)
}
data();
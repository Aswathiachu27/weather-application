// const base_url="https://www.weatherapi.com/my/"

// const api_key="4c7a6a45c3d8422196e105436241408"


const getWeather=async()=>{
    let result=""
    const city=winp.value
    const res=await fetch(` http://api.weatherapi.com/v1/current.json?key=ccf0ce9e90bf4881b9a101104241408&q=${city}`)
    const jsres=await res.json()
    console.log(jsres)
    result=`
    <h3>${jsres.location.name},${jsres.location.region}.${jsres.location.country}</h3>
    <img src=${jsres.current.condition.icon} alt="icon">
    <h5>${jsres.current.condition.text}</h5>
    `

    cnt.innerHTML=result
}
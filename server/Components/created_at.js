const Time = () => {
    const InMillSeconds = Date.now()
    const localString = new Date().toLocaleString()
    const IsoString = new Date().toISOString()
    const UTCString = new Date().toUTCString()
    return {
        InMillSeconds,localString,IsoString,UTCString
    }
}


export default Time
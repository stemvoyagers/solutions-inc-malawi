import { useState, useEffect } from 'react'

const UseTypingEffect = (text, speed) => {
    const [displayText, setDisplayText] = useState("")
    const [previousText, setPreviousText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if(text != previousText) {
            setDisplayText("")
            setCurrentIndex(0)            
            setPreviousText(text)
        }

        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1)
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () =>  clearInterval(typingInterval);
        }, [text, speed, previousText, currentIndex])

    return displayText
}   

export default UseTypingEffect
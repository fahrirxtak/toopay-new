import { useState, useEffect } from "react";

const useTime = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const wibTime = new Date(utc + 7 * 3600000); // UTC+7
            let hours = wibTime.getHours();
            const minutes = wibTime.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            const formattedHours = hours.toString().padStart(2, "0");
            const formattedMinutes = minutes.toString().padStart(2, "0");
            setCurrentTime(`${formattedHours}.${formattedMinutes} ${ampm}`);
        };
        updateTime();
        const intervalId = setInterval(updateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return currentTime;
};

export default useTime;

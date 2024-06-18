import React, {useEffect} from "react";

import "./Unathorized.css";

const Unathorized = () => {

    const [countdown, setCountdown] = React.useState(5);

    useEffect(() => {
        let countdown = 5;
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown--);
            } else {
                clearInterval(timer);
                window.location.href = "/";
            }
            }, 1000);

        return () => clearInterval(timer);
        }, []);



  return (
    <div className="stub-wrapper">
      <h1>402</h1>
      <p>Требуется авторизация</p>
      <p>Перенаправление на главную страницу через {countdown} секунд</p>
    </div>
  );
};

export default Unathorized;

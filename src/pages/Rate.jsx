import { useEffect } from "react";
import emailjs from "emailjs-com";
import { useSearchParams } from "react-router-dom";

const Rate = () => {
    const [searchParams] = useSearchParams();
    const rating = searchParams.get("score");

    useEffect(() => {
        if (rating) {
            emailjs.send(
                "service_yvilryj",  // Replace with your EmailJS Service ID
                "template_n65toxc", // Replace with your EmailJS Template ID
                { rating: rating, user_email: "saiprasaddangade.sae.comp@gmail.com" }, // Replace with your email
                "BS3DxbVLHKuCwU_Or"   // Replace with your EmailJS Public Key
            ).then(() => {
                alert("Thanks for your feedback!");
            }).catch((error) => {
                console.error("Error sending feedback:", error);
            });
        }
    }, [rating]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Thank You for Your Feedback! 🎉</h2>
            <p>Your rating: {rating} ⭐</p>
            <a href="/">Go Back to Portfolio</a>
        </div>
    );
};

export default Rate;

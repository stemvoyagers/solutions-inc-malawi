import express, { json } from "express";
import { createTransport } from "nodemailer";

const app = express();

// Middleware to parse JSON bodies
app.use(json());

// POST route for handling form submission
app.post("/api/contact", async (req, res) => {
    try {
        const { service, name, phone, email, message } = req.body;

        // Configure nodemailer to send email
        const transporter = createTransport({
            host: "smtp.example.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "your_email@example.com",
                pass: "your_password",
            },
        });

        // Send email
        await transporter.sendMail({
            from: "your_email@example.com",
            to: "icolabalaba@gmail.com", 
            subject: `New contact request for ${service}`,
            html: `
                <h3>Contact Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

export default app;

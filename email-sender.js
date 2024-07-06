const nodemailer = require("nodemailer");

// Configuration du transporteur SMTP pour Outlook / Microsoft 365
let transporter = nodemailer.createTransport({
  host: "smtp.planet.tn",
  port: 25,
  secure: false, // true pour SSL, false pour STARTTLS
  auth: {
    user: "",
    pass: "",
  },
  tls: {
    // Ne pas vérifier le certificat
    rejectUnauthorized: false,
  },
});

// Exemple d'utilisation pour envoyer un email
let mailOptions = {
  from: "",
  to: "",
  subject: "Sujet de l'email",
  text: "Contenu de l'email",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Erreur lors de l'envoi de l'email :", error.message);
  } else {
    console.log("Email envoyé avec succès :", info.response);
  }
});

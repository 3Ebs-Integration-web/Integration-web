const cors = require('cors'); // Importation du middleware cors
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001; // Changez ceci pour utiliser le port désiré
app.use(express.json()); // Ajoutez cette ligne pour analyser les requêtes JSON

// Configuration du transporteur nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info.hedhli.sara@gmail.com',
    pass: 'pzca keaf bcpb xxpt',
  },
});

app.use(cors()); // Utilisation du middleware cors pour gérer les CORS

// Endpoint pour envoyer un email de confirmation de commande
app.post('/api/sendOrderConfirmationEmail', async (req, res) => {
  const { userEmail, totalQty, totalPrice, address } = req.body;

  const mailOptions = {
    from: 'info.hedhli.sara@gmail.com',
    to: userEmail,
    subject: 'Confirmation de commande',
    html: `
      <p>Merci pour votre commande !</p>
      <p>Quantité totale : ${totalQty}</p>
      <p>Prix total : ${totalPrice} DT</p>
      <p>La livraison sera effectuée dans les 24 heures à l'adresse suivante : ${address}</p>
      <p>Votre commande a été confirmée. Nous la traiterons sous peu.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email de confirmation de commande envoyé avec succès');
    // Si l'envoi est réussi, afficher une alerte puis rediriger vers la page Boutique
    res.status(200).send('Email de confirmation de commande envoyé avec succès');
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de confirmation de commande :", error);
    // Si l'envoi échoue, afficher une alerte
    res.status(500).send("Erreur lors de l'envoi de l'email de confirmation de commande");
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

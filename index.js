const express = require('express');
const path = require('path');
const app = express();

// Definisce la porta su cui il server ascolterà (3000)
const PORT = 3000;

// Usa la cartella 'public' per servire file statici come HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// Definisce una rotta API che restituisce un messaggio in formato JSON
app.get('/api/messaggio', (req, res) => {
  res.json({ messaggio: 'Ciao dal server Express!' });
});

// Avvia il server e stampa un messaggio di conferma nella console
app.listen(PORT, () => {
  console.log(`✅ Server avviato con successo su http://localhost:${PORT}`);
});

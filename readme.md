# 🌐 Esercizio Express + Docker

Questo progetto è un semplice server web basato su **Node.js** e **Express**, che serve una pagina HTML/CSS. Quando premi un bottone nella pagina, viene effettuata una richiesta a un’API e viene visualizzato un messaggio di risposta dal server.

---

## Struttura del progetto

progetto/
├── index.js # Server Express
├── package.json # File di configurazione npm
├── Dockerfile # File per creare l'immagine Docker
├── public/ # Cartella con file statici
│ ├── index.html # Pagina HTML
│ └── style.css # Stili CSS



---

## Avviare il progetto

### Metodo 1: Esecuzione locale

1. Installa le dipendenze:

```bash
npm install




 Metodo 2: Esecuzione con Docker
Costruisci l'immagine Docker:

bash
Copia
Modifica
docker build -t mia-app-express .
Avvia il container:

bash
Copia
Modifica
docker run -p 3000:3000 mia-app-express
Apri il browser su:

arduino
Copia
Modifica
http://localhost:3000

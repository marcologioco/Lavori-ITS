# Usa un'immagine ufficiale di Node.js come base
FROM node:18

# Imposta la directory di lavoro dentro il container
WORKDIR /app

# Copia i file package.json e package-lock.json (se c'è)
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto dell'app nel container
COPY . .

# Espone la porta 3000
EXPOSE 3000

# Comando per avviare il server
CMD [ "node", "index.js" ]

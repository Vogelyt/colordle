
# Colordle

Ein **Farbenraten-Spiel** (ähnlich wie Wordle), bei dem der Spieler die richtige Farbe anhand ihres Namens erraten muss. Das Projekt nutzt **Node.js**, **Express** und eine **SQLite-Datenbank** mit allen CSS/X11-Farbnamen.

---

## Features

* Zufällige Farbwahl aus über 140 CSS-Farben
* Prozentgenaue Übereinstimmung basierend auf RGB
* Alle Farben können per Button ausgewählt werden
* Bisherige Versuche werden farbig angezeigt
* Responsive, modernes Design

---

## Voraussetzungen

* [Node.js](https://nodejs.org/) (Version 18+ empfohlen)
* Git (für Klonen optional)

---

## Installation

1. Projekt klonen oder herunterladen:

```bash
git clone https://github.com/DEIN_GITHUB_USERNAME/colordle.git
cd colordle
```

2. Abhängigkeiten installieren:

```bash
npm install
```

3. SQLite-Datenbank erstellen und Farben importieren:

```bash
npm run setup
```

> Dies erstellt `database/colors.db` mit allen CSS-Farben.

---

## Projekt starten

```bash
npm start
```

* Der Server läuft dann unter [http://localhost:3000](http://localhost:3000)
* Öffne die URL im Browser, um das Spiel zu spielen

---

## Nutzung

* Gib einen Farbname ins Eingabefeld ein und klicke **Raten**
* Klicke **Alle Farben anzeigen**, um die Buttons mit allen Farben zu sehen
* Die bisherigen Versuche werden farbig angezeigt, Grün = richtig

---

## Projektstruktur

```
colordle/
├── database/
│   └── colors.db
├── public/
│   └── index.html
├── setup-db.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## .gitignore empfohlen

```
node_modules/
.DS_Store
.env
```
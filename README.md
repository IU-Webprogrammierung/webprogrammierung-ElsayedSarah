# Digital Media Library

Digital Media Library ist ein persönlicher Webauftritt in Form einer digitalen Mediathek.  
Die Website präsentiert eine Auswahl meiner Lieblingsbücher und Lieblingsvideospiele in einem bibliotheksinspirierten Interface mit persönlichen Bewertungen, Kommentaren und Empfehlungen.

Die Website wird vollständig englischsprachig umgesetzt.


> **Hinweis:** Die Website befindet sich derzeit noch in Entwicklung. Einzelne Funktionen sowie diese README können sich bis zur finalen Abgabe noch ändern.

---

## Inhaltsverzeichnis 
- [Seitenübersicht](#seitenübersicht)
- [Besondere Funktionen](#besondere-funktionen)
- [Größere Änderungen](#größere-änderungen-während-der-entwicklung)
- [Accessibility](#accessibility)

---

## Seitenübersicht

- **Home** – Persönliche „Library Card“ als Einstieg in die Website
- **Books** – Interaktives Shelf mit Romanen und Manga
- **Games** – Interaktives Shelf mit Videospielen
- **Quiz** – Genrebasiertes Quiz mit personalisierten Empfehlungen

- **Imprint** – Rechtliche Informationen
- **Credits** – Quellenangaben für Medien, Cover und weitere verwendete Inhalte

- **404** – Individuell gestaltete Fehlerseite

---

## Besondere Funktionen

Die folgenden Funktionen gehen über die grundlegenden Projektanforderungen hinaus und stellen die wesentlichen Eigenleistungen dieses Projekts dar.

### Individuelle UI-Komponenten

- Bibliotheksausweis („Library Card“) als responsive HTML/CSS-Komponente
- Ticket-basierte Detailansicht mit geräteabhängigem Layout und dynamisch geladenen Medieninformationen

### Interaktives Shelf Interface

- Horizontales Shelf mit Scroll-Snapping
- Drag-to-Scroll auf Desktop-Geräten (Maussteuerung)
- Tastatursteuerung der Shelf-Items (Enter/Leertaste)
- Aktive Hervorhebung des ausgewählten Shelf-Items
- Automatische Zentrierung des ausgewählten Shelf-Items
- Responsive Filtersystem mit „All“-Filter und einklappbarem Filter-Menü auf mobilen Geräten

### Dynamische Detailansicht

- Detailansicht wird erst nach Auswahl eines Shelf-Items eingeblendet
- Lange Kommentare bleiben innerhalb des Tickets scrollbar, ohne das Layout zu vergrößern
- Automatische Navigation zur Detailansicht via Smooth Scroll (Desktop/Tablet) sowie „More Details“-Navigation auf Smartphones

### Recommendation Quiz

- Genrebasiertes Empfehlungssystem auf Basis strukturierter Medien-Tags
- Unterschiedliche Quizabläufe für Bücher und Spiele
- Dynamisch generierte Ergebnisansicht
- „Learn More“-Links übernehmen die Medien-ID per URL-Parameter und öffnen das empfohlene Medium automatisch in der Detailansicht

---

## Größere Änderungen während der Entwicklung
### Refactoring der Medienverwaltung

Die ursprüngliche Umsetzung bestand aus zwei nahezu identischen Dateien (`books.js` und `games.js`) mit doppelter Daten- und Shelf-Logik.

Im Verlauf der Entwicklung wurde die Struktur vollständig überarbeitet:
- Alle Mediendaten wurden in einer gemeinsamen `data.js` zentralisiert.
- Die doppelte Shelf-Logik wurde in eine wiederverwendbare `mediaShelf.js` ausgelagert.
- Dadurch verwenden Books und Games dieselbe JavaScript-Komponente und unterscheiden sich nur noch durch ihre Datenbasis.

Dieses Refactoring reduzierte redundanten Code erheblich und verbessert die Wartbarkeit sowie die Erweiterbarkeit der Anwendung.

---

## Accessibility

- Semantische HTML-Struktur
- Tastatursteuerung des gesamten Recommendation Quiz
- Tastatursteuerung der Shelf-Items
- ARIA-Labels für interaktive Shelf-Elemente
- ARIA-live für dynamisch generierte Quiz-Inhalte
- Sichtbare Fokuszustände
- Prüfung mit WAVE und Lighthouse
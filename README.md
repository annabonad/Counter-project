# Counter Project

Una semplice applicazione web per incrementare e decrementare un contatore. Il progetto è sviluppato esclusivamente con HTML, CSS e JavaScript puro, senza framework, librerie esterne o strumenti di build.

## Indice

- [Panoramica](#panoramica)
- [Funzionalità](#funzionalità)
- [Tecnologie](#tecnologie)
- [Struttura del progetto](#struttura-del-progetto)
- [Apertura diretta] (#apertura-diretta)
- [Funzionamento](#funzionamento)
- [Accessibilità e responsive design](#accessibilità-e-responsive-design)

## Panoramica

Al caricamento della pagina, l'interfaccia viene generata dinamicamente tramite JavaScript e mostra un valore iniziale pari a `0`.

L'utente può modificare il valore usando i pulsanti `+` e `−` oppure le scorciatoie da tastiera. L'interfaccia adotta un design minimal e contemporaneo, con microinterazioni pensate per rendere più chiaro il feedback a ogni modifica.

## Funzionalità

- Visualizzazione del counter con valore iniziale `0`.
- Incremento del valore tramite il pulsante `+`.
- Decremento del valore tramite il pulsante `−`.
- Supporto ai tasti `+` per incrementare.
- Supporto ai tasti `-` per decrementare.
- Possibilità di raggiungere valori negativi.
- Animazione del valore dopo ogni aggiornamento.
- Cambio colore del valore quando diventa negativo.
- Stati hover, active e focus-visible sui pulsanti.
- Animazione di ingresso dell'interfaccia.
- Riduzione automatica delle animazioni quando l'utente ha attivato la preferenza di sistema per ridurre il movimento.
- Layout responsive per dispositivi desktop e mobile.

## Tecnologie

- **HTML5** per la struttura della pagina.
- **CSS3** per layout, responsive design, colori, animazioni e microinterazioni.
- **JavaScript ES6+** per la generazione dinamica dell'interfaccia e la gestione degli eventi.
- Nessuna dipendenza esterna.


## Apertura diretta


## Struttura del progetto

Counter-project/
├── index.html   # Pagina HTML e punto di ingresso dell'applicazione
├── script.js    # Generazione del DOM e logica del counter
├── style.css    # Stili, layout responsive e microinterazioni
└── README.md    # Documentazione del progetto


## Funzionamento

### Generazione dell'interfaccia

Il file `index.html` contiene soltanto il contenitore principale `#app`. Gli elementi visibili, tra cui titolo, valore, pulsanti e messaggio informativo, vengono creati in `script.js` mediante `document.createElement()` e aggiunti al DOM con `append()`.

### Aggiornamento del valore

La variabile `counterValue` conserva il valore corrente. La funzione `updateCounter(change)`:

1. aggiorna il valore numerico;
2. modifica il testo dell'elemento `output`;
3. riavvia l'animazione del valore;
4. applica o rimuove lo stato visivo per i valori negativi.

I pulsanti utilizzano `addEventListener('click', ...)`, mentre la tastiera viene gestita tramite un listener globale sull'evento `keydown`.

## Accessibilità e responsive design

- I pulsanti hanno etichette accessibili tramite `aria-label`.
- Il valore è esposto tramite un elemento semantico `output`.
- Il contenitore principale usa `aria-live="polite"` per comunicare gli aggiornamenti ai lettori di schermo senza interrompere la navigazione.
- I pulsanti mantengono un indicatore visibile quando ricevono il focus da tastiera.
- Il layout si adatta alle dimensioni dello schermo tramite media query CSS.
- La regola `prefers-reduced-motion` limita le animazioni per gli utenti che lo richiedono nelle impostazioni del sistema operativo.



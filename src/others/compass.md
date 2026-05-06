

Nav tree di App

- inserisco una select che con movie.genre collegata a event onCHange (con cambiamento di stato e useEffect)
    > lévent onChange dovra' selezionare solo i movies il cui genre.value === a quello della select
    > l'array delle dipendenze dovra'contenere trigger.value, cosi da aggiornare il render della pagin al cambiamento del valore, altrimenti non si vedra'.
- inserisco ul da popolare con la map
    > con la map, creo per ogni film un li (questo e'statico).

Prep: 

- aggiungere file js con array
- add: id

nb: importare useState e useEffect
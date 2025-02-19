import { useState } from 'react'

// array di dati iniziali
const initialDisneyData = [
    {
        "id": 1,
        "titolo": "Il Re Leone",
        "autore": "Disney",
        "contenuto": "Un giovane leone, Simba, affronta il suo destino come re della Savana.",
        "categoria": "Animazione"
    },
    {
        "id": 2,
        "titolo": "La Bella e la Bestia",
        "autore": "Disney",
        "contenuto": "Belle scopre la vera bellezza dietro l'aspetto della Bestia.",
        "categoria": "Animazione"
    },
    {
        "id": 3,
        "titolo": "Aladdin",
        "autore": "Disney",
        "contenuto": "Un giovane di strada trova una lampada magica con un genio in grado di esaudire i desideri.",
        "categoria": "Animazione"
    },
    {
        "id": 4,
        "titolo": "Biancaneve e i sette nani",
        "autore": "Disney",
        "contenuto": "Una principessa fugge dalla sua matrigna malvagia e trova rifugio con sette nani.",
        "categoria": "Animazione"
    },
    {
        "id": 5,
        "titolo": "Cenerentola",
        "autore": "Disney",
        "contenuto": "Una giovane ragazza maltrattata trova l'amore con l'aiuto della magia.",
        "categoria": "Animazione"
    },
    {
        "id": 6,
        "titolo": "La Sirenetta",
        "autore": "Disney",
        "contenuto": "Una sirena sogna di vivere sulla terra e si innamora di un principe umano.",
        "categoria": "Animazione"
    },
    {
        "id": 7,
        "titolo": "Hercules",
        "autore": "Disney",
        "contenuto": "Il giovane figlio di Zeus deve dimostrare il suo valore per diventare un vero eroe.",
        "categoria": "Animazione"
    },
    {
        "id": 8,
        "titolo": "Mulan",
        "autore": "Disney",
        "contenuto": "Una giovane donna si traveste da uomo per combattere al posto di suo padre.",
        "categoria": "Animazione"
    },
    {
        "id": 9,
        "titolo": "Frozen - Il regno di ghiaccio",
        "autore": "Disney",
        "contenuto": "Due sorelle affrontano il potere del ghiaccio e il vero significato dell'amore.",
        "categoria": "Animazione"
    },
    {
        "id": 10,
        "titolo": "Rapunzel - L'intreccio della torre",
        "autore": "Disney",
        "contenuto": "Una giovane con capelli magici scopre il mondo oltre la sua torre.",
        "categoria": "Animazione"
    }
];

// mi creo una variabile di stato(oggetto) in cui si andranno a mappare le proprietà selezionate

const initialFormData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: "",

};

const DisneyForm = () => {

    // utilizzo dello useState per la gestione dei dati ( l'array con gli oggetti)
    const [dvdDisney, setdvdDisney] = useState(initialDisneyData);


    // utilizzo lo useState per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData);

    return (
        <>
            <h1>Blog Dvd Disney</h1>

            {/* sezione in cui si gestirà il form delle informazioni */}
            <form id='form'>
                {/* input per inserimento titolo */}
                <input
                    type="text"
                    titolo="titolo"
                    // onChange={handleFormData}
                    value={formData.titolo}
                    placeholder='Nome Dvd'
                />

                {/* input per inserimento autore */}
                <input
                    type="text"
                    titolo="autore"
                    // onChange={handleFormData}
                    value={formData.autore}
                    placeholder='Nome autore'
                />

                {/* input per inserimento contenuto */}
                <textarea
                    titolo="contenuto"
                    // onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder='Descrizione dvd'
                />

                {/* input per inserimento categoria */}
                <input
                    type="text"
                    titolo="categoria"
                    // onChange={handleFormData}
                    value={formData.categoria}
                    placeholder='Categoria'
                />


            </form>






            {/* itero sull'ray per estrapolare le proprietà che mi servono */}
            {dvdDisney.map((dvd) => (
                <div className='container' key={dvd.id}>
                    <h2>{dvd.titolo}</h2>
                    <span>{dvd.autore}</span>
                    <p>{dvd.contenuto}</p>
                    <span>{dvd.categoria}</span>
                </div>
            ))
            }
        </>



    )
}



export default DisneyForm
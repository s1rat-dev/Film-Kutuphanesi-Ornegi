const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const filmBody = document.getElementsByClassName('card-body')[1];

// UI Başlatma

const ui = new UI();

// Storage Başlatma

const storage = new Storage();


// ISTERSEK STORAGE VE UI FONKSIYONLARINI STATIC YAZIP, DIREKT UZERINDEN DE KULLANABILIRDIK..


// Tüm eventleri yükleme

eventListeners();

function eventListeners()
{
    form.addEventListener('submit',addFilm);
    document.addEventListener('DOMContentLoaded',function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    filmBody.addEventListener('click',deleteFilm);
}


function addFilm(e)
{
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === '' || director === '' || url === '')
    {
        ui.displayMessage('Tum alanlari doldurun.','danger');
        //hata
    }
    else
    {
        let films = storage.getFilmsFromStorage();
        let check = ui.checkFilm(title,films);
        if(check)
        {
            ui.displayMessage('Eklemeye çalıştığınız film zaten mevcut.','info');
        }
        else
        {
            const newFilm = new Film(title,director,url)
            ui.addFilmToUI(newFilm);
            ui.clearInputs(titleElement,directorElement,urlElement)
            ui.displayMessage('Film basariyla eklendi.','success')
            storage.setFilmToStorage(newFilm);
        }

    }

    e.preventDefault();
}

function deleteFilm(e)
{
    if(e.target.id === 'delete-film')
    {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessage('Silme işlemi başarılı.','success');
    }
    else if(e.target.id === 'clear-films')
    {
        ui.deleteAllFilmsFromUI();
        storage.deleteAllFilmsFromStorage();
        ui.displayMessage('Tüm filmler başarıyla kaldırıldı.','success');
    }
}
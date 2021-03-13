// LOCAL STORAGE JS

class Storage
{
    setFilmToStorage(newFilm)
    {
    
        let films = this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem('films',JSON.stringify(films));
    
    }
    
    
    getFilmsFromStorage()
    {
    
        let films;
    
        if(localStorage.getItem('films') === null)
        {
            films = [];
        }
        else
        {
            films = JSON.parse(localStorage.getItem('films'));
        }
    
        return films;
    
    }
    
    deleteFilmFromStorage(filmName)
    {
    
        let films = this.getFilmsFromStorage();
        films.forEach(function(film,index){
            if(film.title === filmName)
            {
                films.splice(index,1);
                // index'ten başla ve 1 tane sil(kendisini)
                // splice kullanımında index,2 yapılsa idi indexi ve o indexten geleni de silecekti.
                // eğer splice(index,1,films[2]) yapılsa idi silinen index yerine films[2] yazılacaktı.
            }
        });
    
        localStorage.setItem('films',JSON.stringify(films));
    
    }
    
    
    deleteAllFilmsFromStorage()
    {
    
        localStorage.removeItem('films');
    
    }
}



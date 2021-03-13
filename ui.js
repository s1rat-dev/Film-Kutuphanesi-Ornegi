// JS FOR UI 

class UI
{
    addFilmToUI(newFilm)
    {
        console.log(newFilm)
        const filmList = document.getElementById('films')
    
        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;
    
    }
    
    clearInputs(e1,e2,e3)
    {
        e1.value = '';
        e2.value = '';
        e3.value = '';
    }
    
    checkFilm(filmName,allFilms)
    {  
        let check;
        allFilms.forEach(function(film){
           
            if(filmName === film.title)
                check = true;
                
        });
        if(check)
            return true;
        return false;
    }
    
    displayMessage(message,type)
    {
    
        cardBody = document.getElementsByClassName('card-body')[0];
        // Alert oluşturma
    
        const div = document.createElement('div');
        div.className = `alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);
    
        setTimeout(function(){
            div.remove();
        },1500);
    
    }
    
    
    loadAllFilms(allFilms)
    {
    
        const filmList = document.getElementById('films');
    
        allFilms.forEach(function(film){
            filmList.innerHTML += `
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `; 
        });
    
    }
    
    
    deleteFilmFromUI(element)
    {
    
        element.parentElement.parentElement.remove();
    
    }
    
    deleteAllFilmsFromUI()
    {
        const filmList = document.getElementById('films');
        
        // filmList.innerHTML = '';
        // ya da,
    
        while(filmList.firstChild !== null)
        {
            filmList.firstChild.remove();
        }
    }  
}




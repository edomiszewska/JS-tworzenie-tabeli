const przycisk=document.querySelector('#button');
przycisk.addEventListener(`click`,(evt)=>{
    const tablica=document.querySelector('#table');
    users.forEach(el => {
        tablica.innerHTML+=` <tr class="table-primary">
        <td class="table-primary">${el[0]} </td>
        <td class="table-primary">${el[1]}  </td>
        <td class="table-primary">${el[2]}  </td>
        <td class="table-primary">${el[3]}  </td>
        <td class="table-primary">${el[4]}  </td>
        <td class="table-primary">${el[5]}  </td>
    </tr>`
    });
   
    if (przycisk.innerHTML === "Generuj tabele") {
        przycisk.innerHTML = "Usuń tabelę";
    } else {
        przycisk.innerHTML = "Generuj tabele";
        tablica.innerHTML=" "
    }
    przycisk.classList.toggle(`btn-danger`);


})

document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-3 mt-5 mb-1'

            col.innerHTML = 
            `
                <div class="card h-100 shadow-sm">
                    <img src="${p.Photo}" alt="${p.firstName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName}</h5>
                        <div class='text-dark badge badge-position badge-pos-${p.Nationality}'>Nationality: ${p.Nationality}</div>
                        <div class='text-dark badge badge-position badge-pos-${p.Style}'>Fighting Style: ${p.Style}</div>
                        <p class="small text-muted mb-0">Game Appearances: ${p.Appearance}</p>
                    </div>
                </div>
            `
            grid.appendChild(col)
        })
    }

































render(players)
})
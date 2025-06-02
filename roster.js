document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')
    const modalBody = document.getElementById('modalBody')

    const render = list => {
        grid.innerHTML = ''
        list.forEach((p, index) => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-3 mt-5 mb-1'

            col.innerHTML =
                `
                <div class="card h-100 shadow-sm">
                    <img src="${p.Photo}" alt="${p.firstName}" class="card-img-top border border-2 border-black image">
                    <div class="card-body border border-2 border-black text-center">
                        <h5 class="card-title mb-1">${p.firstName}</h5>
                        <div class='text-dark badge badge-position badge-pos-${p.Nationality}'>Nationality: ${p.Nationality}</div>
                        <div style='white-space: normal;' class='text-dark badge badge-position badge-pos-${p.Style}'>Fighting Style: ${p.Style}</div>
                        <p class="small text-muted mb-0">Game Appearances: ${p.Appearance}</p>
                        <button class="btn btn-sm btn-secondary show-info-btn mt-2 border border-2 border-black" data-index="${index}" data-bs-toggle="modal" data-bs-target="#exampleModal">Archetype</button>
                    </div>
                </div>
            `
            grid.appendChild(col)
        })



        document.querySelectorAll('.show-info-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index')
                const player = players[index]
                modalBody.innerHTML = `<p>${player.FF}</p>`
            })
        })
    }

    render(players)
})

function renderRoot() {
  document.querySelector('#app').innerHTML = `
    <h1> Seatfinder </h1>
    <select>
      <option value=""> Select A Dining Hall </option>
      <option value="worcester"> Worcester </option>
      <option value="franklin"> Franklin </option>
      <option value="hampshire"> Hampshire </option>
      <option value="berkshire"> Berkshire </option>
    </select>

    <section>
      <h2> Usage </h2>
      <ol>
        <li> Select A dining hall </li>
        <li> Click on the map based on where you are seated </li>
        <li> Copy the Link </li>
        <li> Share it with your friends</li>
      </ol>
    </section>

    <section>
      <h2> Contact </h2>
      <h3> Email </h3>
      <a href="mailto:jsimmonds@umass.edu">jsimmonds@umass.edu</a>
      <h3> Source Code </h3>
      <a href="https://github.com/khazixi/Seatfinder"> The Source Code </a>
    </section>
  `
  const selectQuery = document.querySelector('select');
  selectQuery.addEventListener('change', onSelectChange);
}

/** @param {string} name */
function renderEditor(name) {
  document.querySelector('#app').innerHTML = `
      <h1> ${name[0].toUpperCase() + name.slice(1)} </h1>
      <button> Back </button>
      <img src="/${name}.svg">
    `

  const img = document.querySelector('img')

  img.addEventListener('click', e => onImageSelection(e, name))

  const button = document.querySelector('button')
  button.addEventListener('click', () => {
    renderRoot()
    history.pushState({}, "", "/")
  })
}

/** @param {Event} e */
function onSelectChange(e) {
  const hall = e.target.value
  history.pushState({ name: e.target.value }, "", `/${hall}`)

  switch (hall) {
    case "worcester":
    case "franklin":
    case "hampshire":
    case "berkshire":
      renderEditor(hall)
      break
    default:
      alert(hall)
  }
}

/**
  * @param {number} x
  * @param {number} y
  */
function addMarker(x, y) {
  const p = document.createElement('p')
  // p.classList.add('marker')
  // p.style.position = 'absolute'
  // p.style.background = 'blue'
  // p.style.height = '50px'
  // p.style.width = '50px'
  // p.style.borderRadius = '100%'
  p.style.left = `${x - 25}px`
  p.style.top = `${y - 25}px`
  p.classList.add('marker')

  document.querySelector('p')?.remove()
  document.querySelector('#app').insertAdjacentElement('beforeend', p)
}

/** 
  * @param {MouseEvent} e 
  * @param {string} hall
  */
function onImageSelection(e, hall) {
  const { pageX: x, pageY: y } = e

  const url = new URL(window.location)
  url.searchParams.set('x', x.toString())
  url.searchParams.set('y', y.toString())

  addMarker(x, y)
  history.pushState({ name: hall }, "", url)
}

addEventListener('popstate', (e) => {
  const { pathname, search } = new URL(window.location.href)

  switch (pathname) {
    case "/":
      renderRoot()
      break
    case "/worcester":
    case "/franklin":
    case "/hampshire":
    case "/berkshire":
      renderEditor(e.state.name)
      if (search !== '') {
        const param = new URLSearchParams(search)
        const x = parseInt(param.get('x'))
        const y = parseInt(param.get('y'))
        addMarker(x, y)
      }
  }
})

function route() {
  const url = new URL(window.location)
  if (url.pathname === '/') {
    renderRoot()
    history.replaceState({ name: 'base' }, "", "/");
  } else {
    const hall = url.pathname.slice(1)
    const x = parseInt(url.searchParams.get('x'))
    const y = parseInt(url.searchParams.get('y'))
    renderEditor(hall)
    addMarker(x, y)
  }
}

route()

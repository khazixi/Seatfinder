async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      // WARNING: This may not pick up the service worker, so this will need to be adjusted later
      const registration = await navigator.serviceWorker.register('./sw.js', {
        scope: '/'
      })

      // NOTE: Add events when necessary based on the service worker registration

    } catch (error) {
      console.log(`Registration failed with error: ${error}`)
    }
  }
}

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
    <div id="content"></div>
  `
  const selectQuery = document.querySelector('select');
  selectQuery.addEventListener('change', onSelectChange);
}

/** @param {string} name */
function renderEditor(name) {
  document.querySelector('#app').innerHTML = `
      <h1> ${name} </h1>
      <h2> Map goes here </h2>
      <img src="/${name}.svg">
    `

  const img = document.querySelector('img')

  img.addEventListener('click', e => onImageSelection(e, name))
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
  p.style.position = 'absolute'
  p.style.background = 'blue'
  p.style.height = '50px'
  p.style.width = '50px'
  p.style.left = `${x - 25}px`
  p.style.top = `${y - 25}px`
  p.style.borderRadius = '100%'

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

registerServiceWorker()
renderRoot()
history.replaceState({ name: 'base' }, "", "/");

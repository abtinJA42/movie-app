const global = {
    currentPage : window.location.pathname
}

// highligh active link
function highlighActiveLink() {
  const links = document.querySelectorAll('.nav-link')
  links.forEach((link) => {
    if(link.getAttribute('href')===global.currentPage){
      link.classList.add('active')
    }
  })
}

// init app
function init() {
    switch(global.currentPage){
      case  '/' :
        case '/index.html':
        console.log('Home');
        break
      case '/shows.html' :
        console.log('show');
        break
      case '/movie-detailes.html':  
      console.log('movie-detailes');
      break
      case '/tv-detailes.html':
        console.log('tv detailes');
        break
        case '/search.html':
          console.log('search');
          break

    }
    highlighActiveLink()
}


document.addEventListener('DOMContentLoaded',init)

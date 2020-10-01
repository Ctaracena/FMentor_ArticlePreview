const shareIcon = document.querySelector('.share-icon-container')
const icon = document.querySelector('.share-icon')
const shareContainer = document.querySelector('.share-container')

let show = false

console.log(show)
shareIcon.addEventListener('click', () => {
  if (show == false) {
    shareContainer.style.display = 'flex'
    shareIcon.style.backgroundColor = 'hsl(214, 17%, 51%)'
    icon.src = '../images/white-icon-share.svg'
    show = true
    console.log(show)
  } else {
    shareContainer.style.display = 'none'
    shareIcon.style.backgroundColor = 'hsl(210, 46%, 95%)'
    icon.src = '../images/icon-share.svg'
    show = false
    console.log(show)
  }
} )

function hide() {
  shareContainer.style.display = 'none'
  shareIcon.style.backgroundColor = 'hsl(210, 46%, 95%)'
  icon.src = '../images/icon-share.svg'
  show = false
}

// mobile

const shareIconMobile = document.querySelector('.share-icon-container-mobile')
const iconMobile = document.querySelector('.share-icon-mobile')
const shareContainerMobile = document.querySelector('.share-container-mobile')
const closeShareContainerMobile = document.querySelector('.close-share-container-mobile')

console.log(show)
shareIconMobile.addEventListener('click', () => {
    shareContainerMobile.style.display = 'flex'
    shareIconMobile.style.backgroundColor = 'hsl(214, 17%, 51%)'
    iconMobile.src = '../images/white-icon-share.svg'
})

function hideMobile() {
  shareContainerMobile.style.display = 'none'
}

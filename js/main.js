function initMap() {
  const pos = { lat: 37.782234, lng: -122.391245 }
  const map = new google.maps.Map(document.getElementById("map"), {
    center: pos,
    zoom: 18,
    scrollwheel: false
  });
  new google.maps.Marker({
    position: pos,
    map: map,
    title: 'GitHub'
  });
}

const toggleEl = document.getElementById('toggle-btn')
const toggles = document.querySelectorAll('.toggle')

let toggleClickTF = false
toggleEl.addEventListener('click', function () {

  // WAY - 1
  // if(!toggleClickTF) {
  //   for (let index = 0; index < toggles.length; index++) {
  //     toggles[index].classList.add('on')
  //   }
  //   toggleClickTF = true
  // }
  // else {
  //   for (let index = 0; index < toggles.length; index++) {
  //     toggles[index].classList.remove('on')
  //   }
  //   toggleClickTF = false

  // WAY -2
  [].forEach.call(toggles, function(toggle) {
    toggle.classList.toggle('on')
  })
  
})

window.addEventListener('resize', function () {
  if(window.innerWidth > 1024) {
    [].forEach.call(toggles, function(toggle) {
      toggle.classList.remove('on')
    })
  }
})
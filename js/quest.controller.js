'use strict'

// NOTE: This is a global used only in the controller
var gLastRes = null

$(document).ready(init)
$('.btn-start').click(onStartGuessing)
$('.btn-yes').click({ ans: 'yes' }, onUserResponse)
$('.btn-no').click({ ans: 'no' }, onUserResponse)
$('.btn-add-guess').click(onAddGuess)

function init() {
  console.log('Started...')
  $('.btn-start').on('click', onStartGuessing)
  createQuestsTree()
  $('.btn-add-guess').on('submit', onAddGuess)
}

function onStartGuessing() {
  // TODO: hide the game-start section
  console.log('works')
  $('.quest').css('display', 'block')
  // $('.btn-start').css('display', 'none')
  $('.btn-start').hide()
  renderQuest()
  // TODO: show the quest section
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  $('.quest h2').text(getCurrQuest().txt)
  // its text by the currQuest text
}

function onUserResponse(ev) {
  console.log('ev', ev)
  var res = ev.data.ans
  // If this node has no children
  console.log(isChildless(getCurrQuest()))
  console.log(res)
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!')
      // TODO: improve UX
    } else {
      alert('I dont know...teach me!')
      // TODO: hide and show new-quest section
      $('.new-quest').css('display', 'block')
      $('.quest').css('display', 'none')
      $('.btn-start').css('display', 'none')
    }
  } else {
    // TODO: update the lastRes global var

    moveToNextQuest(res)
    renderQuest()
  }
}

function onAddGuess(ev) {
  ev.preventDefault()
  var newGuess = $('#newGuess').val()
  var newQuest = $('#newQuest').val()
  console.log('newGuess:', newGuess)
  console.log('newQuest:', newQuest)
  // TODO: Get the inputs' values
  // TODO: Call the service addGuess
  addGuess(newQuest, newGuess, gLastRes)
  onRestartGame()
}

function onRestartGame() {
  $('.new-quest').hide()
  $('.game-start').show()
  gLastRes = null
}

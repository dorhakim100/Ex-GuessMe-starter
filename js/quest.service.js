'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null

function createQuestsTree() {
  gQuestsTree = createQuest('Male?')
  gQuestsTree.yes = createQuest('Gandhi')
  gQuestsTree.no = createQuest('Rita')
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  // TODO: update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest
  if (res === 'yes') {
    gCurrQuest = gQuestsTree.yes
  } else {
    gCurrQuest = gQuestsTree.no
  }
  // gCurrQuest = getCurrQuest()
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // TODO: Create and Connect the 2 Quests to the quetsions tree
  gQuestsTree[lastRes] = createQuest(newQuestTxt)
  gQuestsTree[lastRes].yes = newGuessTxt
  // saveToStorage(key, value)
  localStorage.setItem('questsTree', gQuestsTree)
}

function getCurrQuest() {
  return gCurrQuest
}

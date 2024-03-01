'use strict'

function saveToStorage(key, value) {
  const valStr = JSON.stringify(value)
  localStorage.setItem(key, value)
}

function loadFromStorage(key) {
  const valStr = localStorage.getItem(key)
  return JSON.parse(valStr)
}

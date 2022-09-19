function validate(htmlCollection) {
  const inputElement = htmlCollection.children[1]
  if (inputElement.classList.contains('validationFailed')) {
    toggleErrorTooltip(htmlCollection, '')
  }
  if (inputElement.name === 'phone' || inputElement.name === 'name') {
    if (!inputElement.value) {
      toggleErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Обязательное поле'
      )
      return false
    }
  }
  if (inputElement.name === 'mail' && inputElement.value) {
    if (!isEmail(inputElement.value)) {
      toggleErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Некорректная почта'
      )
      return false
    }
  }
  if (inputElement.name === 'phone') {
    if (!isPhoneNumber(inputElement.value)) {
      toggleErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Некорректный номер'
      )
      return false
    }
  }
  return true
}

export default function () {
  const formBody = document.querySelector('.formBlockBody')
  const inputCollection = formBody.firstElementChild.children

  let validationArray = []
  for (let i = 0; i < inputCollection.length; i++) {
    validationArray[i] = validate(inputCollection[i])
  }

  return validationArray.every((validation) => validation === true)
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

function isPhoneNumber(phoneNumber) {
  return /^((8|\+374|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(
    phoneNumber
  )
}

function toggleErrorTooltip(htmlCollection, message = 'произошла ошибка') {
  const inputErrorTooltip = htmlCollection.children[0]
  const inputElement = htmlCollection.children[1]

  inputErrorTooltip.innerHTML = message
  inputElement.classList.toggle('validationFailed')
}

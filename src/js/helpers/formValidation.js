function validate(htmlCollection) {
  const inputElement = htmlCollection.children[1]
  console.log(typeof inputElement.value)
  if (inputElement.classList.contains('validationFailed')) {
    setErrorTooltip(htmlCollection, '')
  }
  if (inputElement.classList.contains('validationSuccess')) {
    setSuccessTooltip(htmlCollection)
  }
  if (inputElement.name === 'customer_phone') {
    if (!inputElement.value) {
      setErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Обязательное поле'
      )
      return false
    }
    if (!isPhoneNumber(inputElement.value)) {
      setErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Некорректный номер'
      )
      return false
    }
    setSuccessTooltip(htmlCollection)
  }
  if (inputElement.name === 'customer_name') {
    if (!inputElement.value) {
      setErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Обязательное поле'
      )
      return false
    }
    setSuccessTooltip(htmlCollection)
  }
  if (inputElement.name === 'customer_email' && inputElement.value) {
    if (!isEmail(inputElement.value)) {
      setErrorTooltip(
        htmlCollection,
        '<i class="formErrorIcon fas fa-exclamation-triangle"></i> Некорректная почта'
      )
      return false
    }
    setSuccessTooltip(htmlCollection)
  }
  return true
}

export default function (htmlCollection) {
  const inputCollection = htmlCollection.firstElementChild.children
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

function setErrorTooltip(htmlCollection, message = 'произошла ошибка') {
  const [inputTooltip, inputElement] = htmlCollection.children

  inputTooltip.innerHTML = message
  inputElement.classList.toggle('validationFailed')
}
function setSuccessTooltip(htmlCollection) {
  const [inputTooltip, inputElement] = htmlCollection.children

  inputTooltip.innerHTML = ''
  inputElement.classList.toggle('validationSuccess')
}

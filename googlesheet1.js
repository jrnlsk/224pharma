const scriptURL = 'https://script.google.com/macros/s/AKfycbwoMrjrpnDV4kxY3hU39tFKAWIcMZPDYU99uxpAjNowojZuaWr1vc78Lh27adh1rjoiJg/exec'

const form = document.forms['google-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})


.then(response => alert("Thank you! your form is submitted successfully." ))

 .then(() => { window.location.reload(); })

 .catch(error => console.error('Error!', error.message))
})

const buttnos = document.querySelectorAll(".pet-btn")
const literInpt = document.querySelector('#inptLiter');
const amountInpt = document.querySelector('#inptAmount');
const payBtns = document.querySelectorAll('.btnpaylod');
const cashInfo = document.querySelector('.reportbtn');

let type = ''
let price = 1
let typePayment = ''

buttnos.forEach((btns)=>{
    btns.addEventListener('click', ()=>{
       literInpt.value = '' 
       amountInpt.value = '' 

       buttnos.forEach((item)=>{
        item.classList.remove('active')
    })

       type = btns.dataset.type
       price = +btns.value
       btns.classList.add('active')
    })
})

payBtns.forEach((paylod)=>{
    paylod.addEventListener('click', ()=>{
        payBtns.forEach((item)=>{
            item.classList.remove('active')
        })

        typePayment = paylod.dataset.payment
        paylod.classList.add('active');
    })

})


cashInfo.addEventListener('click', ()=>{
    const litr = +literInpt.value // 
    const amount =+amountInpt.value
    const date = new Date().toLocaleDateString() // сегодняшняя дата 
    
    const Message = `
    type: ${type}- ${price} azn,
    total: ${litr.toFixed(2)} liters,
    amount: ${amount.toFixed(2)} azn,
    payment: ${typePayment},
    date: ${date}
    
    `
    alert(Message)
    
})

amountInpt.addEventListener('input', ()=>{
    let amount = +inptAmount.value
    literInpt.value = amount / price

})
literInpt.addEventListener('input', ()=>{
    let liter = +inptLiter.value
    inptAmount.value = liter * price
})
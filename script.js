const checkBox = document.querySelectorAll('.checkbox')
    function clickLabel(teste){
        const label = teste.target
        const id = label.id
        console.log(label)
        if(id === 'toggle2' && label.checked) {
            checkBox.forEach(check => {
                if (check.id !== 'toggle2') {
                    check.checked = false
                }
            })
        } else if (id ==='toggle' && label.checked) {
            checkBox.forEach(check => {
                if(check.id == 'toggle2'){
                    check.checked = false
                }
            })
        } else if (id === 'toggle3' && label.checked){
            checkBox.forEach(check => {
                if(check.id == 'toggle2'){
                    check.checked = false
                }
            })
        }
    }
    
checkBox.forEach(check =>{
    check.addEventListener('click',clickLabel)
})
window.onload = function () {
    let input = document.getElementById('noNumber')
    input.onkeydown = (e) => {
        let words = parseFloat(e.key)
        if (isFinite(words)) {
            return false;
        }
    }

    let punctuation = document.getElementById('noPunctuation')
    punctuation.onkeydown = (e) => {
        let mark = parseFloat(e.key)
        if (e.key === ",") {
            return false;
        }
        if (e.key === ".") {
            return false;
        }
    }


    let mail = document.getElementById('mail');
    let username = document.getElementById('noPunctuation');
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPass');
    let check = document.getElementById('checkBox');
    let modal = document.getElementById('modal');
    let haveAcc = document.getElementById('haveAcc');
    let btn1 = document.getElementsByClassName('modal-btn1')[0]
    let btn2 = document.getElementsByClassName('modal-btn2')[0]
    document.getElementById('create-order').onclick = function () {
        if (!input.value) {
            alert('Введите ваше имя');
            return;
        }
        if (!username.value) {
            alert('Введите ваш никнейм');
            return;
        }
        if (!mail.value) {
            alert('Введите вашу почту');
            return;
        }
        if (!password.value) {
            alert('Введите ваш пароль');
            return;
        }
        if (!repeatPassword.value) {
            alert('Введите повторно ваш пароль');
            return;
        }
        if (password.value.length < 8) {
            alert('Длина пароля меньше 8-ми символов');
            return;
        }
        if (repeatPassword.value.length < 8) {
            alert('Длина пароля меньше 8-ми символов');
            return;
        }
        if (repeatPassword.value !== password.value ) {
            alert('Пароли не совпадают');
            return;
        }

        if (!check.checked) {
            alert('Согласитесь с нашими условиями');
            return;
        }

        if (!mail.value.includes('@')) {
            alert("Неправильный формат почты, строка должна содержать в себе " + "'@'")
            return
        }

        modal.style.display = 'block'


    }



    haveAcc.onclick =  function (e) {
        order(e)
    }

    btn1.onclick = function (e) {
        modal.style.display = 'none'
    }

    btn2.onclick = function (e) {
        order(e)
        modal.style.display = 'none'
    }
    function order(e) {
        e.preventDefault()
        deletedItem('FN')
        deletedItem('noNumber')
        deletedItem('e-mail')
        deletedItem('mail')
        deletedItem('repPass')
        deletedItem('repeatPass')
        deletedItem('checkBox')
        deletedItem('haveAcc')
        deletedItem('input-check-p')
        username.value = ''
        password.value = ''
        document.getElementById("GetAcc").innerHTML="Log in to the system";
        document.getElementById("create-order").innerHTML="Log In";
        document.getElementById('create-order').onclick = function () {
            if (!username.value) {
                alert('Введите ваш никнейм')
                return
            }  if (!password.value) {
                    alert('Введите ваш пароль');
                    return
                } else  {
                alert('Привет!')
            }

        }
    }

    function deletedItem(idItem) {
        document.getElementById(idItem).remove();
    }

}


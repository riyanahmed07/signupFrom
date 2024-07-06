const button = document.querySelector("#signup");
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const logemail = document.querySelector("#logemail");
const logpassword = document.querySelector("#logpassword");
const login = document.querySelector("#login");

const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users, '===> users')

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(
        firstName.value,
        lastName.value,
        userName.value,
        email.value,
        password.value,
        

    );
    if (
        !firstName.value ||
        !lastName.value ||
        !userName.value ||
        !email.value ||
        !password.value
    ) {
        return alert("bhai saab all field la kar Aoo")
    }

    const isExists = users.find((users) => {
        return users.email == email.value || users.userName == userName.value;
    });

    if (isExists) {
        return alert("Email address already excists")
    }

    if (password.value.lenght > 8) {
        return alert("maximum 8 charachters are requried")
    }
    users.push({
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        email: email.value,
        password: password.value,
        logemail:logemail.value,
        logpassword:logpassword.value
    })
    localStorage.setItem('users', JSON.stringify(users))

    return alert('You SignUp Successfully')
});

nextHandler(()=>{
    window.location.href="./login.html";
})
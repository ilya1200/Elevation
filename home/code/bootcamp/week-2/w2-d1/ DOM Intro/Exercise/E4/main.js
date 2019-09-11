const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const errorMsg = document.getElementById("error");

submitBtn.onclick = valideForm;

function valideForm() {
    resetError();

    try {
        valideName();
        validateSalary();
        validateBirthDay();
        validatePhone();
    } catch (err) {
        issueError(err.message);
    } finally {
        const submitGood = document.createElement("div");
        submitGood.innerHTML = `SUBMITED`;
        submitGood.className = "good-submit";
        form.prepend(submitGood);
    }
}

function validatePhone() {
    const phone = form.querySelector("#phone").value;

    if (!phone || phone.length !== 10) {
        throw Error("Phone must be 10 digits long");
    }
}

function valideName() {
    const name = form.querySelector("#name").value;

    if (!name || name.length < 3) {
        throw Error("Name must be longer than 2 characters");
    }
}

function validateSalary() {
    const minSalary = 10000;
    const maxSalary = 16000;
    const salary = parseInt(form.querySelector("#salary").value) || 0;

    if (salary < minSalary || maxSalary < salary) {
        throw Error(`Salary must be greater than ${minSalary} but less than ${maxSalary}`)
    }
}

function validateBirthDay() {
    const birthDay = form.querySelector("#birthDay").value;

    console.log(birthDay)
    if (!birthDay) {
        throw Error(`Birthday is requiered`)
    }
}

function issueError(errMsg) {
    resetError();
    errorMsg.textContent = errMsg;
}

function resetError() {
    errorMsg.textContent = "";
}
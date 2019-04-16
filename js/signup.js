const signId = document.getElementById('signup-id');
const signName = document.getElementById('signup-name');
const signPw = document.getElementById('signup-pw')
const signPwc = document.getElementById('signup-pwc');
const signText = document.getElementById('signup-intro');
const signSubmit = document.getElementById('signup-submit');

const checkId = document.getElementById('check-id');
const checkName = document.getElementById('check-name');
const checkPw = document.getElementById('check-pw')
const checkPwc = document.getElementById('check-pwc');

let check = {
  "id" : false,
  "name" : false,
  "pw" : false,
  "pwc" : false,
}

signId.addEventListener('blur', function(){
  let myRe = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(signId.value);
  if ( signId.value === "" ) {
    check.id = false;
    this.style.backgroundColor = "#f6f6f6";
    checkId.innerText = ""
  } else if ( myRe === true ){
    check.id = true;
    this.style.backgroundColor = "#ecffce";
    checkId.innerText = ""
  } else {
    check.id = false;
    this.style.backgroundColor = "#ffb8b2";
    checkId.innerText = "올바른 이메일의 형식이 아닙니다."
  }
});


signName.addEventListener('blur', function(){
  let myRe = /^[0-9a-zA-Z]+$/.test(signName.value);
  if ( signName.value === "" ) {
    check.name = false;
    this.style.backgroundColor = "#f6f6f6";
    checkName.innerText = ""
  } else if ( myRe === true ){
    check.name = true;
    this.style.backgroundColor = "#ecffce";
    checkName.innerText = ""
  } else {
    check.name = false;
    this.style.backgroundColor = "#ffb8b2";
    checkName.innerText = "영문 대소문자와 숫자만 가능합니다."
  }
});

signPw.addEventListener('blur', function(){
  let myRe = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(signPw.value);
  if (signPw.value === "" ) {
    check.pw = false;
    this.style.backgroundColor = "#f6f6f6";
    checkPw.innerText = ""
  } else if ( myRe === true ){
    check.pw = true;
    this.style.backgroundColor = "#ecffce";
    checkPw.innerText = ""
  } else {
    check.pw = false;
    this.style.backgroundColor = "#ffb8b2";
    checkPw.innerText = "비밀번호는 8자리 이상이며, 최소 하나의 대문자, 소문자, 숫자, 특수문자를 포함해야합니다."
  }
  if (signPwc.value !== ""){
    matchPw();
  }
});

signPwc.addEventListener('blur', function(){
  matchPw();
});

let matchPw = function(){
  if ( signPwc.value === "" ){
    check.pwc = false;
    signPwc.style.backgroundColor = "#f6f6f6";
    checkPwc.innerText = ""
  } else if ((signPw.value === signPwc.value) && (signPwc.value !== "")){
    signPwc.style.backgroundColor = "#ecffce";
    check.pwc = true;
    checkPwc.innerText = ""
  } else {
    signPwc.style.backgroundColor = "#ffb8b2";
    check.pwc = false;
    checkPwc.innerText = "비밀번호가 맞지 않습니다."
  }
}

signSubmit.addEventListener('click', function(){
  console.log(check);
});
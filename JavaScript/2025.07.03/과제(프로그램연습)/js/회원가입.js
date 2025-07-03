//input 상자 접근
let uID = document.querySelector('#user-id');
let pw1 = document.querySelector('#user-pw1');
let pwc = document.querySelector('#user-pw2');

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
uID.onchange = idch;
pw1.onchange = pwch;
pwc.onchange = pwcompare;

// id 길이 체크
function idch() {
  let idlen = uID.value.length;
  if (idlen < 3 || idlen > 10) {
    alert('3글자 이상, 10글자 이하로 입력하세요')
    uID.select();
  }
}

//비밀번호 길이 체크
function pwch() {
  let pwlen = pw1.value.length;
  if (pwlen < 4) {
    alert('4자리 이상 입력하세요')
    pw1.value = '';
    pw1.focus();
  }
}


// 비밀번호가 맞는지 확인
function pwcompare() {
  if (pw1.value != pwc.value) {
    alert('비밀번호가 일치하지 않습니다')
    pwc.value = '';
    pwc.focus();
  }
}
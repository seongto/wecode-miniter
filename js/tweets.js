let dataSum = [];
let newBtn = document.getElementById('post-submit');
let newText = document.getElementById('post-write');
let userName = document.getElementById('profile-name');
let tweetCount = document.getElementById('total-tweets');

//데이터 불러오기
let loadData = function(newData){
  fetch("../data/getAllTimeline.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let myData = data.result.slice();
      dataSum = myData;
      showData();
    });   
};

loadData();

//데이터 불러와서 붙여주기
let showData = function(newData){
  if (newData) {
    dataSum.push(newData);
  }
  dataSum.sort(function(b, a){
    console.log(parseInt(b.date), parseInt(a.date));
    return parseInt(a.date) - parseInt(b.date);
  });
  console.log(dataSum);
  let list = document.getElementById("list-post");
  list.innerHTML ="";
  let count = 0;
  dataSum.forEach( function(item){
    if (item.user === userName.innerText){
      count++;
    }
    let post = document.createElement("li")
    post.innerHTML = `
      <h3 class="font-dosis">${item.user}</h3>
      <p>${item.contents}</p>
      <span>${item.date[0]+item.date[1]+item.date[2]+item.date[3]}년 ${item.date[4]+item.date[5]}월 ${item.date[6]+item.date[7]}일</span>
    `
    list.appendChild(post);
    tweetCount.innerText = count;
  });
}

newBtn.addEventListener('click', function() {
  if (newText.value === ""){
    alert('내용을 입력해 주세요!')
  } else if ( newText.value.length < 10 ){
    alert('10자 이상 적어주세요!')
  } else {
    let now = new Date();
    let nowYear = (now.getFullYear()).toString();
    let nowMonth = plusZero(now.getMonth()+1);
    let nowDate = plusZero(now.getDate());
    let aaa = nowYear + nowMonth + nowDate;
    console.log(userName.value);
    let newData = {
      "contents": newText.value,
      "date": aaa,
      "user": userName.innerText,
    }
    showData(newData);
    newText.value = "";
  }
});

const plusZero = function(a){
  if (a < 10){
    return ("0" + a.toString());
  } else {
    return (a.toString());
  }
}
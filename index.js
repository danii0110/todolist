let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('addToDo');      // 버튼
let toDoList = document.getElementById('toDoList');    // 할 일 리스트창

 //할 일 목록을 저장하기 위한 배열
 //push를 사용하기 위해 array로 선언
const toDo = [];

addToDo.addEventListener('click', function() {
    const createLi = document.createElement('li'); //html 'li' 태그 만들기
    const deleteBtn = document.createElement('button'); //html button 만들기 //x 버튼 만들것임
    deleteBtn.innertext = "x";
    const span = document.createElement("span");
    span.innerText = text;

    //to do를 생성할 때마다 toDo array에 추가
    const toDoAppend = {
        text: text,
        id: toDos.length+1
    };

    //push를 사용하여 array안에 넣어줌
    toDo.push(toDoAppend); 
})




// addToDo.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면
//     var list = document.createElement('li');     // html 'li' 태그 만들기
//     if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
//         alert('내용을 입력해 주세요!');
//     else
//     {
//         list.innerText = inputBox.value;  // <li>입력된 할 일</li>
//         toDoList.appendChild(list);       // 할 일 리스트창에 자식으로 붙이기
//         inputBox.value= "";               // 할 일 입력창 초기화
//     }

//     list.addEventListener('click', function(){      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
//         list.style.textDecoration = "line-through";
//     })
//     list.addEventListener('dblclick', function(){   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
//         toDoList.removeChild(list);
//     })

    
// })

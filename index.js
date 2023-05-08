var ToDos = []; //to-do List

//화면 재로딩
function Loading() {
  //1. 동적 리스트 구성
  let htmlList = "";
  ToDos.forEach((todo) => {
    htmlList += `
        <div class="To-Do">
            <input 
                id="checkButton"
                type="checkbox"
                onclick="Check(${todo.number})"
            />
            <div id="deleteButton" onClick="Delete(${todo.number})"> X </div>
            <div>${todo.content}</div>
        </div>
        `;
  });
  const element = document.getElementById("htmlList");
  element.innerHTML = htmlList;

  //To-Do 항목 삭제 버튼에 이벤트 리스너 등록
  const deleteButtons = document.querySelectorAll("#deleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const index = parseInt(event.target.parentNode.id);
      Delete(index);
    });
  });
}

//추가 버튼에 이벤트 리스너 등록
const addButton = document.getElementById("addToDo");
addButton.addEventListener("click", Add);

//할일 추가하기
function Add() {
  //1. content 가져오기
  const todo = document.getElementById("inputField").value;

  //2. ToDo 객체 생성하기
  const newToDo = {
    number: ToDos.length,
    content: todo,
  };

  //2. ToDo 리스트에 추가하기
  ToDos.push(newToDo);

  //3. View 재설정
  Loading();

  //4. 입력창 초기화
  document.getElementById("inputField").value = "";
}

//할일 삭제하기
function Delete(index) {
  //1. index 가져오기
  //2. ToDo 삭제하기
  ToDos = ToDos.filter((todo) => todo.number != index);

  //3. View 재설정
  Loading();
  alert("삭제되었습니다");
}
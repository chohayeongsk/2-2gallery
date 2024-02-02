//페이지 로드 이벤트
window.addEventListener("load", ()=>{
   
    const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모 요소명
       itemSelector: "article", //배치할 요소명
       columnWidth: "article", //넓이값을 구할 요소명
       transitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도
    });   
 
 });

 //페이지 로드 이벤트
window.addEventListener("load", ()=>{
   
    const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모 요소명
       itemSelector: "article", //배치할 요소명
       columnWidth: "article", //넓이값을 구할 요소명
       transitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도
    });   
 
    //클릭할 모든 버튼 요소 변수에 저장
    const btns = document.querySelectorAll("main ul li");
 
    //버튼의 갯수만큼 반복을 돌면서 
    for(let el of btns){
 
       //각 버튼에 클릭 이벤트 연결
       el.addEventListener("click", e=>{
          e.preventDefault();
 
          //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
          const sort = e.currentTarget.querySelector("a").getAttribute("href");
 
          //grid에 저장된 결과값을 불러와 재정렬 기능 연결
          grid.arrange({
             //옵션값으로 sort변수값 지정
             filter : sort
          });
 
          //다시 모든 버튼의 갯수만큼 반복을 돌면서
          for(let el of btns){
             //각 버튼의 클래스명 "on"을 제거해 비활성화
             el.classList.remove("on");
          }
          
          //클릭한 대상만 선택해서 클래스명 "on"을 추가해 활성화
          e.currentTarget.classList.add("on");
       })
    }   
 });


//댓글추가
function addComment(event) {
   event.preventDefault();
   var commentInput = event.target.querySelector("input");
   var commentText = commentInput.value;
   var date = new Date().toLocaleString();
 
   var commentDiv = document.createElement("div");
   commentDiv.className = "card my-3";
   commentDiv.innerHTML = `
     <div class="card-body">
       <p class="card-text">${commentText}</p>
       <p class="card-text"><small class="text-muted">${date}</small></p>
     </div>
   `;
 
   var commentsDiv = event.target.parentNode.querySelector(".comments");
   commentsDiv.insertBefore(commentDiv, commentsDiv.firstChild);
 
   commentInput.value = "";
 }
 출처: https://i-ri.tistory.com/39 [이리의 맥 이야기:티스토리]

// 이미지 좋아요 기능
function likeImage(button) {
   const likeCount = button.nextElementSibling; // 좋아요 수를 나타내는 요소
   let currentLikes = parseInt(likeCount.textContent); // 현재 좋아요 수

   // 좋아요 수 증가 및 표시
   currentLikes++;
   likeCount.textContent = currentLikes;
}

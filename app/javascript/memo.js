function post() {
   //リクエストを送信する処理
   const form = document.getElementById("form");
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formDate = new FormData(form);
      const XHR = new XMLHttpRequest();
      XHR.open("POST","/posts",true);
      XHR.responseType = "json";
      XHR.send(formDate);
   });
};

window.addEventListener('turbo:load',post);
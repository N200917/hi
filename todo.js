
function addTodo()
{

    let div_todo=document.createElement('div');
    let para=document.getElementById('para');
    function del()
   {
    para.removeChild(div_todo);
   }
    div_todo.innerHTML=`${document.querySelector('#name').value}\t\t\t${document.querySelector('.date_').value}\t<button onclick='del()'>delete</button>`;
    para.appendChild(div_todo);
    let titl=document.createElement('span');
    let dat=document.createElement('span');
    let del=document.createElement('button');
    del.innerHTML="delete";
   titl.classList.add('#name');
   dat.classList.add('#date_');
   del.classList.add('#add');
   titl.innerHTML=titl.value;
   dat.innerHTML=dat.value;
   div_todo.appendChild(titl);
   div_todo.appendChild(dat);
   div_todo.appendChild(del);
   para=document.getElementById('para');
   para.appendChild(div_todo);


}

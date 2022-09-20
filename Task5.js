var li = document.getElementsByTagName('li');

console.log(li);

console.log(li[1]);



li[1].style.fontWeight='bold';

li[1].style.backgroundColor='green';

for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
}

li[2].style.backgroundColor='green';


for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
}

 var items=document.getElementsByClassName('list-group-item');

 console.log(items);

 console.log(items[1]);

 items[1].textContent='Hello 2';

 items[1].style.fontweight = 'bold';

 items[1].style.backgroundColor='yellow'; 



var additem = document.getElementsByClassName('title');

console.log(additem);

console.log(additem[0]);



additem[0].style.fontwssseight='bold';

additem[0].style.backgroundColor='green';

var header=Document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

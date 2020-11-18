/*let idTimeout=setTimeout(function() {
    alert('Bienvenido de nuevo mastodonte titan makina brontosaurio');
    }, 5000);
*/

let i=1;
let idInterval=setInterval(function() {
    alert('Bienvenido de nuevo makina: '+ i++);
    if (i==7) {
        clearInterval(idInterval);
        alert('Bienvenido otra vez');
    }
}, 5000);




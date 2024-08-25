// VARIABLES
const shoppingBasket = document.getElementById('shoppingBasket');
const shoppingBasketList = document.querySelector('#shoppingBasketList tbody');
const clearShoppingBasket = document.getElementById('clearShoppingBasket');
 
const courseList = document.getElementById('courseList');
let coursesShoppingBasket = [];

// LISTENERS
loadListeners();
 
function loadListeners() {
  console.log('Cargando Listeners....');
 
  clearShoppingBasket.addEventListener('click', deleteAllCoursesShoppingBasket);
 
  shoppingBasket.addEventListener('click', deleteCourseShoppingBasket);
 
  courseList.addEventListener('click', addCourseShoppingBasket);
}
 
// FUNCTIONS
function addCourseShoppingBasket() {
  console.log('Agregando Curso');
}
 
function deleteAllCoursesShoppingBasket() {
  console.log('Vaciar carrito de compras');
}
 
function deleteCourseShoppingBasket() {
  console.log('Eliminar curso');
}
 
function addCourseShoppingBasket(e) {
    e.preventDefault();
    if (e.target.classList.contains('addShoppingBasket')) {
      const courseSelected = e.target.parentElement.parentElement;
   
      readCourseToShoppingBasket(courseSelected);
    }
  }
   
  function readCourseToShoppingBasket(courseSelected) {
    const dataCourseSelected = {
      image: courseSelected.querySelector('img').src,
      title: courseSelected.querySelector('h4').textContent,
      price: courseSelected.querySelector('.precio span').textContent,
      id: courseSelected.querySelector('a').getAttribute('data-id'),
      quantity: 1,
    };
   
    // Verificar que existe el elemento en el arreglo
    const existCourse = coursesShoppingBasket.some((course) => course.id === dataCourseSelected.id);
   
    if (existCourse) {
      const coursesListShoppingBasketFiltered = coursesShoppingBasket.map((course) => {
        if (course.id === dataCourseSelected.id) {
          course.quantity++;
          return course;
        } else {
          return course;
        }
      });
   
      coursesShoppingBasket = [...coursesListShoppingBasketFiltered];
    } else {
      coursesShoppingBasket = [...coursesShoppingBasket, dataCourseSelected];
    }
   
    printCoursesShoppingBasket();
    // console.log(coursesShoppingBasket);
  }
   
  function printCoursesShoppingBasket() {
    shoppingBasketList.textContent = '';
   
    coursesShoppingBasket.forEach((course) => {
      const { image, title, price, quantity, id } = course;
   
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${image}" width="100" /></td>
        <td>${title}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td> <a href="#" data-id="${id}" class="deleteCourse">X</a></td>
      `;
   
      shoppingBasketList.appendChild(row);
    });
   
    console.log('Pintando cursos');
  }
   
  function deleteAllCoursesShoppingBasket() {
    coursesShoppingBasket = [];
    printCoursesShoppingBasket();
  }
  
  function deleteCourseShoppingBasket(e) {

    if (e.target.classList.contains('deleteCourse')) {
      const courseId = e.target.getAttribute('data-id');
  
      coursesShoppingBasket = coursesShoppingBasket.filter(course => course.id !== courseId);
  
      printCoursesShoppingBasket();
    }
  }

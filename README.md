###Decripción

El proyecto es un paginador de errores de los proyectos de GitHub. Los proyectos de GitHub se identifican por el nombre del usuario y el nombre de repositorio. Por ello, seleccionando en el menu "Lista de issues" lleva a una pantalla donde se necesitan el nombre del usuario y el nombre del repositorio para obtener los datos usando el api de GitHub.

Utilizamos el ngrx/store para mantener el numero de pagina del visor y movernos entre páginas. Hemos utilizado también el nuevo flujo para el for de html.

La siguiente mejora seria gestionar los usuarios usando strapi, y el usuario solo tendría acceso a la pantalla de lista de issues si esta logueado. Para ello creariamos una pantalla de logueo que verificaria en strapi si esta dado de alta y este servicio devuelve un token que guardariamos en el localstorage y generariamos un guard con ese token

En el proyeco se pide el usuario de GitHub y el nombre del repositorio del que obtener las issue. Tras dar al boton de aceptar, obtenemos todas las issue y las mostramos paginadas de 5 en 5, utilizando el ngrx/store manteniendo un estado de la página en la que estamos.

La siguiente mejora seria gestionar los usuarios usando strapi, y el usuario solo tendría acceso a la pantalla de lista de issues si esta logueado. Para ello creariamos una pantalla de logueo que verificaria en strapi si esta dado de alta y este servicio devuelve un token que guardariamos en el localstorage y generariamos un guard con ese token

//? Questo file, va importato anche in main.js

//* Gli stiamo dicendo crea un vue router da vue router e  crea webHistory(di base webhistory significa che è come se noi stessimo realmente navigando in diverse pagine).
import { createRouter, createWebHistory} from 'vue-router';

import PageHome from './pages/PageHome.vue';
import PageProject from './pages/PageProject.vue';
import PageAbout from './pages/PageAbout.vue';
import Error404 from './pages/errors/Error404.vue';

//* Con la costante stiamo salvando i dati di Vue Router
const router = createRouter({
    
    //! La proprietà history, sarà valorizzata dal metodo createWebHistory. 
    //!Questo, come scritto sopra, permetterà a Vue Router di integrarsi con la navigazione del browser.
    history: createWebHistory(),
    
    //? Queste sono le rotte. Abbiamo un path, che è il luogo dove sto andando.
    //? Abbiamo il name, che è il nome con cui posso indicizzarla.
    //? E il component, è il componente a cui faccio riferimento.
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome
        },
        {
            path: '/project',
            name: 'project',
            component: PageProject
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/404',
            name: '404',
            component: Error404
        }
    ]
});

//* Alla fine stiamo esportando i valori memorizzati nella costante
export { router };
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const createMiddleware = () => {
 const middleware = [
   thunk,
   promiseMiddleware,
//    routerMiddleware(),
 ];

 return middleware;
};

export default createMiddleware;

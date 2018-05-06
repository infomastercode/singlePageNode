class AppRouter {
  constructor(data){
    this.cache_controller = [];
    this.routes = data.routes;
    this.view = data.view;
    window.addEventListener('hashchange', () => this.router());
    window.addEventListener('load', () => this.router());
  }
  router() {
    let eleView = document.getElementById(this.view);
    let url = location.hash.slice(1) || '/';
    let route = this.routes.find(o => o.path === url);
    if(typeof route === 'undefined') throw 'Error can not found ' + url;
    
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'component/' + route.component, true);
    xmlHttp.onreadystatechange = () => {
      if(xmlHttp.readyState === 4 && (xmlHttp.status === 200 || xmlHttp.status == 0) ){
        eleView.innerHTML = xmlHttp.responseText;
        this.loadScript(route.component);
      }
    }
    xmlHttp.send(null);
  }

  loadScript(page){
    if(this.cache_controller.length === 0 || this.cache_controller.indexOf(page) === -1){
      this.cache_controller.push(page);

      let location = window.location;
      let url = location.protocol +'//'+ location.host + '/' + page  + '.js'; /* http://localhost:3000/product/product.js */

      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      document.body.appendChild(script);
    }
  }





}

/*
  const routes = [
    { path: '/home', component: 'page/home' },
    { path: '/about', component: 'page/about' }
  ];

  const router = new AppRouter({
    routes : routes,
    view : 'view'
  });
  */
class AppRouter {
    constructor(data){
      this.routes = data.routes;
      this.view = data.view;
      window.addEventListener('hashchange', () => this.router());
      window.addEventListener('load', () => this.router());
    }
    router() {
      let eleView = document.getElementById(this.view);
      let url = location.hash.slice(1) || '/';
      let route = this.routes.find(o => o.path === url);
      if(typeof route !== 'undefined'){
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", route.component, true);
        xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState === 4 && (xmlHttp.status === 200 || xmlHttp.status == 0) ){
            let responseText = xmlHttp.responseText;
            eleView.innerHTML = responseText;
          }
        }
        xmlHttp.send(null);
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
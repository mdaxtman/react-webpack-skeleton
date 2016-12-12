const rootEl = document.getElementById('root');
rootEl.innerHTML = "<h1>aaa</h1>";

if (module.hot) {
  module.hot.accept();
}
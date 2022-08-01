const TIMEOUT = 1000;
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const code = document.getElementById('code').contentWindow.document;
let timer;


function compile() {
  code.open();
  code.writeln(
    html.value +
      '<style>' +
      css.value +
      '</style>' +
      '<script>' +
      js.value +
      '</script>'
  );
  code.close();
}

document.body.onkeyup = () => {
  clearTimeout(timer);
  timer = setTimeout(compile, TIMEOUT);
};
document.body.onkeydown = () => {
  clearTimeout(timer);
};

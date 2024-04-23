import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe 8';
  greetUser(name);
  document.body.style.backgroundColor = 'yellow';
});

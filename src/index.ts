import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe 7';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});

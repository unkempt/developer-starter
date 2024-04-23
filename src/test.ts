import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe 1111';
  greetUser(name);
  document.body.style.backgroundColor = 'green';
});

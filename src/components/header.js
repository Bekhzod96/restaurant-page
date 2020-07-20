import createElementContainer from './element_container';
import linkedListElement from './linked_list_element';
import Home from '../pages/home';
import About from '../pages/about';
import Special from '../pages/special';

const Header = () => {
  const navBar = document.createElement('nav');
  const header = createElementContainer('header', ['nav-container', 'd-flex']);
  const logoContainer = createElementContainer('div', ['logo-container']);
  const logoLink = createElementContainer('a');
  logoLink.href = '/';
  const logoText = createElementContainer('p', ['logo-text']);
  logoText.innerHTML = 'sushi hub';
  const logoSubText = createElementContainer('p', ['logo-subtext']);
  logoSubText.innerHTML = 'ancient foods to doorstep';
  logoLink.append(logoText, logoSubText);
  logoContainer.append(logoLink);
  const rightLinks = linkedListElement(
    [
      { innertext: 'Home', link: Home },
      { innertext: 'About', link: About },
      { innertext: 'Special', link: Special },
    ],
    ['right-links', 'slide-fading-short-animation'],
  );

  header.append(logoContainer, rightLinks);
  navBar.appendChild(header);
  return navBar;
};

export default Header;

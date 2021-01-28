import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
        // currentCategory directs hook to re-render the component on changes to the value of the state
    }, [currentCategory]);

    return(
        <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">{" "} 📸</span>{" "} Oh Snap!
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              {/* when about is selected, set to false and rendered */}
              <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About me
              </a>
            </li>
            <li>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => (
            <li
                className={`mx-1 ${
                    // if currentCategory.name === category.name is true, and contactSelected is false, then navActive will be returned
                    currentCategory.name === category.name && !contactSelected && 'navActive'
                    }`} 
                    key={category.name}>
                    {/* wrapped in function declaration to avoid function call when component renders */}
                    <span
                        onClick={() => {
                            setCurrentCategory(category);
                            // gallery is rendered
                            setContactSelected(false);
                        }}
                    >
                        {capitalizeFirstLetter(category.name)}
                    </span>
            </li>
           ))}
          </ul>
        </nav>
      </header>
    );
}

export default Nav;
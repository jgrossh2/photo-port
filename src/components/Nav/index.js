import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
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
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>
            {categories.map((category) => (
            <li
                className={`mx-1 ${
                    // if currentCategory.name === category.name is true, then navActive will be returned
                    currentCategory.name === category.name && 'navActive'
                    }`} 
                    key={category.name}>
                    {/* wrapped in function declaration to avoid function call when component renders */}
                    <span
                        onClick={() => {
                            setCurrentCategory(category)
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
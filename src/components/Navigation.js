import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="top-navigate">
          <NavLink to="/" className="link">Etusivu</NavLink>
          <NavLink to="/register" className="link">Rekisteröidy</NavLink>
       </div>
    );
}

export default Navigation;
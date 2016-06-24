import React, {PropTypes} from 'react';

function App({children}) {
  return (
    <div>
      {children}
      {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('./DevTools'); // eslint-disable-line global-require
            return <DevTools />;
          }
        })()
      }
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;

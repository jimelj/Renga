import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';

<<<<<<< HEAD
// Include Card Component
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

ReactDOM.render(
  <Button label="Hello World!" />,
  document.getElementById('app')
);
=======
ReactDom.render(<Main />, document.getElementById('app'));
>>>>>>> passport.js

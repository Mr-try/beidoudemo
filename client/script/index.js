import React from 'react';
import './index.scss';

export default class View extends React.Component {

  render() {
    const { helper, html } = this.props;
    return (
      <html>
        <head>
          <title>Script</title>
          <link rel="stylesheet" href={helper.asset('/script.css')} />
        </head>
        <body>
          <h1 className="title">eqweqwe Page</h1>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset('/manifest.js')} />
          <script src={helper.asset('/script.js')} />
        </body>
      </html>
    );
  }
}

// if (__CLIENT__) {
//   ReactDOM.hydrate(<App />, document.getElementById('container'));
// }

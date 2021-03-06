import * as React from 'react';

export class Home extends React.Component {
    componentWillMount() {
      document.body.classList.add('page-home');
    }
    componentWillUnmount() {
      document.body.classList.remove('page-home');
    }
    render() {
  
        return  (
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-10 push-md-1 col-lg-8 push-lg-2 text-center'>
                      <h1>Roman Kravets</h1>
                      <p>A web designer &amp; developer from Ternopil, Ukraine, who focuses on building interactive experiences &amp; mobile apps, currently leading a design team.</p>
                    </div>
                  </div>
                </div>
          );
      }
}
import React, { Component } from 'react'
import Header from './Header';
import './service.css'

import serviceimg from '../components/Images/serviceimg.png'

class Services extends Component {
  render() {
    return (
      <div className='services'>
        <Header title='Services'  />
        <div className='services-content'>
          <div className='containers service-content-wrapper '>
              <div className='left-side img-wrapper'>
                <img src={serviceimg} alt=''/>
              </div>

              <div className='right-side1'>
                  <h3>Company Vision</h3>
                  <h1>How it Works</h1>
                  <p></p>

                  <ol className='service-content_paragraph'>
                    <li>
                      <p> 
                        The "historical revisionists" have begun attacks on the past in their plot to change history. The Saniwa, who have been charged with protecting history, can imbue life into objects, and 
                      </p>
                    </li>
                    <li>
                      <p> 
                        The "historical revisionists" have begun attacks on the past in their plot to change history. The Saniwa, who have been charged with protecting history, can imbue life into objects, and 
                      </p>
                    </li>
                    <li>
                      <p>
                       The "historical revisionists" have begun attacks on the past in their plot to change history. The Saniwa, who have been charged with protecting history, can imbue life into objects, and 
                      </p>
                    </li>
                  </ol>
                <br/>
              </div> 
          </div>
        </div>
      
      </div>
    )
  }
}
export default Services;
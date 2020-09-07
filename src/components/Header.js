
import React, { Component } from 'react'

export class Header extends Component {

  render() {
    return (
      <header className='header mt-auto py-3 bg-dark text-white' style={{
        position: 'relative',
        top: 0,
        width: '100%'
      }}>
        {/* <div className='container'><h3>Copyright &copy; 2020 - East Coast Insurance</h3>
            <h5>Made with love by Angela, Diana, Lynn, Scott and Shannon</h5>
            <footer className="footer mt-auto py-3 bg-dark text-white"> */}
        <div className="container">
          <h3>Copyright &copy; 2020 - East Coast Insurance</h3>
          <h5>Made with ❤️️ by
              <a
              class="hover footer-links"
              href="https://github.com/lalaggv2"
              target="_blank"
            >
              {' '}Angela
              </a>

          </h5>
        </div>
      </header >
    )
  }
}

export default Header;

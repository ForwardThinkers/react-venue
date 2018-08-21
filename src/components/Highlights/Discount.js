import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import TicketButton from '../UI/TicketButton';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage()
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Slide left>
            <Fade onReveal={() => this.percentage()}>
              <div className="discount_percentage">
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
              </div>
            </Fade>
          </Slide>


          <Slide right>
            <div className="discount_description">
              <h3>Prices have been slashed</h3>
              <h4>Purchase Before Oct 20th</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div>
                <TicketButton
                  text="Purchase tickets"
                  bck="#ffa800"
                  color="#fff"
                  link="http://google.com"
                  target="_blank"
                />
              </div>
            </div>
          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;
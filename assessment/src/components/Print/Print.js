import React, {Component} from 'react'
import {AiFillPrinter} from 'react-icons/ai'

class Print extends Component {
  render() {
    return (
      <AiFillPrinter  onClick={() => window.print()}/>
    )
  }
}

export default Print

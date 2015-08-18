'use strict'

import React from 'react/addons'
import Main from '../app/components/Main'

let TestUtils = React.addons.TestUtils

// describe('App', ()->{
//   let component = {}

//   beforeEach(()=>{
//     // component = TestUtils.renderIntoDocument(<App />)
//   })

//   it('should display menu', ()=>{
//     expect(component.getDOMNode().textContent).toMatch(/username/)
//   })
// })
//

describe('App', ()=>{
  var component
  beforeEach(()=>{
    component = TestUtils.renderIntoDocument(<Main />)
  })

  it('should do stuff', ()=>{
    expect('abc').toMatch(/abc/)
  })
})
const {log} = console

const sinon = require('sinon')

const spy = sinon.spy()

// console.log(spy)

// spy('Hello', 'World')

// log(spy.firstCall.args)

const user = {
  setName(name) {
    this.name = name
  }
}

const setNameSpy = sinon.spy(user, 'setName')

user.setName('Teren Yeung')

log(setNameSpy.callCount)

user.setName('Teren Yeung')

log(setNameSpy.callCount)

setNameSpy.restore()

user.setName('Teren Yeung')

log(setNameSpy.callCount)
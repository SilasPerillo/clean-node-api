import { SignUpController } from './signup'

// const httpRequest = {
//   body: {
//     name: 'any_name',
//     email: 'any_email@gmail.com',
//     password: 'any_password',
//     passwordConfirmation: 'any_password'
//   }
// }

describe('SignUp Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@gmail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()
    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <Fragment>
        <Row className="auth-row">
          <Jumbotron className="sign-up-screen col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="col-sm-10 col-md-8 mx-auto mt-5">
              <h3>Sign Up</h3>
              <Form onSubmit={this.onSignUp}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={email}
                    placeholder="please use fake email"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="please use fake password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="passwordConfirmation">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    required
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="please confirm fake password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  className="btn-dark"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Jumbotron>
        </Row>
        <Row className="home-welcome-row">
          <div className="home-welcome-content col-xs-12 col-sm-8 col-md-8 col-lg-6">
            <h3>Welcome!</h3>
            <p>
            Tic-Tac-Toe, also known as noughts and crosses is normally a game you play with a friend (or by yourself) on a 3x3 grid made on paper with a pencil. In this rendition, you can play online with your friend right next to you taking turns! Although, the opitmal strategy to aim for a tie has probably already been discovered, it&#39;s still a nice way to pass time and keep you sharp!

            Create an account, sign-in and remember to have fun!
            </p>
          </div>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(SignUp)

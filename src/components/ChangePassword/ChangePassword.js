import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert({
          heading: 'Change Password Failed',
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <Fragment>
        <Row className="auth-row">
          <Jumbotron className="auth-screen col-xs-8 col-sm-8 col-md-8 col-lg-6">
            <div className="col-sm-10 col-md-8 mx-auto mt-5">
              <h3>Change Password</h3>
              <Form onSubmit={this.onChangePassword}>
                <Form.Group controlId="oldPassword">
                  <Form.Label>Old password</Form.Label>
                  <Form.Control
                    required
                    name="oldPassword"
                    value={oldPassword}
                    type="password"
                    placeholder="old fake Password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    required
                    name="newPassword"
                    value={newPassword}
                    type="password"
                    placeholder="new fake Password"
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
        <Row className="game-header-row">
          <div className="x-and-zero col-sm-8 col-md-8 col-lg-6">
          </div>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(ChangePassword)

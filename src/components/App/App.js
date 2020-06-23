import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Home from '../Home/Home'
import Game from '../Game/Game'
import GameIndex from '../Game/GameIndex'
import ShowGame from '../Game/ShowGame'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      game: null,
      games: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })

  setGame = game => this.setState({ game })
  setGames = games => this.setState({ games })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user, game, games } = this.state
    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container-fluid">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Route exact path='/' render={() => (
            <Home user={user} setGame={this.setGame} setGames={this.setGames}/>
          )}/>
          <AuthenticatedRoute user={user} path='/game-index' render={() => (
            <GameIndex user={user} games={games} setGame={this.setGame} />
          )}/>
          <AuthenticatedRoute user={user} exact path='/games' render={(props) => (
            <Fragment>
              <Game {...props} user={user} game={game} setGame={this.setGame}/>
            </Fragment>
          )}/>
          <AuthenticatedRoute user={user} exact path='/games/:id' render={(props) => (
            <Fragment>
              <ShowGame {...props} user={user} game={game} setGame={this.setGame} setGames={this.setGames} />
            </Fragment>
          )}/>
        </main>
      </Fragment>
    )
  }
}

export default App

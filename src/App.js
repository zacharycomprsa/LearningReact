import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./narrow-jumbotron.css";
import axios from "axios";
import SearchInput  from "react-search-input";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Modal, ModalHeader,CardLink, ModalBody, ModalFooter,Container, Row, Col } from 'reactstrap';
import GitHubLogin from 'react-github-login';


const NavBar = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/githubViewer" component={GithubViewer} />
    </div>
  </Router>
);

/*class AxiosGet extends Component {
  constructor(props) {
    super();
    this.state = {
      users: []
    };
    this.getData();
  }

  getData() {

    axios.get('https://api.github.com/users?since=135')
        .then(response => {
          this.setState({ users: response.data});
          console.log('users', this.state.users);
        });
  }

  render() {
    return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">Github Users</div>
            <div className="panel-body">
              <ul className="list-group">
                {
                  this.state.users.map((y) => {
                    return ( <li className="list-group-item"><img src={y.avatar_url} className="image-right" width="60px" height="40px" />  {y.login}</li>);
                  })
                }
              </ul>
            </div>
            <div className="panel-footer">
              <nav aria-label="label-default">
                <ul className="pager">
                  <li><a href="#">Previous</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
    );
  }
}*/

class Header extends Component {
  constructor(props) {
    super(props);
    let ProjectName = localStorage.getItem("ProjectName");
    if (ProjectName == null) {
      this.state = {
        ProjectName: "Project Name"
      };
    } else {
      this.state = {
        ProjectName: ProjectName
      };
    }
  }
  render() {
    let Login = localStorage.getItem("Type");
    var githubViewer;
    var signOut;
    if (Login === "Private") {
      githubViewer = (
        <li className="nav-item">
          <a className="nav-link" href="/GithubViewer">
            Github Viewer
          </a>
        </li>
      );
      signOut = (
        <li className="nav-item">
          <a className="nav-link" href="/">
            Sign Out
          </a>
        </li>
      );
    } else {
      signOut = (
        <li className="nav-item">
          <a className="nav-link" href="/">
            Sign In
          </a>
        </li>
      );
    }
    return (
      <div>
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              {githubViewer}
              {signOut}
            </ul>
          </nav>
          <h3 className="text-muted">{this.state.ProjectName}</h3>
        </div>
      </div>
    );
  }
}

class JumboWithButton extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ value: event.target.value });
  }

  handleNameSubmit(event) {
    window.localStorage.setItem("ProjectName", this.state.value);
    alert("A new name has been submitted: " + this.state.value);
    event.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">{this.props.Header}</h1>
          <p className="lead">{this.props.SubText}</p>
          <form>
            <div className="form-group">
              <input
                placeholder="Change Project Name"
                className="form-control"
                type="text"
                value={this.state.value}
                onChange={this.handleNameChange}
              />
            </div>
            <button
              className="btn btn-lg btn-success"
              type="button"
              onClick={this.handleNameSubmit}
            >
              Submit Name Change
            </button>
          </form>
        </div>
      </div>
    );
  }
}

class Jumbo extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">{this.props.Header}</h1>
          <p className="lead">{this.props.SubText}</p>
        </div>
      </div>
    );
  }
}
class MarketingField extends Component {
  render() {
    return (
      <div>
        <div className="row marketing">
          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>
              Donec id elit non mi porta gravida at eget metus. Maecenas
              faucibus mollis interdum.
            </p>

            <h4>Subheading</h4>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
              mattis consectetur purus sit amet fermentum.
            </p>

            <h4>Subheading</h4>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
          </div>

          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>
              Donec id elit non mi porta gravida at eget metus. Maecenas
              faucibus mollis interdum.
            </p>

            <h4>Subheading</h4>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
              mattis consectetur purus sit amet fermentum.
            </p>

            <h4>Subheading</h4>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    /*let ContactData = JSON.parse(localStorage.getItem('ContactData'));*/
    axios
      .get("/user?ID=12345")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log("-->", formData);
    /*window.localStorage.setItem('ContactData', JSON.stringify(formData));*/
    alert("Contact Form Data: " + JSON.stringify(formData));
  }

  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Contact Us Tomorrow!</legend>

          <div className="form-group">
            <input
              name="first_name"
              placeholder="First Name"
              className="form-control"
              type="text"
              ref="FirstName"
            />
          </div>
          <div className="form-group">
            <input
              name="last_name"
              placeholder="Last Name"
              className="form-control"
              type="text"
              ref="LastName"
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              placeholder="Email Address"
              className="form-control"
              type="text"
              ref="Email"
            />
          </div>
          <div className="form-group">
            <input
              name="phone"
              placeholder="+27 021 456 325"
              className="form-control"
              type="text"
              ref="Phone"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="comment"
              placeholder="Message Body"
              ref="Message"
            />
          </div>
          <div className="form-group">
            <div className="text-center">
              <button type="submit" className="btn btn-success" value="Submit">
                Submit <span className="glyphicon glyphicon-send" />
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      /*  <form className="well form-horizontal" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Contact Us Tomorrow!</legend>
                    <div className="form-group">
                        <label className="col-md-4 control-label">First Name</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon widen-span"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="first_name" placeholder="First Name" className="form-control" type="text" ref="FirstName"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Last Name</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon widen-span"><i className="glyphicon glyphicon-user"></i></span>
                                <input name="last_name" placeholder="Last Name" className="form-control" type="text" ref="LastName"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">E-Mail</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon widen-span"><i className="glyphicon glyphicon-envelope"></i></span>
                                <input name="email" placeholder="Email Address" className="form-control" type="text" ref="Email"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Phone</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon widen-span"><i className="glyphicon glyphicon-earphone"></i></span>
                                <input name="phone" placeholder="+27 021 456 325" className="form-control" type="text" ref="Phone"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Message</label>
                        <div className="col-md-4 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon widen-span"><i className="glyphicon glyphicon-pencil"></i></span>
                                <textarea className="form-control" name="comment" placeholder="Message Body" ref="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="text-center">
                            <button type="submit" className="btn btn-success" value="Submit">Submit <span className="glyphicon glyphicon-send"></span></button>
                        </div>
                    </div>

                </fieldset>
            </form>*/
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <p>© {this.props.footerText} 2017</p>
        </footer>
      </div>
    );
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.state={
      modal: false
    }
    this.setCred();
    /*  this.getData();*/
    this.handleLogin = this.handleLogin.bind(this);
    this.publicLogin = this.publicLogin.bind(this);
    this.gitHubSignIn = this.gitHubSignIn.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  setCred() {
    var creds = [
      {
        Email: "zachary@comprsa.com",
        Password: "708090"
      }
    ];

    window.localStorage.setItem("credentials", JSON.stringify(creds));
  }
  handleLogin(e) {
    e.preventDefault();

    const credentials = {};
    for (const field in this.refs) {
      credentials[field] = this.refs[field].value;
    }
    console.log("credentials", credentials);
    var Email = credentials.Email;
    var Password = credentials.Password;
    var storedCreds = JSON.parse(window.localStorage.getItem("credentials"));
    debugger;
    if (Email !== "") {
      if (Email === storedCreds[0].Email && Password === storedCreds[0].Password) {
        localStorage.setItem("Type", "Private");
        window.location = "http://localhost:3000/home";
      } else alert("Incorrect Credentials");
    } else {
      alert("Email Field is Empty");
    }
  }

  publicLogin(f) {
    f.preventDefault();
    localStorage.setItem("Type", "Public");
    window.location = "http://localhost:3000/home";
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  gitHubSignIn(g) {
    g.preventDefault();
    this.toggle();
  }
 /* handleSocialLoginFailure(err){
    console.error(err)
  }*/


  render() {
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);
    return (
      <div>
        <body>
          <div className="container">
            <Jumbo
              Header="Welcome"
              SubText="Enter your credentials and select 'Sign In' or select 'Login With Github' to sign in via Guithub OAuth in order to browse the protected pages and lastly for public pages select 'Continue' to be directed to the publicly available pages. "
            />
            <div className="well well-lg">
              <form className="form-group" onSubmit={this.handleLogin}>
                <fieldset>
                  <div className="text-center">
                    <legend>Enter Credentials</legend>
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                      type="text"
                      ref="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      type="password"
                      ref="Password"
                    />
                  </div>
                  <div className="form-group">
                    <div className="text-center">
                      <div
                        className="btn-group btn-group-justified"
                        role="group"
                        aria-label="..."
                      >
                        <button
                          type="submit"
                          className="btn btn-success btn-group"
                          value="Submit"
                        >
                          Sign In <span className="glyphicon glyphicon-send" />
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary btn-group"
                            onClick={this.publicLogin}
                            value="Submit"
                        >
                          Continue <span className="glyphicon glyphicon-send" />
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                  <Card  style={{textAlignVertical: "center",textAlign: "center",}}>
                    <CardBody>
                      <div className="well well-lg">
                        <form className="form-group">
                          <fieldset>
                            <div className="text-center">
                              <legend>Enter Email Address</legend>
                            </div>
                            <div className="form-group">
                              <input
                                  name="email"
                                  placeholder="Email Address"
                                  className="form-control"
                                  type="text"
                                  ref="email"
                              />
                            </div>
                            <div className="form-group">
                              <div className="text-center">
                                <GitHubLogin clientId="b732003dbd93d714c5e3"
                                             redirectUri="http://localhost:3000/home"
                                             onSuccess={onSuccess}
                                             onFailure={onFailure}/>
                                  </div>
                              </div>
                          </fieldset>
                        </form>
                        </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
            <Footer footerText="Sign in" />
          </div>
        </body>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <body>
      <div className="container">
        <Header />
        <JumboWithButton
          Header="Jumbotron heading"
          SubText="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
          SignUpBtnText="Sign up today"
        />
        <MarketingField />
        <Footer footerText="Home" />
      </div>
    </body>
  </div>
);

const About = () => (
  <div>
    <body>
      <div className="container">
        <Header />
        <Jumbo Header="About" SubText="Stuffs" />
        <div className="row marketing">
          <div className="col-lg-6">
            <h4>About Some Stuff</h4>
            <p>
              Donec id elit non mi porta gravida at eget metus. Maecenas
              faucibus mollis interdum.
            </p>

            <h4>More Stuff</h4>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
              mattis consectetur purus sit amet fermentum.
            </p>

            <h4>Other Stuff</h4>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
          </div>
          <div className="col-lg-6">
            <h4>Stuffz</h4>
            <p>
              Donec id elit non mi porta gravida at eget metus. Maecenas
              faucibus mollis interdum.
            </p>

            <h4>Subheading</h4>
            <p>
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
              mattis consectetur purus sit amet fermentum.
            </p>

            <h4>No Stuffz</h4>
            <p>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
          </div>
        </div>
        <Footer footerText="About" />
      </div>
    </body>
  </div>
);

const Contact = () => (
  <div>
    <body>
      <div className="container">
        <Header />
        <Jumbo
          Header="Contact Us"
          SubText="24 hours a day 7 days a week support."
        />
        <ContactForm />
        <Footer footerText="Contact" />
      </div>
    </body>
  </div>
);

class GithubViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 5,
      searchTxt: "",
      modal: false,
      selectedData: []
    };

    /*  this.getData();*/
    this.handleClick = this.handleClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  getData() {
    axios.get("https://api.github.com/users?since=135").then(response => {
      this.setState({ users: response.data });
      console.log("users", this.state.users);
    });
  }
  updateSearch(x) {
    this.setState({
      searchTxt: x
    });
    console.log("searchTxt", this.state.searchTxt);
    axios
      .get("https://api.github.com/users?since=" + this.state.searchTxt)
      .then(response => {
        this.setState({ users: response.data });
        console.log("users", this.state.users);
      });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  OpenUserDetails(user) {
    console.log('user', user);
    this.setState({ selectedData: user });
    this.toggle();
  }


  render() {
    const { users, currentPage, usersPerPage } = this.state;
    const indexOfLastUsers = currentPage * usersPerPage;
    const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

    const renderUsers = currentUsers.map((user, index) => {
      return (
        <li className="list-group-item" key={index} onClick={this.OpenUserDetails.bind(this, user)}>
          <img
            src={user.avatar_url}
            className="image-right"
            width="60px"
            height="40px"
            alt="profile_image"
          />{" "}
          {user.login}
        </li>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <ul className="pagination">
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
            className="pager-class"
          >
            {number}
          </li>
        </ul>
      );
    });

    return (
      <div>
        <body>
          <div className="container">
            <Header />
            <div className="jumbotron">
              <h1 className="display-3">Return Github Users</h1>
              <div className="panel panel-default">
                <div className="padding" />
                <div className="panel-heading">
                  Type To Return Users EG: 135
                </div>
                <SearchInput
                  className="search-input"
                  value={this.state.searchTxt}
                  onChange={this.updateSearch}
                />
                <div className="padding" />
                <div className="panel-heading">Github Users</div>
                <div className="panel-body">
                  <ul className="list-group">{renderUsers}</ul>
                </div>
              </div>
              <div className="padding" />
              <div className="panel-footer">
                <ul id="page-numbers">{renderPageNumbers}</ul>
              </div>
            </div>
            <Footer footerText="Github Viewer" />
          </div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody>
              <Card  style={{textAlignVertical: "center",textAlign: "center",}}>
                <CardImg top width="100%" height="180px" src={this.state.selectedData.avatar_url} alt="Card image cap" style={{textAlignVertical: "center",textAlign: "center",}}/>
                <CardBody>
                  <CardTitle>{this.state.selectedData.login}</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText> ID: {this.state.selectedData.id}</CardText>
                  <CardText> User Type: {this.state.selectedData.type}</CardText>
                  <CardLink href={this.state.selectedData.html_url}>Github Profile</CardLink>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </body>
      </div>
    );
  }
}


export default NavBar;

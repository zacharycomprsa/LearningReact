import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./narrow-jumbotron.css";
import axios from "axios";
/*import { Jumbotron, Button,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container,Row,Col } from 'reactstrap'*/

const NavBar = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/githubUsers" component={GithubUsers} />
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
    return (
      <div>
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className="nav-link" href="/">
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
              <li className="nav-item">
                <a className="nav-link" href="/GithubUsers">
                  Github Users
                </a>
              </li>
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

class GithubUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 5
    };

    this.getData();
    this.handleClick = this.handleClick.bind(this);
  }

  getData() {
    axios.get("https://api.github.com/users?since=135").then(response => {
      this.setState({ users: response.data });
      console.log("users", this.state.users);
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { users, currentPage, usersPerPage } = this.state;


    const indexOfLastUsers = currentPage * usersPerPage;
    const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);

    const renderUsers = currentUsers.map((user, index) => {
      return (
        <li className="list-group-item" key={index}>
          <img
            src={user.avatar_url}
            className="image-right"
            width="60px"
            height="40px"
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
        <div className="container">
          <Header />
          <div className="jumbotron">
            <h1 className="display-3">Returning Github Users</h1>
            <div className="panel panel-default">
              <div className="panel-heading">Github Users</div>
              <div className="panel-body">
                <ul className="list-group">{renderUsers}</ul>
              </div>
            </div>
            <div className="padding"></div>
            <div className="panel-footer">
              <ul id="page-numbers">{renderPageNumbers}</ul>
            </div>
          </div>
          <Footer footerText="Github Users" />
        </div>
      </div>
    );
  }
}

export default NavBar;

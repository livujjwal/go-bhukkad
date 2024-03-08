import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="pt-28 text-center font-bold text-4xl">About us</h1>
        <UserClass name="First" />
      </div>
    );
  }
}

export default About;

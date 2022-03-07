import React from "react";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const dates = ["Tomorrow", "Yesterday", "Someday", "Never"];

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      comment: "Please write a comment",
      date: "",
      isNice: false,
    };
  }

  handleSubmit(event) {
    alert(
      `${this.state.isNice ? "Nicely, " : ""}${this.state.author} wrote ${
        this.state.comment
      } at ${this.state.date} o'clock`
    );

    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type == "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Container sx={{ paddingTop: "20px" }}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              name="author"
              type="text"
              value={this.state.author}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Comment:
            <textarea
              name="comment"
              value={this.state.comment}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Date:
            <select
              name="date"
              value={this.state.date}
              onChange={(e) => this.handleInputChange(e)}
            >
              {dates.map((date, index) => (
                <option key={index.toString()} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </label>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.isNice}
                  onChange={(e) => this.handleInputChange(e)}
                  name="isNice"
                />
              }
              label="Is it nice?"
            ></FormControlLabel>
          </FormGroup>
          <input type="submit" value="Submit" />
        </form>
      </Container>
    );
  }
}

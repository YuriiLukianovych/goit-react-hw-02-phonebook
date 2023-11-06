import React, { Component } from 'react';
import ErrorInput from 'components/ErrorInput';
import css from './ContactForm.module.scss';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().integer().min(10).max(15).required(),
});

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  error = false;

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contactData = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(contactData);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className="boxWrapper">
        <form onSubmit={this.handleSubmit}>
          <div className={css.formRow}>
            <label htmlFor="name">Name:</label>
            <input
              className={`input ${this.error && 'error'}`}
              type="text"
              value={name}
              id="name"
              name="name"
              required
              onChange={this.onInputChange}
            />
            {this.error && <ErrorInput />}
          </div>
          <div className={css.formRow}>
            <label htmlFor="number">Number:</label>
            <input
              className={`input ${this.error && 'error'}`}
              type="tel"
              value={number}
              id="number"
              name="number"
              required
              onChange={this.onInputChange}
            />
            {this.error && <ErrorInput />}
          </div>
          <div className={css.formRow + ' ' + css.btnWrapper}>
            <button className={css.btn} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

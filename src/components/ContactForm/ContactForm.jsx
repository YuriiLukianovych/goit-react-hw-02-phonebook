import React, { Component } from 'react';
import css from './ContactForm.module.scss';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().integer().min(10).max(15).required(),
});

export default class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    const contactData = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    this.props.addContact(contactData);

    e.target.reset();
  };

  render() {
    return (
      <div className="boxWrapper">
        <form onSubmit={this.handleSubmit} autoComplete="false">
          <div className={css.formRow}>
            <label htmlFor="name">Name:</label>
            <input
              className={`input ${this.error && 'error'}`}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={css.formRow}>
            <label htmlFor="number">Number:</label>
            <input
              className={`input ${this.error && 'error'}`}
              type="tel"
              id="number"
              name="number"
              required
            />
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

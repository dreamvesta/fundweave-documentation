---
sidebar_position: 1
---

# FundWeave Test-Driven Development Approach

Test-Driven Development (TDD) is a software development technique where tests are written before the code. This approach ensures that every part of the application is covered by tests, leading to a lower chance of bugs and higher code quality. This document will explain how we use TDD in both the frontend and backend of FundWeave.

## Frontend Testing - React

We use a combination of Jest and React Testing Library for our frontend testing. Jest is a JavaScript testing framework that provides a simple API for structuring tests and making assertions. React Testing Library is a tool that allows us to render our React components in a test environment and make assertions on them.

Here's an example of a test for a hypothetical `Login` component:

```javascript
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form and submits', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<Login onSubmit={handleSubmit} />);
  
  fireEvent.change(getByLabelText(/username/i), { target: { value: 'testuser' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'testpass' } });
  
  fireEvent.click(getByText(/submit/i));
  
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});



# JavaScript Password Generator

## Description

For module 03 of boot camp we were given starter code with completed HTML and CSS files, and a started JavaScript file. We had to complete the JavaScript to make a working password generator. Using what we learned this past week, Google, and help from AskBCS I was able to finish writing the JavaScript so that the deployed password generator meets the criteria below.

### User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```



## Usage

When clicking on the first link below, you will be brought to a page that looks like the screenshot below. When you click the red 'Generate Password' a popup will appear asking how many characters to include in the new password, if the number is in the accepted range, more popups will appear asking for clarification on character types to include in the password. As long as at least one character type is chosen a new password will then be generated and displayed in the center box. If a number is chosen outside of the accepted range or no character type is chosen you will be asked to try again, until an accepted response is input.

![screenshot](./assets/images/screenshot.png) 

## License

Please refer to the LICENSE in the repo.


## Links

Deployed Application: https://anjaliroland.github.io/M3-JS-PasswordGenerator/

Repository: https://github.com/anjaliroland/M3-JS-PasswordGenerator

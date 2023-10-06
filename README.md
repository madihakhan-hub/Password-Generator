# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

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
## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Installation

```
1. After setting up our HTML and CSS files, we will edit our Javascript file to present the above functionality to generate a secure pass word.
2. We will define the variables that which will include the password criteria.
3. We will make sure there to set up a prompt which asks the use to verify the criteria. If text is entered that does not align with the criteria, the user will be provided with an alert notice. (Please see screenshot) ![image](https://github.com/madihakhan-hub/Password-Generator/assets/144630720/6064a2c0-9166-49cc-81c1-9385b2d7b3c1)
4. We will combine the character sets that should be included in the password.
5. We are now ready to generate the password using the 'for' loop *Be sure to include the return* ![image](https://github.com/madihakhan-hub/Password-Generator/assets/144630720/ee6bc130-69f1-415c-9cbd-c90824622879)
6. Now we will include the function to write the password.
7. Make sure to add an event listener to generate the button! ![image](https://github.com/madihakhan-hub/Password-Generator/assets/144630720/6dbb406e-f82b-4679-a8f7-13431ca7556b)
Our finished webpage should look like this! Once we select the 'Generate Password' button, we should be prompted to verify the criteria we entered. Once all the questions are answered, the user will be provided with a randomly generated password! ![image](https://github.com/madihakhan-hub/Password-Generator/assets/144630720/65731c9f-5eb8-4161-984c-d0080ab524a8) ![image](https://github.com/madihakhan-hub/Password-Generator/assets/144630720/9e3d640d-d966-46a5-bd82-5a8c93c889ae)










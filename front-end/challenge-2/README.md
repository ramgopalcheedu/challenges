# Challenge 2 - Programming and Creative (4 to 4.5 hrs)


For this assignment you'll be using your tech chops to build a FAQ section that responds to users selecting options from two, related dropdowns. Using the provided images, we ask you to create an implemention of the below: (you will not be able to completely finish in 4 hours so be diligent in selecting which elements you implement. We care more about the quality of your code than how far you get). 

## Assignment: Double Dropdowns
For this assignment you'll build a FAQ section that relies on two dropdowns to determine what information should be shown. 

Step 1) When a user opens the page, both dropdowns should be in a default state and no FAQ questions should be seen.     

Step 2) Selecting the State from Dropdown #1 will populate Dropdown #2 with a list of potential cities to select
  
Step 3) Selecting a city from Dropdown #2 will populate the FAQ questions related only to that city.  If the user selects a different city (with the same state), the questions should update accordingly.
  
Step 4) After the city is selected, the city-specific FAQs will show on screen.
   
Step 5) If a new state is selected, Dropdown #2 (Cities Dropdown) should reset to a default 'Select an Option...'.
  
Step 6) Only after selecting the city are the new, city-specific FAQs shown  
 

##Features to implement in the following order of priority:
Note for dropdowns: Please build the dropdown yourself (no packages, plugins, etc)
1) State Dropdown
2) Cities Dropdown that updates accordingly when State dropdown is changed
3) FAQ Sections
4) Testing
5) CSS - add styling at your leisure

#####Items to be sure to include: 
- An `onChange` callback in the dropdowns

#####Items to include if you have time:
- Have a default text & value to start
- Try to be DRY when displaying information 
- Ability to use ref to fetch values
- Close dropdown when a user clicks outside of dropdown area
- Checkmark icon only next to active selection
- Multiselect
- Themes
- Animation

If you already know how, or feel like challenging yourself further, please use CSS in JS with[styled-components](https://www.styled-components.com/docs/basics).

Good luck!

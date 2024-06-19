# Yes We Kanban! A Task Board

## Link to Application
https://sacarr91.github.io/Yes-We-Kanban/

## Description

"Yes We Kanban" is a simple task board application that allows a team to manage project tasks. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

The [Day.js](https://day.js.org/en/) library is employed through the browser to work with dates. 

## User Story

```md
AS A project team member with multiple tasks to organize
I WANT a task board 
SO THAT I can add individual project tasks, manage their state of progress and track overall project progress accordingly
```

## Acceptance Criteria

GIVEN a task board to manage a project

- [x] WHEN I open the task board
<br>THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)

- [ ] WHEN I view the task board for the project
<br>THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)

- [x] WHEN I click on the button to define a new task
<br>THEN I can enter the title, description and deadline date for the new task into a modal dialog

- [x] WHEN I click the save button for that task
<br>THEN the properties for that task are saved in localStorage

- [ ] WHEN I drag a task to a different progress column
<br>THEN the task's progress state is updated accordingly and will stay in the new column after refreshing

- [x] WHEN I click the delete button for a task
<br>THEN the task is removed from the task board and will not be added back after refreshing

- [x] WHEN I refresh the page
<br>THEN the saved tasks persist

## Screenshot
[screenshot of deployed application]

## Grading Requirements

### Technical Acceptance Criteria: 40%

- [ ] Satisfies all of the above acceptance criteria plus the following:

  * - [ ] Uses the Day.js library to work with dates

### Deployment: 32%

- [x] Application deployed at live URL

- [ ] Application loads with no errors

- [ ] Application GitHub URL submitted

- [x] GitHub repo contains application code

### Application Quality: 15%

- [x] Application user experience is intuitive and easy to navigate

- [x] Application user interface style is clean and polished

- [ ] Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

- [x] Repository has a unique name

- [x] Repository follows best practices for file structure and naming conventions

- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- [x] Repository contains multiple descriptive commit messages

- [ ] Repository contains quality README file with: 
- - [x] description, 
- - [ ] screenshot, and 
- - [ ] link to deployed application
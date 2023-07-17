# WeekDayScheduler

Work Day Scheduler

The Work Day Scheduler is a simple calendar application that allows users to schedule their work day and save tasks for each hour. This application displays time blocks for standard business hours (9am to 12am) and allows users to enter and save tasks or events for each hour. The time blocks are color-coded to indicate whether they are in the past, present, or future. The entered tasks persist even after refreshing the page.

The application is built using HTML, CSS (Bootstrap), and JavaScript (jQuery and Day.js). Local storage is utilized to store and retrieve the user's task data.

<img width="1386" alt="Screenshot 2023-07-17 at 5 55 42 pm" src="https://github.com/rameenq/WeekDayScheduler/assets/126428649/4eb57a84-747a-41b8-b32f-a13399dc9ffa">



Features
Current Date and Time: The application displays the current date and time in the header. The time is updated in real-time.

Time Blocks: 

The time blocks represent each hour of the work day, from 9am to 12am on a 24-hour clock. Each time block consists of an hour label, a text area to enter tasks, and a save button.

Color-coded Time Blocks: 

The time blocks are color-coded to indicate whether they are in the past (gray), present (red), or future (green) relative to the current time.

Task Input and Save:

Users can enter tasks or events in the text area of each time block. The entered tasks can be saved by clicking the save button. The saved tasks persist even after refreshing the page.

Usage

- Open the Work Day Scheduler application in a web browser.

- The current date and time will be displayed at the top of the page.

- Scroll down to view the time blocks for each hour of the work day.

- Each time block will be color-coded based on whether it is in the past, present, or future.

- Click on the text area of a time block to enter a task or event for that hour.

- After entering the task, click the save button to save the task. The task will be stored in the local storage.

- The saved tasks will persist even after refreshing the page.

Development

If you want to make changes or customize the Work Day Scheduler application, follow these steps:

1. Clone the repository or download the source code.

2. Open the index.html file in a web browser to see the application.

3. Make changes to the HTML, CSS, or JavaScript files as desired.

4. Test the application in the web browser to verify the changes.

5. Deploy or host the modified application as needed.


The application utilizes the following libraries and frameworks:

- Bootstrap: 
- jQuery: 
- Day.js:
  
License

The Work Day Scheduler application is released under the MIT License.

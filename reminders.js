// Handle the reminder form submission
document.getElementById('reminder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the data
    const task = document.getElementById('task').value;
    const time = document.getElementById('time').value;

    // Create a new list item for the reminder
    const reminderList = document.getElementById('reminder-list').getElementsByTagName('ul')[0];
    const newReminder = document.createElement('li');
    newReminder.textContent = `${task} at ${time}`;

    // Append the new reminder to the list
    reminderList.appendChild(newReminder);

    // Clear the input fields
    document.getElementById('task').value = '';
    document.getElementById('time').value = '';
});

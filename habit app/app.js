const habitInput = document.getElementById('habit-input');
const addHabitButton = document.getElementById('add-habit');
const habitList = document.getElementById('habit-list');
const totalHabits = document.getElementById('total-habits');
const completedHabits = document.getElementById('completed-habits');
const pendingHabits = document.getElementById('pending-habits');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

// Function to render habits
function renderHabits() {
    habitList.innerHTML = '';
    let completedCount = 0;

    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = habit.done;
        checkbox.addEventListener('change', () => {
            habit.done = checkbox.checked;
            localStorage.setItem('habits', JSON.stringify(habits));
            renderHabits();
        });

        if (habit.done) {
            completedCount++;
            li.style.textDecoration = 'line-through';
        }

        li.innerHTML = `
            <span>${habit.name}</span>
            <button onclick="removeHabit(${index})">Remove</button>
        `;
        li.prepend(checkbox);
        habitList.appendChild(li);
    });

    totalHabits.textContent = habits.length;
    completedHabits.textContent = completedCount;
    pendingHabits.textContent = habits.length - completedCount;
}

// Function to add a new habit
addHabitButton.addEventListener('click', () => {
    const habitName = habitInput.value.trim();
    if (habitName) {
        habits.push({ name: habitName, done: false });
        habitInput.value = '';
        localStorage.setItem('habits', JSON.stringify(habits));
        renderHabits();
    }
});

// Function to remove a habit
function removeHabit(index) {
    habits.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
}

// Initial render
renderHabits();

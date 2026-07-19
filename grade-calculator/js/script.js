// ==============================
// Simple Grade Calculator
// ==============================

const NUM_SUBJECTS = 5;

function getMarks() {
  const marks = [];

  for (let i = 1; i <= NUM_SUBJECTS; i++) {
    let mark = prompt(`Enter marks for Subject ${i} (0-100):`);

    // Validate input: keep asking until a valid number between 0 and 100 is given
    while (mark === null || mark.trim() === "" || isNaN(mark) || mark < 0 || mark > 100) {
      if (mark === null) {
        // User pressed Cancel - stop the whole process
        alert("Calculation cancelled.");
        return null;
      }
      mark = prompt(`Invalid input. Enter a valid number (0-100) for Subject ${i}:`);
    }

    marks.push(Number(mark));
  }

  return marks;
}

function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

function calculateAverage(total, count) {
  return total / count;
}

function calculateGrade(average) {
  let grade;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else if (average >= 40) {
    grade = "E";
  } else {
    grade = "F (Fail)";
  }

  return grade;
}

function displayResultsInPage(marks, total, average, grade) {
  document.getElementById("marksList").textContent = marks.join(", ");
  document.getElementById("totalMarks").textContent = total;
  document.getElementById("averageMarks").textContent = average.toFixed(2);
  document.getElementById("finalGrade").textContent = grade;
  document.getElementById("resultBox").classList.remove("hidden");
}

function runGradeCalculator() {
  const marks = getMarks();

  if (marks === null) {
    return; // user cancelled
  }

  const total = calculateTotal(marks);
  const average = calculateAverage(total, NUM_SUBJECTS);
  const grade = calculateGrade(average);

  // Display results using alert(), as required by the assignment
  alert(
    `Results:\n` +
    `Marks: ${marks.join(", ")}\n` +
    `Total Marks: ${total}\n` +
    `Average Marks: ${average.toFixed(2)}\n` +
    `Grade: ${grade}`
  );

  // Also display results on the page for a nicer UX
  displayResultsInPage(marks, total, average, grade);
}

document.getElementById("startBtn").addEventListener("click", runGradeCalculator);

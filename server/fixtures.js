//Fixture
if (userTasks.find().count() === 0) {
  userTasks.insert({
    taskSubject: "Test Task 1",
	taskBody: "This is a test task body",
    created: new Date()
  });

  userTasks.insert({
    taskSubject: "Test Task 2",
	taskBody: "This is a test task body",
    created: new Date()
  });

  userTasks.insert({
    taskSubject: "Test Task 3",
	taskBody: "This is a test task body",
    created: new Date()
  });

  userTasks.insert({
    taskSubject: "Test Task 4",
	taskBody: "This is a test task body",
    created: new Date()
  });
}
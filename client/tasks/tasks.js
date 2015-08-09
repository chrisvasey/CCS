if (Meteor.isClient) {
  // Loading Tasks
  Template.listTasks.helpers({
	    taskLoad: function() {
	  	return userTasks.find();
	  }
  });
  Template.task.helpers({
		howOld: function() {
			howOld = moment(this.created).fromNow();
			return howOld;
		}
	});
  //Adding tasks
  Template.newTask.events({
  	'submit .taskInput': function () {
  		//Prevent default browser form submit
  		event.preventDefault();

  		var taskSubject = event.target.taskInput.value;

  		//Insert task into collection
  		userTasks.insert({
  			taskSubject: taskSubject,
  			created: new Date()
  		});
  	}
  });
}


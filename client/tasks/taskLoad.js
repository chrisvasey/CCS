if (Meteor.isClient) {
  // This code only runs on the client
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

}


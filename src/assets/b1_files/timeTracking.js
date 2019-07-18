var _gaq = [];

function TrackTiming(category, variable, opt_label, onlyOnce) {
	  this.category = category;
	  this.variable = variable;
	  this.label = opt_label ? opt_label : undefined;
	  this.onlyOnce = (onlyOnce != null && onlyOnce) ? true : false;
	  this.startTime = new Date().getTime();
	  this.endTime = null;
	  this.sent = false;
	  return this;
}

TrackTiming.prototype.startTime = function() {
	  this.startTime = new Date().getTime();
	  return this;
}

TrackTiming.prototype.endTimeNow = function() {
	  this.endTime = new Date().getTime();
	  return this;
}

TrackTiming.prototype.send = function() {
	 if (this.sent && this.onlyOnce) {
		 return;
	 }
	
	 if (this.endTime == null) {
		 this.endTime = new Date().getTime();
	 }
	 
	  var timeSpent = this.endTime - this.startTime;
	  if (timeSpent <= 0 || timeSpent > 60000) {
		  return;
	  }
	  
	  console.log("TrackTiming", this.category, this.variable, timeSpent);
	  //window._gaq.push(['_trackTiming', this.category, this.variable, timeSpent, this.label]);
	  ga('send', 'timing', this.category, this.variable, timeSpent, this.label);
	  this.sent = true;
	  
	  return this;
}
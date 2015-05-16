define(function() {
  'use strict';
  var Container;
  Container = (function() {
   function Container() {
   this._section = [];
   }
   Container.prototype = {
   add: function(section){
   this._section.push(section);
    return this;
   },
   getData: function(){
    var i, section, dataSections, len;
    dataSections=[];
    for (i = 0, len = this._section.length; i < len; i++) {
		section = this._section[i];
		dataSections.push(section.getData());
}
	return dataSections;
    }
};
   return Container;
  }());
  return Container;
});
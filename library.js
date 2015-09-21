"use strict";

var User = module.parent.require('./user');
var Topic = module.parent.require('./topics');
var ThreadTools = module.parent.require('./threadTools');
var Post = module.parent.require('./posts');
var SocketAdmins = module.parent.require('./socket.io/admin');
var db = module.parent.require('./database');

var Utils = module.parent.require('../public/src/utils')

var plugin = {};


plugin.lockTopic = function (data, callback) {

    var limit = 1000;

    //console.log(data);
    // ThreadTools.lock(topicObj.tid, 0, next);
    Post.getPidIndex(data.pid, data.uid, function(err, index){
        //console.log(index);
        if( !err && index >= limit )
        {   // if no error and the index >= limit -> LOCK
            console.log("Locking topic: "+ data.tid);
            ThreadTools.lock(data.tid, 0, callback);
        }
    });
};

module.exports = plugin;











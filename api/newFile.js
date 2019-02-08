    var fs = require('fs');
    //read files under the gulp folder directory!!
    fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
        require('./gulp/' + task);
    });
}


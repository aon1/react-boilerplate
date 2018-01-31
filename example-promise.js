// function getTempCallback(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Philadelphia', function(error, temp) {
// 	if(error) {
// 		console.log('error', error);
// 	} else {
// 		console.log('success', temp);
// 	}
// })

function getTempPromise(location) {
	return new Promise(function(resolve, reject) {
		resolve(79);
		reject('city not found');
	});
}

getTempPromise('Philadelphia').then(function(temp) {
	console.log(temp);
}, function(err) {
	console.log(err);
});